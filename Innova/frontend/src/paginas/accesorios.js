import Header from "./header";
import Footer from "./footer";
import {Link} from "react-router-dom";
import styles from '../estilos/productos.module.css'

import img1 from '../imagenes/stefen-tan-KYw1eUx1J7Y-unsplash-removebg-preview.png'
import img2 from '../imagenes/mouse.png'
import img3 from '../imagenes/mouse3.jpg'
import img4 from '../imagenes/mouse4.jpg'
import img5 from '../imagenes/teclado5.jpg'
import img6 from '../imagenes/teclado6.jpg'
import img7 from '../imagenes/mouse3-removebg-preview.png'
import img8 from '../imagenes/mouse5.jpg'
import img9 from '../imagenes/mouse6.jpg'
import img10 from '../imagenes/mouse7.jpg'
import img11 from '../imagenes/teclado4.jpg'
import img12 from '../imagenes/teclado8.jpg'


export default function Accesorios() {
    return (
        <main>
            <Header/>

            <section>
                <div className={`${styles.selection} ${styles.padding}`}>
                    <h2><Link to='/productos' className={styles.subText}>Volver</Link>Accesorios</h2>
                </div>

                <div className={styles.productsSelection}>
                    <Link className={styles.rowThree} to={`/agregar?productID=${18}`}>
                        <img src={img1} alt=""></img>
                        <div className={styles.newText}>
                            <h5>LOGITECH</h5>
                            <h4>Logitech teclado Bluetooth</h4>
                            <p>S/150.00</p>
                        </div>
                    </Link>

                    <Link className={styles.rowThree} to={`/agregar?productID=${19}`}>
                        <img src={img2} alt=""></img>
                        <div className={styles.newText}>
                            <h5>LOGITECH</h5>
                            <h4>Mouse Logitech G Pro - blanco</h4>
                            <p>S/150.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${20}`}>
                        <img src={img3} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Lenovo</h5>
                            <h4>Mouse gamer Lenovo legion M500 RGB</h4>
                            <p>S/159.99</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${21}`}>
                        <img src={img4} alt=""></img>
                        <div className={styles.newText}>
                            <h5>LOGITECH</h5>
                            <h4>Mouse Logitech G -Morado</h4>
                            <p>S/281.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${22}`}>
                        <img src={img5} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Moffi</h5>
                            <h4>Teclado kit teclado y mouse Mofii celeste</h4>
                            <p>S/189.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${23}`}>
                        <img src={img6} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Moffi</h5>
                            <h4>Teclado kit teclado y mouse Mofii verde</h4>
                            <p>S/189.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${42}`}>
                        <img src={img7} alt=""></img>
                        <div className={styles.newText}>
                            <h5>LENOVO</h5>
                            <h4>Mouse gamer Lenovo IDEAPAD M100 RGB</h4>
                            <p>S/39.90</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${43}`}>
                        <img src={img8} alt=""></img>
                        <div className={styles.newText}>
                            <h5>LOGITECH G</h5>
                            <h4>Mouse Logitech G blanco </h4>
                            <p>S/250.00</p>
                        </div>
                    </Link>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${44}`}>
                        <img src={img9} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Logitech</h5>
                            <h4>Mouse Logitech G203 RGB blanco</h4>
                            <p>S/170.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${45}`}>
                        <img src={img10} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Logitech</h5>
                            <h4>Mouse Logitech G203 RGB blanco</h4>
                            <p>S/180.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${46}`}>
                        <img src={img11} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Logitech</h5>
                            <h4>Teclado gaming Logitech G PRO</h4>
                            <p>S/430.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${47}`}>
                        <img src={img12} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Logitech</h5>
                            <h4>Teclado Logitech K380 ROSE</h4>
                            <p>S/119.00</p>
                        </div>
                    </Link>

                </div>

            </section>

            <Footer/>
        </main>
    )
}