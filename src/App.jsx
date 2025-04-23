import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Research from "./components/pages/Research";
import NationalEvents from "./components/pages/NationalEvents";
import Event from "./components/pages/Event";
import Register from "./components/pages/Register";
import Projects from "./components/pages/Projects";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/national" element={<NationalEvents />} />
      <Route path="/event" element={<Event />} />
      <Route path="/research" element={<Research />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/register/:eventId" element={<Register />} />
    </Routes>
  );
}
