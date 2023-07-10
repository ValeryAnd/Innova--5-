import logo from '../imagenes/logo1.png';
import {Link} from "react-router-dom";
import styles from '../estilos/header.module.css'
//Importamos los iconos a utilizar
import {FaUserAlt, FaShoppingCart} from 'react-icons/fa'
import {useEffect} from "react";

export default function Header() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <header>
            <title>Innova Products</title>
            <Link to="/productos" className={styles.logo}><img src={logo} alt="logo"/></Link>
            <ul className={styles.navMenu}>
                <li><Link to="/productos">Inicio</Link></li>
                <li className={styles.listProducts}>
                    <p>Productos
                    </p>
                    <ul className={styles.contUl}>
                        <li><Link to="/productos/audifonos">Audífonos</Link></li>
                        <li><Link to="/productos/celulares">Celulares</Link></li>
                        <li><Link to="/productos/laptops">Laptops/Tablets</Link></li>
                        <li><Link to="/productos/accesorios">Accesorios</Link></li>
                    </ul>
                </li>
            </ul>
            <div className={styles.navIcon}>
                <Link to='/'>
                    <FaUserAlt size={20}></FaUserAlt>
                </Link>
                <Link to="/carrito">
                    <FaShoppingCart size={20}></FaShoppingCart>
                    <span></span>
                </Link>
            </div>
        </header>

    );
}

