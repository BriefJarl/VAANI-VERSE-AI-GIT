import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import AssistantWorkspace from "./pages/AssistantWorkspace";
import TasksWorkspace from "./pages/TasksWorkspace";

export default function App() {

  return (
    <Router>

      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* AI Study Planner */}
        <Route path="/app" element={<AssistantWorkspace />} />

        {/* Daily Productivity Dashboard */}
        <Route path="/tasks" element={<TasksWorkspace />} />

      </Routes>

    </Router>
  );
}