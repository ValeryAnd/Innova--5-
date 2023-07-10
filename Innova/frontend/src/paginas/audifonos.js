import {Link} from "react-router-dom";
import styles from '../estilos/productos.module.css';
import Footer from "./footer";
import img1 from '../imagenes/2065306080994_2.jpg'
import img2 from '../imagenes/pexels-sound-on-3394666.jpg'
import img3 from '../imagenes/audifonos3.jpg'
import img4 from '../imagenes/audifono4.jpg'
import img5 from '../imagenes/audifonos5.jpg'
import img6 from '../imagenes/audifonos6.jpg'
import img7 from '../imagenes/audifonos7.jpg'
import img8 from '../imagenes/audifonos11.jpg'
import img9 from '../imagenes/audifonos9.jpg'
import img10 from '../imagenes/audifonos10.jpg'
import img11 from '../imagenes/audifonos13.jpg'
import img12 from '../imagenes/audifonos14.jpg'
import Header from "./header";

export default function Audifonos() {
    return (
        <main>
            <Header/>

            <section>
                <div className={styles.selection}>
                    <h2>
                        <Link to="/productos" className={styles.subText}>
                            Volver
                        </Link>
                        Audífonos y AirPods
                    </h2>
                </div>

                <div className={styles.productsSelection}>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${0}`}>
                        <img src={img1} alt=""/>
                        <div className={styles.newText}>
                            <h5>Apple</h5>
                            <h4>AirPods 2da generación</h4>
                            <p>S/1,079.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${1}`}>
                        <img src={img2} alt=""/>
                        <div className={styles.newText}>
                            <h5>SONY</h5>
                            <h4>Audífonos Sony WH-1000XM4 BT</h4>
                            <p>S/1,499.90</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${2}`}>
                        <img src={img3} alt=""/>
                        <div className={styles.newText}>
                            <h5>XIAOMI</h5>
                            <h4>Audífonos Xiaomi redmi buds essential earbuds azul</h4>
                            <p>S/79.90</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${3}`}>
                        <img src={img4} alt=""/>
                        <div className={styles.newText}>
                            <h5>Samsung</h5>
                            <h4>Audífonos true wireless buds2 pro</h4>
                            <p>S/500.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${4}`}>
                        <img src={img5} alt=""/>
                        <div className={styles.newText}>
                            <h5>SONY</h5>
                            <h4>Audífonos over ear Sony azul WHCH510LZ</h4>
                            <p>S/99.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${5}`}>
                        <img src={img6} alt=""/>
                        <div className={styles.newText}>
                            <h5>PHILIPS</h5>
                            <h4>Audífonos philips on ear con micrófono blanco</h4>
                            <p>S/59.40</p>
                        </div>
                    </Link>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${24}`}>
                        <div className={`${styles.rowThree} ${styles.imge}`}>
                            <img src={img7} alt=""/>
                            <div className={styles.newText}>
                                <h5>ANTRYX</h5>
                                <h4>Audífonos Antryx H750BT blanco</h4>
                                <p>S/99.00</p>
                            </div>
                        </div>
                    </Link>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${25}`}>
                        <img src={img8} alt=""/>
                        <div className={styles.newText}>
                            <h5>SKULLCANDY</h5>
                            <h4>Audífonos skullcandy crusher 3.0 bt</h4>
                            <p>S/419.00</p>
                        </div>
                    </Link>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${26}`}>
                        <img src={img9} alt=""/>
                        <div className={styles.newText}>
                            <h5>SONY</h5>
                            <h4>Audífonos in ear Sony true wireless blanco</h4>
                            <p>S/189.00</p>
                        </div>
                    </Link>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${27}`}>
                        <img src={img10} alt=""/>
                        <div className={styles.newText}>
                            <h5>APPLE</h5>
                            <h4>Apple airpods max</h4>
                            <p>S/2779.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${28}`}>
                        <img src={img11} alt=""/>
                        <div className={styles.newText}>
                            <h5>HUAWEI</h5>
                            <h4>Audifonos bluetooth tws freebuds pro 2</h4>
                            <p>S/579.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${29}`}>
                        <img src={img12} alt=""/>
                        <div className={styles.newText}>
                            <h5>GENERICO</h5>
                            <h4>Audífonos Bluetooth 5.1 Gaming K9</h4>
                            <p>S/69.00</p>
                        </div>
                    </Link>
                </div>
            </section>
            <Footer/>
        </main>
        
    );
}
