import { Link } from "react-router-dom";
import ListaDeCuadros from "../data/listaDeCuadros";
import "./cuadros.scss";

const Cuadros = () => {
  return (
    <section id="cuadros" className="cuadros-section">
      <h1>Cuadros</h1>
      <div className="galeria">
        {ListaDeCuadros.map((cuadro) => (
          <div key={cuadro.id} className="cuadro-container">
            <img src={cuadro.imagen} alt={cuadro.nombre} className="cuadro" />
            <h4>{cuadro.nombre}</h4>
            <Link to={`/cuadro/${cuadro.id}`}>Ver opciones</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cuadros;
