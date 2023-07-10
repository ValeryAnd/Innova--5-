import {Link} from "react-router-dom";
import logo from '../imagenes/logo1.png';
import pagos from '../imagenes/pagos-1.webp'
import styles from '../estilos/footer.module.css'

import {FaInstagram, FaFacebookSquare, FaTiktok} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer>
            <ul className={styles.footerMenu}>
                <li><Link to='/productos/'><img src={logo} alt="logo" className={styles.logo}></img></Link></li>
                <li><Link to='/productos/'>Inicio</Link></li>
                <li className={styles.footerList}>Productos
                    <ul className={styles.ListProducts}>
                        <li><Link to="/productos/audifonos">Audífonos</Link></li>
                        <li><Link to="/productos/celulares">Celulares</Link></li>
                        <li><Link to="/productos/laptops">Laptops/<br></br>Tablets</Link></li>
                        <li><Link to="/productos/accesorios">Accesorios</Link></li>
                    </ul>
                </li>
                <li className={styles.footerList}>Ubicanos
                    <p>Av.Benavides 1948 - Santiago de Surco</p>
                </li>
                <li className={styles.footerList}>Contact us
                    <ul className={styles.contactUs}>
                        <li><Link to='https://www.instagram.com/'>
                            <FaInstagram size={24}></FaInstagram>
                        </Link>
                        </li>
                        <li>
                            <Link to='https://www.facebook.com/'>
                                <FaFacebookSquare size={24}></FaFacebookSquare>
                            </Link>
                        </li>
                        <li>
                            <Link to='https://www.tiktok.com/upload?lang=es'>
                                <FaTiktok size={24}></FaTiktok>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className={styles.footerBuy}>
                <img src={pagos} alt="pagos"></img>
            </div>
            <p className={styles.copyright}>© 2023 por INNOVA PRODUCTS - Todos los derechos reservados</p>
        </footer>
    )
}