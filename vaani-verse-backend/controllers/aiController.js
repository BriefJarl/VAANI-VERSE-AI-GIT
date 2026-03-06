const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("PASTE_YOUR_API_KEY");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.askAI = async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    res.json({ reply: response });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};