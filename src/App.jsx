import "./App.css";
import Send from "./pages/Send";
import History from "./pages/History";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Send />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
