import Header from './header';
import {Link} from "react-router-dom";
import styles from '../estilos/productos.module.css'

//Importamos los iconos a utilizar
import {FaArrowDown, FaTruckMoving, FaTruckLoading, FaCreditCard} from 'react-icons/fa'

//Importamos las imagenes a utilizar
import audIMG from '../imagenes/pexels-cottonbro-studio-3945667-removebg-preview.png'
import celIMG from '../imagenes/pexels-keifer-costa-11216259-removebg-preview.png'
import tabIMG from '../imagenes/2004288571427_2-removebg-preview.png'
import accIMG from '../imagenes/mouse3-removebg-preview.png'
import com1 from '../imagenes/comentario1.jpeg'
import com2 from '../imagenes/comentario2.jpeg'
import com3 from '../imagenes/comentario3.jpeg'
import new1 from '../imagenes/klim-musalimov-pCJYFw8dSnE-unsplash-removebg-preview.png'
import new2 from '../imagenes/stefen-tan-KYw1eUx1J7Y-unsplash-removebg-preview.png'
import new3 from '../imagenes/2004311980721-1.jpg'
import new4 from '../imagenes/2065300885137.png'
import last1 from '../imagenes/2004293401511-2.jpg'
import last2 from '../imagenes/mouse.png'
import last3 from '../imagenes/tablet.png'
import last4 from '../imagenes/audifonos6.jpg'
import Footer from "./footer";

export default function Productos() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <main>
            <Header/>
            <section className={styles.mainHome} id="inicio">
                <div className={styles.mainText}>
                    <h5 className={styles.feauterSubtitle}>New Product</h5>
                    <h1 className={styles.feauterTitle}>WH-CH510</h1>
                    <p className={styles.feauterText}>Los audífonos Sony WH-1000XM4 son líderes en noise cancelling en
                        la
                        industria. Disfruta
                        de la mejor tecnología
                        y de la detección inteligente que pausa la música cuando hablas o te quitas los audífonos.</p>
                    <button className={styles.button}>
                        <Link to={`/agregar?productID=${1}`}>Ver más</Link>
                    </button>
                </div>

                <div className={styles.downArrow}>
                    <Link to='#' onClick={() => scrollToSection('shop')} className={styles.down}>
                        <FaArrowDown size={24}></FaArrowDown>
                    </Link>
                </div>
            </section>

            <section className={`${styles.line} ${styles.bottomTop}`} id="shop">
                <div className={styles.centerText}>
                    <h2>Shop Now</h2>
                </div>

                <div className={styles.products}>
                    <div className={styles.row}>
                        <Link to="/productos/audifonos">
                            <img src={audIMG} alt=""></img>
                        </Link>
                    </div>

                    <div className={styles.row}>
                        <Link to="/productos/celulares">
                            <img src={celIMG} alt=""></img>
                        </Link>

                    </div>

                    <div className={styles.row}>
                        <Link to="/productos/laptops">
                            <img src={tabIMG} alt=""></img>
                        </Link>

                    </div>

                    <div className={styles.row}>
                        <Link to="/productos/accesorios">
                            <img src={accIMG} alt=""></img>
                        </Link>

                    </div>
                </div>
            </section>

            <section className={styles.line}>
                <div className={styles.centerText}>
                    <h2>Innova Clients</h2>
                </div>

                <div className={styles.clients}>
                    <div className={styles.rowTwo}>
                        <img src={com1} alt=""></img>
                    </div>

                    <div className={styles.rowTwo}>
                        <img src={com2} alt=""></img>
                    </div>

                    <div className={styles.rowTwo}>
                        <img src={com3} alt=""></img>
                    </div>
                </div>
            </section>

            <section className={styles.line} id="new">
                <div className={styles.centerText}>
                    <h2>New in</h2>
                </div>

                <div className={styles.products}>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${0}`}>
                        <img src={new1} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Apple</h5>
                            <h4>AirPods 3era generación</h4>
                            <p>S/799.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${18}`}>
                        <img src={new2} alt=""></img>
                        <div className={styles.newText}>
                            <h5>LOGITECH</h5>
                            <h4>Logitech teclado Bluetooth</h4>
                            <p>S/150.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${13}`}>
                        <img src={new3} alt=""></img>
                        <div className={styles.newText}>
                            <h5>SAMSUNG</h5>
                            <h4>Samsung galaxy Tab S6 Lite</h4>
                            <p>S/2,999</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${31}`}>
                        <img src={new4} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Apple</h5>
                            <h4>Apple iphone 14 6.1"128GB 12MP+12MP AZUL</h4>
                            <p>S/3,799</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section id="stock">
                <div className={styles.centerText}>
                    <h2>Último stock</h2>
                </div>

                <div className={styles.products}>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${36}`}>
                        <img src={last1} alt=""></img>
                        <div className={styles.newText}>
                            <h5>HP</h5>
                            <h4>Laptop HP amd Ryzen 5 8GB</h4>
                            <p>S/1,959.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${19}`}>
                        <img src={last2} alt=""></img>
                        <div className={styles.newText}>
                            <h5>LOGITECH</h5>
                            <h4>Mouse Logitech G Pro x super ligero inalámbrico - blanco</h4>
                            <p>S/150.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${12}`}>
                        <img src={last3} alt=""></img>
                        <div className={styles.newText}>
                            <h5>SAMSUNG</h5>
                            <h4>Tablet samsung galaxy TAB S7 - Verde mistico</h4>
                            <p>S/949.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${5}`}>
                        <img src={last4} alt=""></img>
                        <div className={styles.newText}>
                            <h5>PHILIPS</h5>
                            <h4>Audífonos philips on ear con micrófono blanco</h4>
                            <p>S/59.40</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className={styles.rectangle}>
                <div className={styles.rectangleSection}>
                    <FaTruckMoving size={70}></FaTruckMoving>
                    <p>Envíos a todo el Perú</p>
                </div>

                <div className={styles.rectangleSection}>
                    <FaCreditCard size={70}></FaCreditCard>
                    <p>Múltiples formas de pago</p>
                </div>

                <div className={styles.rectangleSection}>
                    <FaTruckLoading size={70}></FaTruckLoading>
                    <p>Envíos gratis por compras mayores a S/500</p>
                </div>
            </section>

            <Footer/>
        </main>
    )
}

