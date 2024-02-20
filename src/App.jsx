import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import CuadroDetalles from "./components/CuadroDetalles";
import Cuadros from "./components/Cuadros";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Fotos from "./components/fotos";

function Main() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Cuadros />
      <Fotos />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/cuadro/:id"
          element={
            <>
              <Navbar />
              <CuadroDetalles />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
