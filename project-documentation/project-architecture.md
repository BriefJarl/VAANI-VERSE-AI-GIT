# Vaani Verse — Project Architecture

Vaani Verse is a **voice-first AI productivity platform** that converts natural speech into structured task workflows for students and professionals across Bharat.

Core idea:

🎤 Speak Tasks → 🤖 AI Understands → 📋 Tasks Generated → 📊 Productivity Insights

The system combines **voice AI + web interface + cloud infrastructure** to make productivity tools simple and accessible.

---

# High-Level Product Architecture

        User Voice
            │
            ▼
    Voice Interface (Frontend)
            │
            ▼
    Backend API Layer
    (Node.js + Express)
            │
            ▼
      AI Processing
  (Speech + NLP + LLM)
            │
            ▼
    Supabase Database
            │
            ▼
    Task Dashboard UI
            │
            ▼
   Productivity Analytics

This architecture allows **real-time voice task creation and tracking**.

---

# Core Product Components

### Landing Website
Introduces the product and explains the value of **voice-first productivity**.

### Voice AI Workspace
Main interaction interface where users **speak tasks naturally**.

### Task Dashboard
Displays:

• pending tasks  
• completed tasks  
• productivity progress  

### AI Planner
AI analyzes tasks and provides **smart productivity suggestions**.

### Productivity Analytics
Generates insights about:

• completion rate  
• productivity trends  
• task patterns  

---

# Frontend Architecture

Frontend built using **React** with a clean SaaS-style interface.

Key sections:

• Landing page  
• Voice task interface  
• Task dashboard  
• Productivity analytics  

Design principles:

- minimal UI  
- mobile-first layout  
- fast interaction  
- accessible design

---

# Backend Architecture

Backend implemented with **Node.js + Express**.

Responsibilities:

• process AI requests  
• manage task APIs  
• store user data  
• generate analytics  

Main API endpoints:


POST /api/tasks
GET /api/tasks
PATCH /api/tasks/:id
DELETE /api/tasks/:id
GET /api/analytics


---

# Database Architecture

The platform uses **Supabase (PostgreSQL)**.

Primary entity:


Task
├ id
├ user_id
├ title
├ status
├ priority
├ created_at
├ completed_at
└ voice_input


Additional data stored:

• user productivity metrics  
• task completion statistics  
• analytics data  

Supabase enables **real-time dashboard updates**.

---

# Voice Task Workflow

The core product workflow:


User Speaks Task
│
▼
Voice Captured
│
▼
Speech-to-Text
│
▼
AI Intent Detection
│
▼
Task Generated
│
▼
Stored in Database
│
▼
Dashboard Updated


This allows **task creation in seconds using voice**.

---

# Current MVP Features

The prototype includes the following capabilities:

### Voice Task Creation
Users speak tasks which are converted into structured tasks instantly.

### Task Dashboard
Centralized interface for viewing and managing tasks.

### Completion Tracking
Tasks can be marked complete and stored with timestamps.

### Productivity Analytics
Dashboard visualizes task completion and productivity trends.

---

# Technology Stack

| Layer | Technology |
|------|-------------|
Frontend | React |
Backend | Node.js + Express |
Database | Supabase |
AI | Generative AI |
Cloud | AWS Infrastructure |

---

# Future Architecture Expansion

Planned upgrades include:

• multilingual voice support  
• smart scheduling AI  
• collaborative tasks  
• calendar integrations  
• mobile applications  

Future AI features:

- AI task breakdown
- productivity recommendations
- context-aware task planning

---

# Product Vision


Voice Interface
│
▼
AI Productivity Engine
│
▼
Personal Productivity Dashboard


Vaani Verse aims to become a **voice-first productivity platform for Bharat**, enabling millions of users to manage tasks naturally through speech.

---

Built for **AWS AI for Bharat Hackathon**
