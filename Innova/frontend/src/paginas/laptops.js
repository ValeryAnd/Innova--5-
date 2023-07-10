import Header from "./header";
import Footer from "./footer";
import styles from '../estilos/productos.module.css'
import {Link} from "react-router-dom";

import img1 from '../imagenes/tablet.png'
import img2 from '../imagenes/2004311980721-1.jpg'
import img3 from '../imagenes/tablet2.jpg'
import img4 from '../imagenes/tablet1.jpg'
import img5 from '../imagenes/tablet3.jpg'
import img6 from '../imagenes/tablet4.jpg'
import img7 from '../imagenes/2004293401511-2.jpg'
import img8 from '../imagenes/laptop1.jpg'
import img9 from '../imagenes/laptop2.jpg'
import img10 from '../imagenes/laptop3.jpg'
import img11 from '../imagenes/laptop4.jpg'
import img12 from '../imagenes/laptop5.jpg'

export default function Laptops() {
    return (
        <main>
            <Header/>

            <section>
                <div className={styles.selection}>
                    <h2><Link to='/productos' className={styles.subText}>Volver</Link>Laptops y tablets</h2>
                </div>

                <div className={styles.productsSelection}>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${12}`}>
                        <img src={img1} alt=""></img>
                        <div className={styles.newText}>
                            <h5>SAMSUNG</h5>
                            <h4>Tablet samsung galaxy TAB S7 - Verde mistico</h4>
                            <p>S/2,999</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${13}`}>
                        <img src={img2} alt=""></img>
                        <div className={styles.newText}>
                            <h5>SAMSUNG</h5>
                            <h4>Samsung galaxy Tab S6 Lite</h4>
                            <p>S/949.00</p>

                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${14}`}>
                        <img src={img3} alt=""></img>
                        <div className={styles.newText}>
                            <h5>APPLE</h5>
                            <h4>Ipad mini WIFI 8.3" 64GB 6ta Generación starlight</h4>
                            <p>S/2,549.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${15}`}>
                        <img src={img4} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Samsung</h5>
                            <h4>Tablet Samsung Galaxy Tab A7 Lite 3GB RAM 32GB 8.7''</h4>
                            <p>S/499.90</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${16}`}>
                        <img src={img5} alt=""></img>
                        <div className={styles.newText}>
                            <h5>JUMPER</h5>
                            <h4>Tablet PC JUMPER EZPADI78128 - Incluye teclado y lapicero</h4>
                            <p>S/2,099.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${17}`}>
                        <img src={img6} alt=""></img>
                        <div className={styles.newText}>
                            <h5>PHILIPS</h5>
                            <h4>Samsung galaxy Tab S7 FE, 12.4 pulgadas, WIFI 256GB + S pen incluida - plateado</h4>
                            <p>S/2,949.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${36}`}>
                        <img src={img7} alt=""></img>
                        <div className={styles.newText}>
                            <h5>HP</h5>
                            <h4>Laptop HP amd Ryzen 5 8GB</h4>
                            <p>S/1,959.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${37}`}>
                        <img src={img8} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Lenovo</h5>
                            <h4>Lenovo IDEAPAD 5I Intel core I7 12GB RAM 512GB SSD 15.6" FHD</h4>
                            <p> S/2,999.00</p>
                        </div>
                    </Link>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${38}`}>
                        <img src={img9} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Lenovo</h5>
                            <h4>Laptop Lenovo IDEAPAD GAMING 3 AMD Ryzen 5 16GB RAM 512GB SSD 15.6''</h4>
                            <p>S/3,799.00</p>
                        </div>
                    </Link >

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${39}`}>
                        <img src={img10} alt=""></img>
                        <div className={styles.newText}>
                            <h5>ASUS</h5>
                            <h4>Laptop gamer Asus TUF F15 FX506LHB-HN323UW Intel core I5 10300H 8GB RAM 512GB SSD
                                15.6''</h4>
                            <p>S/2,599.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${40}`}>
                        <img src={img11} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Apple</h5>
                            <h4>Laptop Apple Macbook air 13' con chip M2 (2022) 8GB RAM 2TB SSD - plateado</h4>
                            <p>S/9,649.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${41}`}>
                        <img src={img12} alt=""></img>
                        <div className={styles.newText}>
                            <h5>Acer</h5>
                            <h4>Laptop Acer NITRO 5 Intel core I5 8GB RAM 512GB SSD 15.6'' FHD IPS 144HZ GTX 1650
                                4GB</h4>
                            <p>S/2,799.00</p>
                        </div>
                    </Link>
                </div>
            </section>

            <Footer/>
        </main>
    )
}