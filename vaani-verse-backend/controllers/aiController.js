const { GoogleGenerativeAI } = require("@google/generative-ai");
const pool = require("../config/db");

/* ===============================
🤖 Gemini Setup
================================ */

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});


/* ===============================
🧠 Extract Task From Sentence
================================ */

exports.extractTask = async (req, res) => {

  try {

    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "No text provided"
      });
    }

    const prompt = `
Extract the task from this sentence:

"${text}"

Return ONLY the task text.
`;

    const result = await model.generateContent(prompt);

    const task = result.response.text().trim();

    /* Save task in Supabase */

    const savedTask = await pool.query(
      "INSERT INTO tasks(task, completed) VALUES($1, $2) RETURNING *",
      [task, false]
    );

    res.json({
      success: true,
      task: savedTask.rows[0]
    });

  } catch (error) {

    console.error("AI Task Extraction Error:", error);

    res.status(500).json({
      success: false,
      message: "Task extraction failed"
    });

  }

};