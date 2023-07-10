import Header from "./header"
import Footer from "./footer"
import styles from '../estilos/carrito.module.css'
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios";

export default function OrdenCompra() {
    const navegacion = useNavigate()

    useEffect(() => {
        const itemsContainer = document.getElementById('resumen-items-container')
        const subtotalText = document.getElementById('subtotal')
        const descuentoText = document.getElementById('descuento')
        const totalText = document.getElementById('total')

        const ordenCompra = JSON.parse(localStorage.getItem('ordenCompra'))
        const carrito = ordenCompra.carrito || []
        const subTotal = ordenCompra.subtotal
        const descuento = ordenCompra.descuento
        const total = ordenCompra.total

        let carritoHTML = ''

        carrito.forEach(producto => {
            const {productoNombre, productoCantidad, productoPrecio} = producto

            carritoHTML += `
                <div class="resumen-item">
                    <div class="resumen-item-label">
                        <h3>${productoNombre}</h3>
                        <p>x${productoCantidad}</p>
                    </div>
                    <p>S/. ${productoPrecio}</p>
                </div>
            `
        })

        itemsContainer.innerHTML = carritoHTML
        subtotalText.innerText = "S/. " + subTotal.toFixed(2)
        descuentoText.innerText = "S/. " + descuento.toFixed(2)
        totalText.innerText = "S/. " + total.toFixed(2)
    }, [])

    async function finalizarCompra() {
        const nombres = document.getElementById('nombres').value
        const correo = document.getElementById('correo').value
        const apellidos = document.getElementById('apellidos').value
        const telefono = document.getElementById('telefono').value
        const direccion = document.getElementById('direccion').value
        const distrito = document.getElementById('distrito').value
        const ciudad = document.getElementById('ciudad').value
        const metodoPago = document.querySelector('input[name="metodo"]:checked').value
        const numeroTarjeta = document.getElementById('numero-tarjeta').value
        const fechaCaducidad = document.getElementById('fecha-caducidad').value
        const cvv = document.getElementById('cvv').value
        const ordenCompra = JSON.parse(localStorage.getItem('ordenCompra'))

        const ordenCompraData = {
            nombres: nombres,
            correo: correo,
            apellidos: apellidos,
            telefono: telefono,
            direccion: direccion,
            distrito: distrito,
            ciudad: ciudad,
            metodoPago: metodoPago,
            numeroTarjeta: numeroTarjeta,
            fechaCaducidad: fechaCaducidad,
            cvv: cvv,
            subtotal: ordenCompra.subtotal,
            descuento: ordenCompra.descuento,
            total: ordenCompra.total
        }

        try {
            const response = await axios.post('https://innova-products.onrender.com/validarCompra', ordenCompraData)
            console.log(response)
            localStorage.removeItem('carrito');
            localStorage.removeItem('ordenCompra');
            navegacion('/confirmacion');
        } catch (error) {
            alert(error.response.data.message);
            console.log(error)
        }
    }

    return (
        <main>
            <Header/>

            <section className={styles.carritoSection}>
                <div className={styles.bolsaCompra}>
                    <h1>Orden de compra</h1>
                    <h3 className={styles.sectionTitle}>Detalles de facturación</h3>
                    <div className={styles.detallesFacturacion}>
                        <div>
                            <label htmlFor="nombres">Nombres:</label>
                            <input type="text" id="nombres" required></input>
                        </div>
                        <div>
                            <label htmlFor="correo">Correo electrónico:</label>
                            <input type="text" id="correo" required></input>
                        </div>
                        <div>
                            <label htmlFor="apellidos">Apellidos:</label>
                            <input type="text" id="apellidos" required></input>
                        </div>
                        <div>
                            <label htmlFor="telefono">Teléfono:</label>
                            <input type="text" id="telefono" required></input>
                        </div>
                    </div>

                    <h3 className={styles.sectionTitle}>Detalles de envío</h3>
                    <div className={styles.detallesEnvio}>
                        <div className={styles.envioDireccion}>
                            <label htmlFor="direccion">Dirección:</label>
                            <input type="text" id="direccion" required></input>
                        </div>
                        <div>
                            <label htmlFor="distrito">Distrito:</label>
                            <input type="text" id="distrito" required></input>
                        </div>
                        <div>
                            <label htmlFor="ciudad">Ciudad:</label>
                            <input type="text" id="ciudad" required></input>
                        </div>
                    </div>

                    <h3 className={styles.sectionTitle}>Detalles de pago</h3>
                    <div className={styles.detallesPago}>
                        <div>
                            <p>Seleccione el método de pago:</p>
                            <div className={styles.pagoRadiogroupContainer}>
                                <div className={styles.pagoRadiogroup}>
                                    <input type="radio" name="metodo" value="tarjeta" id="tarjeta-rb" checked></input>
                                    <label htmlFor="tarjeta-rb">Tarjeta de crédito o débito</label>
                                </div>
                                <div className={styles.pagoRadiogroup}>
                                    <input type="radio" name="metodo" value="transferencia"
                                           id="transferencia-rb"></input>
                                    <label htmlFor="transferencia-rb">Transferencia bancaria</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Número de tarjeta:</label>
                            <input type="text" id="numero-tarjeta" required></input>
                        </div>
                        <div>
                            <label>Fecha de caducidad:</label>
                            <input type="text" id="fecha-caducidad" required></input>
                        </div>
                        <div>
                            <label>CVV:</label>
                            <input type="text" id="cvv" required></input>
                        </div>
                    </div>
                </div>

                <div className={styles.resumenCompra}>
                    <h1>Resumen</h1>
                    <div className={"resumen-items-container"} id="resumen-items-container">

                    </div>

                    <div className={styles.resumenDatos}>
                        <div className={styles.resumenDatoDiv}>
                            <p>Subtotal</p>
                            <p id="subtotal">S/. 0.00</p>
                        </div>
                        <div className={styles.resumenDatoDiv}>
                            <p>Descuento</p>
                            <p id="descuento">S/. 0.00</p>
                        </div>
                        <div className={styles.resumenDatoDiv}>
                            <p>Total</p>
                            <p id="total">S/. 0.00</p>
                        </div>
                    </div>
                    <button className={styles.buttonCart} id="order-button" onClick={finalizarCompra}>FINALIZAR COMPRA
                    </button>
                </div>
            </section>

            <Footer/>
        </main>
    )
}