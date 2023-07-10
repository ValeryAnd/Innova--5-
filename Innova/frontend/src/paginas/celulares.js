import Header from "./header";
import Footer from "./footer";
import {Link} from "react-router-dom";
import styles from '../estilos/productos.module.css'

import img1 from '../imagenes/celular1.jpg'
import img2 from '../imagenes/celular2.jpg'
import img3 from '../imagenes/celular3.jpg'
import img4 from '../imagenes/celular4.jpg'
import img5 from '../imagenes/celular5.jpg'
import img6 from '../imagenes/celula6.jpg'
import img7 from '../imagenes/celular7.jpg'
import img8 from '../imagenes/celular8.jpg'
import img9 from '../imagenes/celular9.jpg'
import img10 from '../imagenes/celular10.jpg'
import img11 from '../imagenes/celular11.jpg'
import img12 from '../imagenes/celular12.jpg'

export default function Celulares() {
    return (
        <main>
            <Header/>

            <section>
                <div className={styles.selection}>
                    <h2>
                        <Link to="/productos" className={styles.subText}>
                            Volver
                        </Link>
                        Celulares
                    </h2>
                </div>

                <div className={styles.productsSelection}>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${6}`}>
                        <img src={img1} alt=""/>
                        <div className={styles.newText}>
                            <h5>Apple</h5>
                            <h4>Apple iphone 14 PRO 6.1" 128GB 48MP + 12MP + 12MP morado oscuro</h4>
                            <p>S/ 4,999.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${7}`}>
                        <img src={img2} alt=""/>
                        <div className={styles.newText}>
                            <h5>SAMSUNG</h5>
                            <h4>Samsung galazy A34 5G 6.6" 6GB 128GB 48 MP + 8 MP + 5 MP lavanda</h4>
                            <p>S/1,049.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${8}`}>
                        <img src={img3} alt=""/>
                        <div className={styles.newText}>
                            <h5>Motorola</h5>
                            <h4>Motorola Moto G13 6.5" 128GB +10MP 8MP gris</h4>
                            <p>S/629.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${9}`}>
                        <img src={img4} alt=""/>
                        <div className={styles.newText}>
                            <h5>Motorola</h5>
                            <h4>Motorola G53 6.5" 6GB 128GB 50MP+2MP plata</h4>
                            <p>S/849.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${10}`}>
                        <img src={img5} alt=""/>
                        <div className={styles.newText}>
                            <h5>APPLE</h5>
                            <h4>Iphone 11 6.1 64GB 12MP + 12MP negro</h4>
                            <p>S/1,949.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${11}`}>
                        <img src={img6} alt=""/>
                        <div className={styles.newText}>
                            <h5>Xiaomi </h5>
                            <h4>Xiaomi Redmi NOTE 12 4GB 128GB azul</h4>
                            <p>S/949.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${30}`}>
                        <img src={img7} alt=""/>
                        <div className={styles.newText}>
                            <h5>Huawei</h5>
                            <h4>Huawei Nova 11I 6.8" 8GB 128GB 48MP + 2MP Black bundle freebuds SE</h4>
                            <p>S/999.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${31}`}>
                        <img src={img8} alt=""/>
                        <div className={styles.newText}>
                            <h5>Apple</h5>
                            <h4>Apple Iphone 14 6.1" 128GB 12MP + 12MP azul</h4>
                            <p>S/3,799.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${32}`}>
                        <img src={img9} alt=""/>
                        <div className={styles.newText}>
                            <h5>OPPO</h5>
                            <h4>Oppo A57 6.56" 4GB 128GB 13MP F/2.2 green</h4>
                            <p>S/739.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${33}`}>
                        <img src={img10} alt=""/>
                        <div className={styles.newText}>
                            <h5>HONOR</h5>
                            <h4>Honor X8A 6.7" 8GB 128GB 100M+5M+2M black</h4>
                            <p>S/929.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${34}`}>
                        <img src={img11} alt=""/>
                        <div className={styles.newText}>
                            <h5>SAMSUNG</h5>
                            <h4>Samsung Galaxy S23 6.1" 8GB 256GB 50MP + 10MP + 12MP SM-S911BZGMLTP verde</h4>
                            <p>S/4,299.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${35}`}>
                        <img src={img12} alt=""/>
                        <div className={styles.newText}>
                            <h5>SAMSUNG</h5>
                            <h4>
                                Samsung Galaxy S23 Ultra 6.8" 12GB 512GB 200MP + 10MP + 12MP + 10MP SM-S918BLIVLTP
                                lavanda
                            </h4>
                            <p>S/5,199.00</p>
                        </div>
                    </Link>
                </div>
            </section>

            <Footer/>
        </main>
    );
}
