import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/zap1assign/src/pages/Home.jsx" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
