import cuadro1 from '../assets/cuadro1.webp';
import cuadro2 from '../assets/cuadro2.webp';
import cuadro3 from '../assets/cuadro3.webp';
import './homepage.scss';

const Homepage = () => {
    return (
        <section id="inicio" className="homepage">
            <h1>Bienvenido a The Constellation</h1>
            <p>La tienda donde encontrarás los mejores cuadros y fotos para decorar tu hogar</p>
            <div className='galeria'>
                <img src={cuadro1} alt="Cuadro para parejas 1" />
                <img src={cuadro2} alt="Cuadro para parejas 2" />
                <img src={cuadro3} alt="Cuadro para parejas 3" />
                {/* <img src={cuadro4} alt="Cuadro para parejas 4" />
                <img src={cuadro5} alt="Cuadro para parejas 5" />
                <img src={cuadro6} alt="Cuadro para parejas 6" />
                <img src={cuadro7} alt="Cuadro para parejas 7" />
                <img src={cuadro8} alt="Cuadro para parejas 8" />
                <img src={cuadro9} alt="Cuadro para parejas 9" />
                <img src={cuadro10} alt="Cuadro para parejas 10" />
                <img src={cuadro11} alt="Cuadro para parejas 11" />
                <img src={cuadro12} alt="Cuadro para parejas 12" /> */}
            </div>
        </section>
    );
}

export default Homepage;