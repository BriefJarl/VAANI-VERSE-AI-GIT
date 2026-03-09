# Vaani Verse

AI powered voice productivity planner for students.

Built for AI for Bharat Hackathon.

---

## Problem

Students struggle to organize tasks efficiently.

Typing tasks takes time and breaks focus.

---

## Solution

Vaani Verse enables students to:

• Speak tasks using voice  
• Automatically convert them into actionable tasks  
• Track daily productivity  
• Stay focused with built-in focus timer  

---

## Tech Stack

Frontend  
React + Vite + Tailwind  

Backend  
Node.js + Express  

Database  
Supabase (PostgreSQL)

Cloud  
AWS EC2

Animations  
Framer Motion

---

## Features

• Voice task capture  
• AI task planning  
• Task completion tracking  
• Focus timer  
• Productivity analytics dashboard

---
## 🧠 System Architecture

```mermaid
flowchart LR

A[User Voice Input 🎤] --> B[React Frontend UI]

B --> C[Voice Processing Layer]
C --> D[AI Understanding Engine 🤖]

D --> E[Task Generation Service]

E --> F[Supabase Database]

F --> G[Task Dashboard 📋]

G --> H[Productivity Analytics 📊]

H --> I[Insights & Reports]

subgraph AI Layer
D
E
end

subgraph Cloud Infrastructure
F
end
```


## 🎥 Prototype Demo Video

Watch the working prototype demonstration here:

👉 **[Watch Demo Video](https://drive.google.com/file/d/1w60e5owiB7E4nccALqEX2mF9De5Smhmt/view)**

---

## Live MVP

(https://fabulous-bombolone-5e2bf2.netlify.app/)
