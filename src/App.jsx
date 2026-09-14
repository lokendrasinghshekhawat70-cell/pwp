import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="website">
        <Navbar />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomBar />
      </div>
    </Router>
  );
}

export default App;
