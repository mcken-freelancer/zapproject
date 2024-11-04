import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Tomatopage from "./pages/tomatopage";
import Potatopage from "./pages/potatopage";
import Pepperpage from "./pages/pepperpage";
import Lettucepage from "./pages/lettucepage";
import Eggplantpage from "./pages/eggplantpage";
import Cucumberpage from "./pages/cucumberpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tomatopage" element={<Tomatopage />} />
          <Route path="/potatopage" element={<Potatopage />} />
          <Route path="/pepperpage" element={<Pepperpage />} />
          <Route path="/lettucepage" element={<Lettucepage />} />
          <Route path="/eggplantpage" element={<Eggplantpage />} />
          <Route path="/cucumberpage" element={<Cucumberpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
