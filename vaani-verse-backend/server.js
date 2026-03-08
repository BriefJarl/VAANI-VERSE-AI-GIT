require("dotenv").config();

const express = require("express");
const cors = require("cors");

const pool = require("./config/db"); // Supabase DB connection

const { GoogleGenerativeAI } = require("@google/generative-ai");

/* ===============================
🚀 Import Routes
================================= */

const aiRoutes = require("./routes/aiRoutes");
const taskRoutes = require("./routes/tasks");

/* ===============================
🚀 Create App
================================= */

const app = express();

/* ===============================
🔥 Middleware
================================= */

app.use(express.json());
app.use(cors());

/* ===============================
🔥 Supabase DB Connection Test
================================= */

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Supabase connection error:", err);
  } else {
    console.log("✅ Supabase Connected");
  }
});

/* ===============================
🤖 Gemini Setup
================================= */

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

/* ===============================
🌐 Connect API Routes
================================= */

app.use("/api/ai", aiRoutes);
app.use("/api/tasks", taskRoutes);

/* ===============================
🩺 Health Check
================================= */

app.get("/ping", (req, res) => {
  res.json({
    success: true,
    message: "VAANI-VERSE Backend Working 🚀",
  });
});

/* ===============================
🧠 Generate Plan API
================================= */

app.post("/generate-plan", async (req, res) => {
  try {
    const { goal } = req.body;

    if (!goal) {
      return res.status(400).json({
        success: false,
        message: "Goal is required",
      });
    }

    const prompt = `
You are an expert study planner.

Create a structured 10-day plan for: ${goal}

Return ONLY JSON array in this format:

[
 { "day": 1, "task": "Task here" }
]
`;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    const cleaned = text.replace(/```json|```/g, "").trim();

    const planData = JSON.parse(cleaned);

    /* ===============================
    Save Plan in Supabase (Postgres)
    ================================= */

    const savedPlan = await pool.query(
      "INSERT INTO plans(goal, plan) VALUES($1, $2) RETURNING *",
      [goal, JSON.stringify(planData)]
    );

    res.json({
      success: true,
      data: savedPlan.rows[0],
    });

  } catch (error) {

    console.error("Plan Generation Error ❌:", error.message);

    res.status(500).json({
      success: false,
      message: "Plan generation failed",
    });

  }
});

/* ===============================
❌ 404 Handler
================================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* ===============================
🟢 Start Server
================================= */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});