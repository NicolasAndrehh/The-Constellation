import { useState } from "react";
import { useParams } from "react-router-dom";
import maderaNegra from "../assets/madera-negra.png";
import madera from "../assets/madera.png";
import ListaDeCuadros from "../data/listaDeCuadros";
import "./cuadroDetalles.scss";

const CuadroDetalles = () => {
  const id = useParams().id - 1;
  const [color, setColor] = useState("#000000");
  const [marco, setMarco] = useState("Marco de pasta");
  const cuadro = ListaDeCuadros[id];

  const handleMarcoSeleccion = (e) => {
    setMarco(e.target.value);
    e.target.value === "madera" ? setColor("#A85418") : setColor("#000000");
  };

  return (
    <section id="cuadro-detalles" className="cuadro-detalles-section">
      <h1>{cuadro.nombre}</h1>
      <div className="cuadro-detalles">
        <img
          src={cuadro.imagen}
          alt={cuadro.nombre}
          className="cuadro"
          style={{ border: `1.5rem solid ${color}` }}
        />
        <h4>Selecciona el marco de tu cuadro:</h4>
        <div className="marco-seleccion">
          <div className="option">
            <input
              type="radio"
              id="marcoPasta"
              name="marco"
              value="pasta"
              onClick={(e) => handleMarcoSeleccion(e)}
            />
            <label htmlFor="marcoPasta" className="option-label">
              Marco de pasta
            </label>
            <span
              className="ejemplo"
              style={{
                background: "#000000",
              }}
            />
          </div>
          <div className="option">
            <input
              type="radio"
              id="marcoMaderaNegro"
              name="marco"
              value="madera negro"
              onClick={(e) => handleMarcoSeleccion(e)}
            />
            <label htmlFor="marcoMaderaNegro" className="option-label">
              Marco de madera
            </label>
            <span
              className="ejemplo"
              style={{
                backgroundImage: "url(" + maderaNegra + ")",
              }}
            />
          </div>
          <div className="option">
            <input
              type="radio"
              id="marcoMadera"
              name="marco"
              value="madera"
              onClick={(e) => handleMarcoSeleccion(e)}
            />
            <label htmlFor="marcoMadera" className="option-label">
              Marco de madera
            </label>
            <span
              className="ejemplo"
              style={{
                backgroundImage: "url(" + madera + ")",
              }}
            />
          </div>
        </div>
        <a
          href={`https://wa.me/3028181588?text=¡Hola!%20Estoy%20interesado%20en%20comprar%20${cuadro.nombre}%20con%20el%20marco%20${marco}%20de%20tu%20tienda.`}
          className="boton-comprar"
        >
          Comprar por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CuadroDetalles;
