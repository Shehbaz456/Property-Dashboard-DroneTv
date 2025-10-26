import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./pages/Home";
import Properties from "./pages/Properties.jsx";
import Agents from "./pages/Agents";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="properties" element={<Properties />} />
          <Route path="agents" element={<Agents />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
