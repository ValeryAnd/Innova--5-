import {Link, useNavigate} from "react-router-dom";
import loginIMG from '../imagenes/login.png'
import axios from 'axios'
import styles from '../estilos/index.module.css'

export default function Register() {
    const navegacion = useNavigate()// Utilizar el hook useNavigate para manejar la navegación

    const registrarUsuario = async (e) => {
        e.preventDefault();
        // Obtener los valores de los campos de entrada
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const email = document.getElementById('emailtwo').value;
        const password = document.getElementById('passwordtwo').value;
         // Crear un objeto con los datos del usuario a registrar
        const data = {
            nombres,
            apellidos,
            email,
            password
        };

        try {
            const url = 'https://innova-products.onrender.com/register';
            const response = await axios.post(url, data);// Realizar la petición POST para registrar al usuario
            console.log(response)
            navegacion('/')// Redirigir al usuario a la página de inicio después del registro exitoso
        } catch (error) {
            console.log(error)// Mostrar una alerta con el mensaje de error de la respuesta
            alert(error.response.data.message)// Imprimir el error en la consola
        }
    };

    return (
        <main className={styles.mainIndex}>
            <div className={styles.box}>
                <div className={styles.innerBox}>
                    <div className={styles.formsWrap}>
                        <form id="register-form" onSubmit={registrarUsuario}>
                            <div className={styles.heading}>
                                <h1 className={styles.featureTitle}>REGISTRARSE</h1>
                                <h2 className={styles.featureSubtitle}>Bienvenido a Innova Products</h2>
                            </div>
                            <div>
                                <div className={styles.inputWrap}>
                                    <input
                                        type="text"
                                        name="nombres"
                                        id="nombres"
                                        autoComplete="off"
                                        className={`${styles.inputField} ${styles.active}`}
                                        required
                                    />
                                    <label htmlFor="nombres" className={styles.labelIndex}>Nombres:</label>
                                </div>
                                <div className={styles.inputWrap}>
                                    <input
                                        type="text"
                                        name="apellidos"
                                        id="apellidos"
                                        autoComplete="off"
                                        className={`${styles.inputField} ${styles.active}`}
                                        required
                                    />
                                    <label htmlFor="apellidos" className={styles.labelIndex}>Apellidos:</label>
                                </div>
                                <div className={styles.inputWrap}>
                                    <input
                                        type="email"
                                        name="email"
                                        id="emailtwo"
                                        autoComplete="off"
                                        className={`${styles.inputField} ${styles.active}`}
                                        required
                                    />
                                    <label htmlFor="emailtwo" className={styles.labelIndex}>Correo electrónico:</label>
                                </div>
                                <div className={styles.inputWrap}>
                                    <input
                                        type="password"
                                        name="password"
                                        id="passwordtwo"
                                        autoComplete="off"
                                        className={`${styles.inputField} ${styles.active}`}
                                        required
                                    />
                                    <label htmlFor="passwordtwo" className={styles.labelIndex}>Contraseña:</label>
                                </div>
                                <button className={styles.button} type="submit">Registrarse</button>
                                <p className={styles.warnings} id="warnings"></p>
                                <p className={styles.featureText}>
                                    ¿Tienes una cuenta?
                                    <Link to="/" className={styles.toggle}>Iniciar Sesión</Link>
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className={styles.images}>
                        <div className={styles.imagesWrapper}>
                            <img src={loginIMG} className={styles.image} alt="imagen"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}