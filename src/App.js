import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Registro } from "./components/Registro";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
