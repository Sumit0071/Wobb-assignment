import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MessagePage from "./pages/MessagePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<MessagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
