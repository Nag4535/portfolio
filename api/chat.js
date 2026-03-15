export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  if (!process.env.GROQ_API_KEY) {
    console.error("GROQ_API_KEY is not set");
    return res.status(500).json({
      content: [{ type: "text", text: "API key not configured." }],
    });
  }

  try {
    const { messages, system } = req.body;

    // Build messages array with system message first
    const groqMessages = [
      { role: "system", content: system },
      ...messages,
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type":  "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model:      "llama-3.1-8b-instant",
        max_tokens: 512,
        temperature: 0.7,
        messages:   groqMessages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API error:", JSON.stringify(data));
      return res.status(500).json({
        content: [{ type: "text", text: "Sorry, I'm having trouble right now. Please try again!" }],
      });
    }

    // Extract reply and return in format App.jsx expects
    const text = data?.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";

    return res.status(200).json({
      content: [{ type: "text", text }],
    });

  } catch (error) {
    console.error("Proxy error:", error.message);
    return res.status(500).json({
      content: [{ type: "text", text: "Network error. Please try again!" }],
    });
  }
}