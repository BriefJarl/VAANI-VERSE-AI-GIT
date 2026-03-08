const express = require("express");
const router = express.Router();
const pool = require("../config/db");

/* ===============================
➕ Add Task
================================ */

router.post("/add", async (req, res) => {

  try {

    const { task } = req.body;

    const result = await pool.query(
      `
      INSERT INTO tasks (task, completed, created_at)
      VALUES ($1, false, NOW())
      RETURNING *
      `,
      [task]
    );

    res.json({
      success: true,
      task: result.rows[0]
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({ error: "Task creation failed" });

  }

});


/* ===============================
📋 Get All Tasks
================================ */

router.get("/all", async (req, res) => {

  try {

    const tasks = await pool.query(
      `
      SELECT 
        id,
        task,
        completed,
        created_at AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Kolkata' AS created_at
      FROM tasks
      ORDER BY created_at DESC
      `
    );

    res.json({
      tasks: tasks.rows
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to fetch tasks"
    });

  }

});


/* ===============================
✅ Mark Task Complete (ID Based)
================================ */

router.put("/complete/:id", async (req, res) => {

  try {

    const { id } = req.params;

    const updatedTask = await pool.query(
      `
      UPDATE tasks
      SET completed = true
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    res.json({
      success: true,
      task: updatedTask.rows[0]
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

});


/* ===============================
📊 Daily Progress
================================ */

router.get("/progress/today", async (req, res) => {

  try {

    const totalResult = await pool.query(
      "SELECT COUNT(*) FROM tasks"
    );

    const completedResult = await pool.query(
      "SELECT COUNT(*) FROM tasks WHERE completed = true"
    );

    const total = parseInt(totalResult.rows[0].count);
    const completed = parseInt(completedResult.rows[0].count);

    res.json({
      total,
      completed,
      progress: total === 0 ? 0 : (completed / total) * 100
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

});


/* ===============================
🎤 Voice Command: Done Task
================================ */

router.post("/done", async (req, res) => {

  try {

    const { task } = req.body;

    const result = await pool.query(
      `
      UPDATE tasks
      SET completed = true
      WHERE LOWER(task) LIKE $1
      AND completed = false
      RETURNING *
      `,
      [`%${task.toLowerCase()}%`]
    );

    if (result.rows.length === 0) {
      return res.json({
        message: "Task already completed or not found"
      });
    }

    res.json({
      success: true,
      task: result.rows[0]
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to mark task completed"
    });

  }

});

module.exports = router;