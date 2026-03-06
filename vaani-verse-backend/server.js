require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { GoogleGenerativeAI } = require("@google/generative-ai");

/* ===============================
🚀 Import Routes
================================= */

const aiRoutes = require("./routes/aiRoutes");

/* ===============================
🚀 Create App
================================= */

const app = express();

/* ===============================
🔥 Middleware
================================= */

app.use(cors());
app.use(express.json());

/* ===============================
🔥 MongoDB Connection (FIXED)
================================= */

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => {
console.error("MongoDB Error ❌:", err.message);
process.exit(1);
});

/* ===============================
📦 Plan Schema
================================= */

const planSchema = new mongoose.Schema(
{
goal: {
type: String,
required: true,
},
plan: [
{
day: Number,
task: String,
},
],
},
{ timestamps: true }
);

const Plan = mongoose.model("Plan", planSchema);

/* ===============================
🤖 Gemini Setup
================================= */

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
model: "gemini-1.5-flash",
});

/* ===============================
🤖 AI Routes
================================= */

app.use("/api/ai", aiRoutes);

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

```
if (!goal) {
  return res.status(400).json({
    success: false,
    message: "Goal is required",
  });
}

const prompt = `
```

You are an expert study planner.

Create a structured 10-day plan for: ${goal}

Return ONLY JSON array in this format:

[
{ "day": 1, "task": "Task here" }
]
`;

````
const result = await model.generateContent(prompt);

const text = result.response.text();

const cleaned = text.replace(/```json|```/g, "").trim();

const planData = JSON.parse(cleaned);

const savedPlan = await Plan.create({
  goal,
  plan: planData,
});

res.json({
  success: true,
  data: savedPlan,
});
````

} catch (error) {
console.error("Plan Generation Error ❌:", error.message);

```
res.status(500).json({
  success: false,
  message: "Plan generation failed",
});
```

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT} 🚀`);
});
