import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<Appointments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
