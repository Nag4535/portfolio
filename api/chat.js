export default async function handler(req, res) {
  // CORS headers first — always
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Check API key exists
  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set");
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const { messages, system } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages format" });
    }

    // Filter out any empty messages and convert to Gemini format
    const geminiMessages = messages
      .filter(m => m.content && m.content.trim())
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

    // Gemini requires alternating user/model roles
    // Make sure first message is always user
    const filteredMessages = geminiMessages.filter((_, i) => {
      if (i === 0) return geminiMessages[0].role === "user";
      return true;
    });

    const requestBody = {
      contents: filteredMessages,
      generationConfig: {
        maxOutputTokens: 512,
        temperature: 0.7,
      },
    };

    // Add system instruction if provided
    if (system) {
      requestBody.system_instruction = {
        parts: [{ text: system }],
      };
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    console.log("Calling Gemini API...");

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    console.log("Gemini response status:", response.status);

    // Check for Gemini API errors
    if (!response.ok) {
      console.error("Gemini API error:", JSON.stringify(data));
      return res.status(500).json({
        error: data?.error?.message || "Gemini API error",
        content: [{ type: "text", text: "Sorry, I'm having trouble right now. Please try again!" }],
      });
    }

    // Extract text from Gemini response
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't get a response. Please try again.";

    // Return in format App.jsx expects
    return res.status(200).json({
      content: [{ type: "text", text }],
    });

  } catch (error) {
    console.error("Proxy error:", error.message);
    return res.status(500).json({
      error: "Internal server error",
      content: [{ type: "text", text: "Network error. Please try again!" }],
    });
  }
}