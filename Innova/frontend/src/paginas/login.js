import {Link, useNavigate} from 'react-router-dom'
import loginIMG from '../imagenes/login.png'
import axios from "axios";
import styles from '../estilos/index.module.css'

export default function Login() {
    const navegacion = useNavigate()

    const validarLogin = async (e) => {// Utilizar el hook useNavigate para manejar la navegación
        e.preventDefault();// Prevenir el comportamiento por defecto del formulario
        // Obtener los valores de los campos de entrada
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Crear un objeto con los datos de inicio de sesión
        const data = {
            email,
            password
        };

        try {
            const url = 'https://innova-products.onrender.com/login';// URL de la API para validar el inicio de sesión
            const response = await axios.post(url, data);// Realizar la petición POST para validar el inicio de sesión
            console.log(response)// Redirigir al usuario a la página de productos después de un inicio de sesión exitoso
            navegacion('/productos') // Redirigir al usuario a la página de productos después de un inicio de sesión exitoso
        } catch (error) {
            alert(error.response.data.message)// Mostrar una alerta con el mensaje de error de la respuesta
            console.log(error)// Imprimir el error en la consola
        }
    };

    return (
        <main className={styles.mainIndex}>
            <div className={styles.box}>
                <div className={styles.innerBox}>
                    <div className={styles.formsWrap}>
                        <form id="login-form" onSubmit={validarLogin}>
                            <div className={styles.heading}>
                                <h1 className={styles.featureTitle}>INICIO DE SESIÓN</h1>
                                <h2 className={styles.featureSubtitle}>Bienvenido a Innova Products</h2>
                            </div>
                            <div>
                                <div className={styles.inputWrap}>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                           className={`${styles.inputField} ${styles.active}`}
                                           required></input>
                                    <label htmlFor="email" className={styles.labelIndex}>Correo electrónico:</label>
                                </div>
                                <div className={styles.inputWrap}>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                           className={`${styles.inputField} ${styles.active}`} required></input>
                                    <label htmlFor="password" className={styles.labelIndex}>Contraseña:</label>
                                </div>
                                <button className={styles.button} type="submit">Ingresar</button>
                                <p className={styles.featureText}>¿No tienes una cuenta?
                                    <Link to='/register' className={styles.toggle}>Registrate</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className={styles.images}>
                        <div className={styles.imagesWrapper}>
                            <img src={loginIMG} className={styles.image} alt=" imagen"></img>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
