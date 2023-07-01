// import "./App.css";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import Work from "./Component/Work/Work";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Community from "./Component/Community/Community";

function App() {
  return (
    <div className="w-screen bg-white overflow-hidden" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </div>
  );
}

export default App;
