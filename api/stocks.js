export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  const FINNHUB_KEY = process.env.FINNHUB_KEY || "d82kvg1r01qmgc0ghvvgd82kvg1r01qmgc0gi000";

  const TICKERS = [
    { symbol: "AAPL", name: "Apple" },
    { symbol: "MSFT", name: "Microsoft" },
    { symbol: "GOOGL", name: "Alphabet" },
    { symbol: "NVDA", name: "NVIDIA" },
    { symbol: "AMZN", name: "Amazon" },
    { symbol: "META", name: "Meta" },
  ];

  try {
    const results = await Promise.all(
      TICKERS.map(async (t) => {
        const r = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${t.symbol}&token=${FINNHUB_KEY}`
        );
        const d = await r.json();
        return {
          symbol: t.symbol,
          name: t.name,
          price: d.c,
          change: d.d,
          pct: d.dp,
          high: d.h,
          low: d.l,
          open: d.o,
        };
      })
    );
    return res.status(200).json({ stocks: results });
  } catch (err) {
    console.error("Stock fetch error:", err);
    return res.status(500).json({ error: "Failed to fetch stock data" });
  }
}
