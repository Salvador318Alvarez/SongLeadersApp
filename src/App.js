import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "../src/components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Home />
        <Routes>
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
