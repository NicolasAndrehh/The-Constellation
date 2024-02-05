import logo from '../assets/logo.png';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="logo" href='/'>
                <img src={logo} alt="Logo de la tienda" />
            </a>
            <div className='nav-links'>
                <a href="#inicio">
                    Inicio
                </a>
                <a href="#cuadros">
                    Cuadros
                </a>
                <a href="#fotos">
                    Fotos
                </a>
            </div>
        </nav>
    );
}

export default Navbar;