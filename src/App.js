import "./App.css";
import { Routes, Route } from "react-router-dom";

import { AboutUs, ContactUs, Courses, Faq, Home } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
