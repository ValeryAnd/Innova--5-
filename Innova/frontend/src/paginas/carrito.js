import React, {useEffect, useState} from 'react';
import Header from "./header";
import Footer from "./footer";
import {useNavigate} from "react-router-dom";
import styles from '../estilos/carrito.module.css'

export default function Carrito() {
    const navigate = useNavigate();
    const [carrito, setCarrito] = useState([]);// Estado para almacenar los productos del carrito
    const [subtotal, setSubtotal] = useState(0);// Estado para almacenar el subtotal de la compra
    const [descuento, setDescuento] = useState(0);// Estado para almacenar el descuento aplicado
    const [total, setTotal] = useState(0);// Estado para almacenar el total de la compra

    useEffect(() => {
        // Al cargar el componente, se obtienen los datos del carrito almacenados en localStorage (si existen)
        const carritoData = JSON.parse(localStorage.getItem('carrito')) || [];
        setCarrito(carritoData);
    }, []);

    useEffect(() => {
        // Cada vez que cambie el carrito o el subtotal, se recalculan los precios
        cargarItems();
        calcularPrecios();
    }, [carrito, subtotal]);

    const cargarItems = () => {
        // Renderiza los elementos del carrito en la interfaz
        return carrito.map((producto) => {
            const {itemId, productoId, productoNombre, productoCantidad, productoPrecio, productoImagen} = producto;
            const totalProducto = productoCantidad * productoPrecio;

            return (
                <div className={styles.carritoItem} key={`${itemId}-${productoId}`}>
                    <img alt="img" src={productoImagen}></img>
                    <div className={styles.carritoItemDesc}>
                        <h3>{productoNombre}</h3>
                        <div>
                            <p>Cantidad: {productoCantidad}</p>
                            <p>Precio unitario: {productoPrecio}</p>
                            <p>Total: {totalProducto}</p>
                        </div>
                    </div>
                    <button onClick={() => eliminarItem(itemId)}>x</button>
                </div>
            );
        });
    };

    const eliminarItem = (itemId) => {
        // Elimina un producto del carrito y actualiza el estado y el localStorage
        const carritoActualizado = carrito.filter((producto) => producto.itemId !== itemId);
        setCarrito(carritoActualizado);
        localStorage.setItem('carrito', JSON.stringify(carritoActualizado))
    };


    const calcularPrecios = () => {
        // Calcula el subtotal, el descuento y el total de la compra
        let precio = 0;

        carrito.forEach((producto) => {
            const {productoCantidad, productoPrecio} = producto;
            const totalProducto = productoCantidad * productoPrecio;
            precio += totalProducto;
        });

        setSubtotal(precio);
        setDescuento(precio * 0.1);// Aplica un descuento del 10%
        setTotal(precio - (precio * 0.1));
    };

    const generarOrden = () => {
        // Genera una orden de compra con los datos actuales y la guarda en localStorage antes de navegar a la página de orden
        const ordenCompra = {
            carrito: carrito,
            subtotal: subtotal,
            descuento: descuento,
            total: total
        };

        localStorage.setItem('ordenCompra', JSON.stringify(ordenCompra));
        navigate('/orden');
    };

    return (
        <main>
            <Header/>

            <section className={styles.carritoSection}>
                <div className={styles.bolsaCompra}>
                    <h1>Bolsa de Compras</h1>
                    <div id="carrito-container">
                        {cargarItems()}
                    </div>
                </div>
                <div className={styles.resumenCompra}>
                    <h1>Resumen</h1>
                    <div className={styles.resumenDatos}>
                        <div className={styles.resumenDatoDiv}>
                            <p>Subtotal</p>
                            <p id="subtotal">S/. {subtotal.toFixed(2)}</p>
                        </div>
                        <div className={styles.resumenDatoDiv}>
                            <p>Descuento</p>
                            <p id="descuento">S/. {descuento.toFixed(2)}</p>
                        </div>
                        <div className={styles.resumenDatoDiv}>
                            <p>Total</p>
                            <p id="total">S/. {total.toFixed(2)}</p>
                        </div>
                    </div>
                    <button className={styles.buttonCart} onClick={generarOrden}>
                        CONTINUAR
                    </button>
                </div>
            </section>

            <Footer/>
        </main>
    );
}
