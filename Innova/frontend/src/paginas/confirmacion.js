import Header from "./header";// Importar el componente "Header" desde el archivo "./header.js"
import Footer from "./footer"; // Importar el componente "Footer" desde el archivo "./footer.js"
import styles from '../estilos/carrito.module.css' // Importar los estilos CSS desde el archivo "../estilos/carrito.module.css"

export default function Confirmacion() {
    return (
        <main>
            <Header/>

            <section className={styles.confirmationContainer}>
                <h1>Gracias por tu compra</h1>
                <p>Tus productos serán entregados por nuestro equipo con los datos proporcionados...</p>
            </section>

            <Footer/>
        </main>
    )
}