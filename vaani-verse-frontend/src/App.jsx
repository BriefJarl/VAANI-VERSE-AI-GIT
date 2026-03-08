import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import useHoverSound from "./hooks/useHoverSound";
import VoiceWorkspace from "./pages/VoiceWorkspace";
import CustomCursor from "./components/CustomCursor";

function App() {
  useHoverSound();
  return (
    
    <BrowserRouter>

      {/* Custom Cursor */}
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/workspace" element={<VoiceWorkspace />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;