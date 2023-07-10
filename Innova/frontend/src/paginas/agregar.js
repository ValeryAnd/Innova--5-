import {Link, useLocation} from "react-router-dom"
import React, {useEffect, useState} from 'react';
import Header from "./header";
import Footer from "./footer";
import styles from '../estilos/agregar.module.css'

import img0 from '../imagenes/2065306080994_2.jpg'
import img1 from '../imagenes/pexels-sound-on-3394666.jpg'
import img2 from '../imagenes/audifonos3.jpg'
import img3 from '../imagenes/audifono4.jpg'
import img4 from '../imagenes/audifonos5.jpg'
import img5 from '../imagenes/audifonos6.jpg'
import img6 from '../imagenes/celular1.jpg'
import img7 from '../imagenes/celular2.jpg'
import img8 from '../imagenes/celular3.jpg'
import img9 from '../imagenes/celular4.jpg'
import img10 from '../imagenes/celular5.jpg'
import img11 from '../imagenes/celula6.jpg'
import img12 from '../imagenes/tablet.png'
import img13 from '../imagenes/2004311980721-1.jpg'
import img14 from '../imagenes/tablet2.jpg'
import img15 from '../imagenes/tablet1.jpg'
import img16 from '../imagenes/tablet3.jpg'
import img17 from '../imagenes/tablet4.jpg'
import img18 from '../imagenes/stefen-tan-KYw1eUx1J7Y-unsplash-removebg-preview.png'
import img19 from '../imagenes/mouse.png'
import img20 from '../imagenes/mouse3.jpg'
import img21 from '../imagenes/mouse4.jpg'
import img22 from '../imagenes/teclado5.jpg'
import img23 from '../imagenes/teclado6.jpg'
import img24 from '../imagenes/audifonos2.jpg'
import img25 from '../imagenes/audifonos7.jpg'
import img26 from '../imagenes/audifonos11.jpg'
import img27 from '../imagenes/audifonos9.jpg'
import img28 from '../imagenes/audifonos10.jpg'
import img29 from '../imagenes/audifonos13.jpg'
import img30 from '../imagenes/audifonos14.jpg'
import img31 from '../imagenes/celular7.jpg'
import img32 from '../imagenes/celular8.jpg'
import img33 from '../imagenes/celular9.jpg'
import img34 from '../imagenes/celular10.jpg'
import img35 from '../imagenes/celular11.jpg'
import img36 from '../imagenes/celular12.jpg'
import img37 from '../imagenes/2004293401511-2.jpg'
import img38 from '../imagenes/laptop1.jpg'
import img39 from '../imagenes/laptop2.jpg'
import img40 from '../imagenes/laptop3.jpg'
import img41 from '../imagenes/laptop4.jpg'
import img42 from '../imagenes/laptop5.jpg'
import img43 from '../imagenes/mouse3-removebg-preview.png'
import img44 from '../imagenes/mouse5.jpg'
import img45 from '../imagenes/mouse6.jpg'
import img46 from '../imagenes/mouse7.jpg'
import img47 from '../imagenes/teclado4.jpg'
import img48 from '../imagenes/teclado8.jpg'

export default function Agregar() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productID = parseInt(searchParams.get('productID'));

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [productID]);

    const data = [
        {
            productoNombre: 'AirPods 2da generación',
            productoDescripcion: 'Disfruta de una nueva manera de escuchar música con los nuevos AirPods de Apple que Ripley.com pone a tu disposición esta temporada.\n',
            productoCaracteristicas: 'Disfruta de una nueva manera de escuchar música con los nuevos \n' +
                'AirPods de Apple que Ripley.com pone a tu disposición esta \n' +
                'temporada. Un diseño limpio y ergonómico viene acompañado de \n' +
                'una experiencia de usuario superior, ya que se configuran con un solo \n' +
                'toque, saben cuando los tienes puestos y cuando no y hasta puedes \n' +
                'controlar aspectos como el volumen, tu lista de reproducción y hasta \n' +
                'cambiar de Podcast con tan solo decir "Oye Siri". Una sola carga te \n' +
                'dura hasta 5 horas de reproducción de música y 3 horas de \n' +
                'conversación. Son compatibles con tu iPhone, Apple Watch, iPad y \n' +
                'Mac. ¡Los mejores audífonos a tan solo un clic de distancia!',
            productoEspecificaciones: [
                "Marca APPLE",
                "Control de Volumen No",
                "Tipo de conector Sin Conector",
                "Modelo Airpods",
                "Conectividad NFC",
                "Tipo de Producto Audífonos",
                "Color Blanco",
                "Inalámbrico Sí"
            ],
            productoPrecio: 1079,
            productoImagen: img0
        }, {
            productoNombre: 'Audífonos Sony WH-1000XM4 BT',
            productoDescripcion: 'Ya estés en un vuelo largo o relajándote en una cafetería, los WHSTX1000XM4 ofrecen el mejor rendimiento de noise cancelling de la \n' +
                'historia de Sony.',
            productoCaracteristicas: 'Disfruta de una nueva manera de escuchar música con los nuevos \n' +
                'AirPods de Apple que Ripley.com pone a tu disposición esta \n' +
                'temporada. Un diseño limpio y ergonómico viene acompañado de \n' +
                'una experiencia de usuario superior, ya que se configuran con un solo \n' +
                'toque, saben cuando los tienes puestos y cuando no y hasta puedes \n' +
                'controlar aspectos como el volumen, tu lista de reproducción y hasta \n' +
                'cambiar de Podcast con tan solo decir "Oye Siri". Una sola carga te \n' +
                'dura hasta 5 horas de reproducción de música y 3 horas de \n' +
                'conversación. Son compatibles con tu iPhone, Apple Watch, iPad y \n' +
                'Mac. ¡Los mejores audífonos a tan solo un clic de distancia!',
            productoEspecificaciones: [
                "Marca SONY",
                "Control de Volumen Si",
                "Modelo Airpods",
                "Conectividad NFC",
                "Tipo de Producto Audífonos",
                "Color Negro",
                "Inalámbrico Sí"
            ],
            productoPrecio: 1499.90,
            productoImagen: img1
        }, {
            productoNombre: 'Audifonos Xiaomi redmi buds essential earbuds azul',
            productoDescripcion: 'Los Redmi Buds Essentials tienen un controlador dinámico de 7,2 mm y \n' +
                'mejora de afinación profesional textura de la cavidad y con eficacia \n' +
                'reducir la distorsión.',
            productoCaracteristicas: 'Calidad de sonido de Alta Definición con llamadas más limpias \n' +
                'Controlador dinámico de 7,2 mm y mejora de afinación profesional \n' +
                'textura de la cavidad y con eficacia reducir la distorsión. Voces más \n' +
                'limpias y claras en las llamadas, aislando el sonido exterior. Bluetooth \n' +
                'avanzado 5.2 con Modo de Juego Una conexión más estable y rápida\n' +
                'para una transmisión con menor potencia de consumo, mejorando \n' +
                'notablemente la conexión. Cuenta con modo de baja latencia para \n' +
                'los juegos, solo mantenga presionados ambos auriculares durante 1,5 \n' +
                's al mismo tiempo para activar el modo de baja latencia.',
            productoEspecificaciones: [
                "Marca XIAOMI",
                "Peso (kg) 0.3",
                "Compatibilidad Bluetooth",
                "Conectividad Bluetooth",
                "Aislador de ruido No",
                "Control de volumen No",
                "Control por voz No",
                "Tipo de audífono True wireless",
                "Tipo de conector Micro USB",
                "Inalámbrico Sí"
            ],
            productoPrecio: 79.90,
            productoImagen: img2
        }, {
            productoNombre: 'Audífonos true wireless buds2 pro',
            productoDescripcion: 'Audio mejorado de 360 grados: amplía lo que te gusta; minimiza lo \n' +
                'que haces;',
            productoCaracteristicas: 'Calidad de sonido de alta fidelidad: el sonido de calidad de estudio no \n' +
                'es solo para los profesionales; siente cada nota como si estuvieras ahí \n' +
                'con Galaxy Buds2 Pro** y obtén una experiencia auditiva de siguiente \n' +
                'nivel, ya sea que estés balanceando tu lista de reproducción o \n' +
                'mantente informado con un podcast',
            productoEspecificaciones: [
                "Tipo de audífono True wireless",
                "Tipo de conector Sin Conector",
                "Inalámbrico Sí",
                "Bluetooth Sí",
                "Resistente al agua IPX7",
                "Micrófono integrado Sí",
                "Garantía Sí",
                "Tipo de Producto Audífonos",
                "Modelo SM-R510NLVALTA"
            ],
            productoPrecio: 500.00,
            productoImagen: img3
        }, {
            productoNombre: 'AUDÍFONOS OVER EAR SONY AZUL WHCH510LZ',
            productoDescripcion: 'Escucha tus canciones favoritas de forma inalámbrica por Bluetooth® \n' +
                'emparejando tu smartphone o tablet.',
            productoCaracteristicas: 'Con hasta 35 horas de duración de batería, tendrás suficiente energía \n' +
                'incluso para viajar. Si los audífonos tienen poca batería, una carga \n' +
                'rápida de 10 minutos con el cable Type-C™ te brindará hasta 90 \n' +
                'minutos de tiempo reproducción.\n',
            productoEspecificaciones: [
                "Marca SONY",
                "Color Azul",
                "Peso (kg) 132 g",
                "Resistente al agua No",
                "Micrófono integrado Sí",
                "Garantía 6 meses",
                "Modelo WH-CH510/LZ UC"
            ],
            productoPrecio: 99.90,
            productoImagen: img4
        }, {
            productoNombre: 'Audífonos philips on ear con micrófono blanco',
            productoDescripcion: 'Sonido nítido y graves enriquecidos, este modelo cuenta con \n' +
                'controladores de neodimio de 32 mm que brindan graves potentes y \n' +
                'definidos y un sonido claro.',
            productoCaracteristicas: 'Banda sujetadora ajustada, disponible en colores mate, para darte un \n' +
                'gran estilo. Estos audífonos supraurales cuentan con una banda \n' +
                'sujetadora acolchonada liviana para más comodidad. Las suaves \n' +
                'almohadillas están marcadas para la oreja izquierda y derecha, muy \n' +
                'ajustables a ti.',
            productoEspecificaciones: [
                "Marca PHILIPS",
                "Tipo de conector Jack 3.5 mm",
                "Sensibilidad dB 106 dB",
                "Bluetooth No",
                "Impedancia (Ohmios) 32 ohmio",
                "Entrada máxima de potencia (mW) 30 mW",
                "Peso (gr) 0.459 kg"
            ],
            productoPrecio: 59.40,
            productoImagen: img5
        }, {
            productoNombre: 'APPLE IPHONE 14 PRO 6.1" 128GB 48MP + 12MP + 12MP MORADO OSCURO',
            productoDescripcion: 'El iPhone 14 es un dispositivo inteligente de alta gama, creado para cubrir las necesidades de usuarios exigentes que buscan compartir el mejor contenido y generar tendencias.',
            productoCaracteristicas: 'Este tipo de iPhone te ofrece una gran potencia en cada una de sus funciones, gracias a sus 128 GB de memoria interna y a sus 6 GB de RAM Está diseñado para usuarios que prefieren dispositivos de excelente calidad y gran rendimiento. Es perfecto para influencers de redes sociales, profesionales y estudiantes.\n' +
                'Este iPhone cuenta con sistema operativo iOS y un procesador Apple A15 Bionic, con los que podrás descargar las aplicaciones del momento y correr los juegos de más alto performance.\n' +
                'Además, su batería de 3279 mAh te permitirá largas horas de entretenimiento.\n' +
                'Compatible con Wi-Fi, GPS y Bluetooth.',
            productoEspecificaciones: [
                "Marca APPLE",
                "Peso (kg) 0.206kg",
                "Memoria Interna 128GB",
                "Memoria RAM No aplica",
                "Procesador A16 Bionic",
                "Tipo Procesador Apple Chip A16 Bionic",
                "Cámara frontal 12MP",
                "Cámara posterior rango Más de 10MP"
            ],
            productoPrecio: 4999.00,
            productoImagen: img6
        }, {
            productoNombre: 'Samsung galaxy A34 5G 6.6" 6GB 128GB 48 MP + 8 MP + 5 MP lavanda',
            productoDescripcion: 'Con el Galaxy A34 toma fotos y videos de gran calidad, sube contenido a redes sociales y mantente conectado con el mundo. Un smartphone que te ofrece las mejores características en un equipo completamente accesible.',
            productoCaracteristicas: 'Con este celular nunca te perderás de nada. El Galaxy A34 es el dispositivo que pone lo mejor de la tecnología a tu alcance. Se adapta a la rutina del usuario, es perfecto para estudiantes y también para personas que trabajan.\n' +
                'Este modelo cuenta con una cámara principal de 48 MP + 8 MP + 5 MP y una cámara frontal de 13 MP. Reproduce videos sin interrupciones en su amplia pantalla de 6.6”. Es perfecto para empezar un videoblog o seguir la tendencia del momento.\n' +
                'Cuenta con sistema operativo Android. Funciona con una batería de 5000 mAh de gran autonomía.\n' +
                'Compatible con Wi-Fi, GPS y Bluetooth.',
            productoEspecificaciones: [
                "Marca: SAMSUNG",
                "Peso(kg): 0.296",
                "Memoria RAM: 6GB",
                "Procesador: Media Tek",
                "Tipo Procesador: Octa-Core",
                "Cámara frontal: 13MP",
                "Cámara posterior rango: Más de 10MP",
                "Tipo de Producto: Celulares"
            ],
            productoPrecio: 1049.00,
            productoImagen: img7
        }, {
            productoNombre: 'Motorola Moto G13 6.5" 128GB +10MP 8MP gris',
            productoDescripcion: 'Con el Motorola G13 toma fotos y videos de gran calidad, sube contenido a redes sociales y mantente conectado con el mundo. Un smartphone que te ofrece las mejores características en un equipo completamente accesible.',
            productoCaracteristicas: 'Con este celular nunca te perderás de nada. El Motorola G13 es el dispositivo que pone lo mejor de la tecnología a tu alcance. Se adapta a la rutina del usuario, es perfecto para estudiantes y también para personas que trabajan. Este modelo cuenta con una cámara principal de 50 + 2 +2 MP y una cámara frontal de 8 MP. Reproduce videos sin interrupciones en su amplia pantalla 6.5". Es perfecto para empezar un videoblog o seguir la tendencia del momento.',
            productoEspecificaciones: [
                "Marca: MOTOROLA",
                "Peso(g): 183g",
                "Memoria RAM: 6GB",
                "Memoria Interna: -",
                "Memoria RAM: 4GB",
                "Procesador: Media Tek",
                "Tipo Procesador: MediaTek Helio G85 con CPU Octa-Core",
                "Cámara frontal: 8MP",
                "Cámara posterior rango: Más de 10MP",
                "Cámara posterior: 50MP+2MP+2MP"
            ],
            productoPrecio: 629.00,
            productoImagen: img8
        }, {
            productoNombre: 'CELULAR MOTOROLA G53 6.5" 6GB 128GB 50MP+2MP PLATA',
            productoDescripcion: 'El Motorola G53 es un dispositivo inteligente de alta gama, creado para cubrir las necesidades de usuarios exigentes que buscan compartir el mejor contenido y generar tendencias.',
            productoCaracteristicas: 'Este tipo de smartphone te ofrece una gran potencia en cada una de sus funciones, gracias a sus 128 GB de memoria interna y a sus 6 GB de RAM Está diseñado para usuarios que prefieren dispositivos de excelente calidad y gran rendimiento. Es perfecto para influencers de redes sociales, profesionales y estudiantes.\n' +
                'Este smartphone cuenta con sistema operativo Android y un procesador Qualcomm Snapdragon 4350 Pro, con los que podrás descargar las aplicaciones del momento y correr los juegos de más alto performance.',
            productoEspecificaciones: [
                "Marca: MOTOROLA",
                "Peso (kg): 0.178",
                "Memoria Interna: 128GB",
                "Memoria RAM: 6GB",
                "Procesador: Snapdragon",
                "Tipo Procesador: Snapdragon® 480+ 5G",
                "Cámara frontal: 8MP",
                "Cámara posterior rango: Más de 10MP",
                "Cámara posterior: 50MP+2MP"
            ],
            productoPrecio: 849.00,
            productoImagen: img9
        }, {
            productoNombre: 'Iphone 11 6.1 64GB 12MP + 12MP negro',
            productoDescripcion: 'El IPhone 11 de 64GB Negro es el celular que buscabas. La nueva \n' +
                'apuesta de Apple cuenta con una pantalla de 6.1" pulgadas, con \n' +
                'tecnología OLED y resolución HD para disfrutar por completo de todos \n' +
                'tus contenidos.',
            productoCaracteristicas: 'Eel IPhone 11 de 64GB Negro cuenta con el \n' +
                'procesador A13 Bionic y con 64GB de almacenamiento interno, para \n' +
                'un gran rendimiento y experiencia de navegación. Consigue unas \n' +
                'fotos increíbles con su sistema de cámara trasera que cuenta con dos \n' +
                'lentes de 12MP que agrega estabilización óptica de imagen para llevar \n' +
                'tus fotos al siguiente nivel. Y para los selfies más impresionantes, \n' +
                'cuenta con una cámara frontal de 12 MP.',
            productoEspecificaciones: [
                "Marca: APPLE",
                "Peso (kg): 194 g",
                "Memoria Interna: 64GB",
                "Memoria RAM: No aplica",
                "Procesador: A13 Bionic",
                "Tipo Procesador: No aplica",
                "Cámara frontal: 12MP",
                "Cámara posterior rango: Más de 10MP",
                "Cámara posterior: 12MP"
            ],
            productoPrecio: 1949.00,
            productoImagen: img10
        }, {
            productoNombre: 'CELULAR XIAOMI REDMI NOTE 12 4GB 128GB AZUL',
            productoDescripcion: 'Con el Xiaomi Redmi Note 12 toma fotos y videos de gran calidad, sube contenido a redes sociales y mantente conectado con el mundo. Un smartphone que te ofrece las mejores características en un equipo completamente accesible.',
            productoCaracteristicas: 'Xiaomi Redmi Note 12. Es el hermano pequeño de la nueva gama \n' +
                'Redmi en prestaciones. Pero sólo se diferencia de su modelo mayor en \n' +
                'que posee conectividad 4G. Por otro lado llega con una pantalla de \n' +
                '6.67 pulgadas AMOLED, que integra resolución FullHD y que tiene una \n' +
                'tasa de refresco de 120 Hz.',
            productoEspecificaciones: [
                "Marca: XIAOMI",
                "Peso (kg): 192g",
                "Memoria Interna: 128GB",
                "Memoria RAM: 4GB",
                "Procesador: Snapdragon",
                "Tipo Procesador: Snapdragon® 685",
                "Cámara frontal: 13MP",
                "Cámara posterior rango: De 5.1 a 7MP",
                "Cámara posterior: 50MP+8MP+2MP"
            ],
            productoPrecio: 949.00,
            productoImagen: img11
        }, {
            productoNombre: 'Tablet samsung galaxy TAB S7 - Verde místico',
            productoDescripcion: 'ENCUENTRA SAMSUNG GALAXY TAB S7 FE CON PANTALLA DE 12.4 PULGADAS Y BATERIA DE LARGA DURACION, EN RIPLEY PERÚ ¡COMPRA ONLINE!',
            productoCaracteristicas: 'Pantalla grande, gran experiencia: Una gran pantalla de 12.4 pulgadas da vida a tu contenido en colores brillantes ya sea en interiores o exteriores, haciendo que Samsung Galaxy S7 FE sea una gran tablet para tiempo de estudio o para un rápido descanso de entretenimiento \n' +
                'Colores llamativos, declaración llamativa: Elige un color atrevido: negro místico, verde místico, plata mística o rosa místico, que lo hace inconfundiblemente tuyo \n' +
                'Escribir, dibujar, pellizcar, tocar con S Pen: Toma notas en clase, esboza una idea o incluso garabatea con el S Pen incluido, con un nuevo diseño sensible que se siente más cerca del bolígrafo en papel que nunca antes',
            productoEspecificaciones: [
                'Marca	SAMSUNG',
                'Peso (kg)	0.69898587000000001',
                'Tipo de Producto	Tablets',
                'Alto (cm)	28.473400000000002',
                'Ancho (cm)	0.63500000000000001'
            ],
            productoPrecio: 2999.00,
            productoImagen: img12
        }, {
            productoNombre: 'Galaxy Tab S6 Lite Gray',
            productoDescripcion: 'Características destacadas:Modelo: Galaxy Tab S6 Lite,Procesador: Octa-Core (Quad 2.3GHz + Quad1.7GHz),Memoria interna: 64GB',
            productoCaracteristicas: 'Samsung equipa la Tab S6 Lite con salida de auriculares en la zona superior, coloca los botones de volumen y encendido en el costado derecho (arriba), incluye bandeja para la memoria SD Micro también en el costado derecho (sorprende que el mecanismo sea idéntico al de las tarjetas SIM en los móviles) y ancla el USB C en la zona baja de la tablet. Dicho conector no queda centrado en el grueso de la Samsung Galaxy Tab S6 Lite, sí con respecto al ancho. Esto echa a perder la simetría, para angustia de quienes sufrimos',
            productoEspecificaciones: [
                'Memoria Interna 64GB',
                'Tamaño de la pantalla 10.4 pulgadas',
                'Cámara posterior 8 MP',
                'Marca Samsung',
                'Procesador Qualcomm | SM7125',
                'Núcleos del procesador Octa Core',
                'Modelo SM-P613NZALPEO',
                'Velocidad del procesador 2.3GHz,1.8GHz',
                'Memoria expandible Hasta 1TB'
            ],
            productoPrecio: 949.00,
            productoImagen: img13
        }, {
            productoNombre: 'IPAD MINI WIFI 8.3" 64GB 6TA GENERACIÓN STARLIGHT',
            productoDescripcion: 'Características destacadas:Memoria interna: 64GB,Procesador: Chip A15 Bionic,Modelo: iPad Mini 6ta Generación',
            productoCaracteristicas: 'Descubre un mundo lleno de posibilidades con Apple. Siente el poder de la tecnología fusionado con la eficiencia y elegancia gracias al iPad Mini de sexta generación de Apple. Disfruta de un iPad que se adapta a tus exigencias y necesidades, con un diseño sofisticado, pantalla retina de 8.3" y un alto poder de rendimiento gracias al chip A15 Bionic. Además, con el sistema iPadOS y su potente batería potenciaras las funciones multitarea obteniendo una experiencia única.Todos los productos que Apple tiene para ti han sido fabricados con altos estándares de calidad y tecnología de punta.',
            productoEspecificaciones: [
                'Marca SAMSUNG',
                'Resolución de la pantalla 1340 x 800',
                'Capacidad GPS Sí',
                'Cámara frontal 2MP',
                'Tipo de Producto Tablets',
                'Cámara posterior 8MP',
                'Memoria expandible Sí',
                'Ancho (cm) 12.47',
                'Memoria interna 32GB'
            ],
            productoPrecio: 2549.00,
            productoImagen: img14
        }, {
            productoNombre: 'TABLET SAMSUNG GALAXY TAB A7 LITE 3GB RAM 32GB 8.7',
            productoDescripcion: 'Características destacadas,Memoria interna: 32GB,Procesador: MediaTek MT8768N,Modelo: Tab A7 Lite',
            productoCaracteristicas: 'Diseñada para seguir tus pasos,No sacrifiques estilo por comodidad. Galaxy Tab A7 Lite te ofrece ambos en un dispositivo ligero. Con solo 8 mm de grosor y 366g de peso, esta tablet se acomoda perfectamente en tu bolso o mochila sin cargar tu espalda en exceso.,Una batería que dura más,Galaxy Tab A7 Lite tiene más energía de la que esperarías en un dispositivo tan compacto. Su batería de 5100 mAh te da la libertad para olvidarte el cargador, aunque tengas que ir a algún sitio o planees pasar horas delante de la pantalla.',
            productoEspecificaciones: [
                'Marca SAMSUNG',
                'Resolución de la pantalla 1340 x 800',
                'Capacidad GPS Sí',
                'Cámara frontal 2MP',
                'Tipo de Producto Tablets',
                'Cámara posterior 8MP',
                'Memoria expandible Sí',
                'Ancho (cm) 12.47',
                'Memoria interna 32GB',
                'Tamaño de la pantalla 8.7',
                'Sistema operativo rango Android < a 4.0'
            ],
            productoPrecio: 499.90,
            productoImagen: img15
        }, {
            productoNombre: 'Tablet PC JUMPER EZPADI78128-Incluye teclado y lapicero',
            productoDescripcion: 'Características destacadas,Memoria interna: 32GB,Procesador: MediaTek MT8768N,Modelo: Tab A7 Lite',
            productoCaracteristicas: 'Procesador Intel i7 - 8 GB de memoria RAM - 128GB de capacidad de almacenamiento - Pantalla de 120- Resolución Quad HD - WiFi dual - Bluetooth v4.2 - Batería de 38Wh - 9.5 mm de grosor.',
            productoEspecificaciones: [
                'Marca JUMPER',
                'Batería Recargable No',
                'Conectividad No',
                'Inalámbrico Sí',
                'Capacidad de almacenamiento No',
                'Utiliza Baterías No',
                'Modelo EZpadI78128',
                'Bluetooth Sí',
                'Capacidad de batería No'
            ],
            productoPrecio: 2099.00,
            productoImagen: img16
        }, {
            productoNombre: 'TABLET SAMSUNG GALAXY TAB S7 FE, 12.4 PULGADAS, WIFI 256GB + S PEN INCLUIDA - PLATEADO',
            productoDescripcion: 'ENCUENTRA SAMSUNG GALAXY TAB S7 FE CON PANTALLA DE 12.4 PULGADAS Y BATERIA DE LARGA DURACION, EN RIPLEY PERÚ ¡COMPRA ONLINE!',
            productoCaracteristicas: 'Pantalla grande, gran experiencia: Una gran pantalla de 12.4 pulgadas da vida a tu contenido en colores brillantes ya sea en interiores o exteriores, haciendo que Samsung Galaxy S7 FE sea una gran tablet para tiempo de estudio o para un rápido descanso de entretenimiento,Colores llamativos, declaración llamativa: Elige un color atrevido: negro místico, verde místico, plata mística o rosa místico, que lo hace inconfundiblemente tuyo,Escribir, dibujar, pellizcar, tocar con S Pen: Toma notas en clase, esboza una idea o incluso garabatea con el S Pen incluido, con un nuevo diseño sensible que se siente más cerca del bolígrafo en papel que nunca antes',
            productoEspecificaciones: [
                'Marca SAMSUNG',
                'Peso (kg) 0.69898587000000001',
                'Tipo de Producto Tablets',
                'Alto (cm) 28.473400000000002',
                'Ancho (cm) 0.63500000000000001',
                'Largo (cm) 18.491199999999999'
            ],
            productoPrecio: 2949.00,
            productoImagen: img17
        }, {
            productoNombre: 'Logitech teclado Bluetooth',
            productoDescripcion: 'Marca: Logitech,Modelo: K400R BLACK,Tipo: Teclados,Compatibilidad: Otros,Inalámbrico: Sí',
            productoCaracteristicas: 'Contamos con una amplia gama de teclados, mouse, cámaras web, cables, audífonos y mucho más accesorios de computación. Estos productos están diseñados para mejorar tu experiencia de computación, brindándote mayor comodidad, productividad y diversión.¡Agrega algo de diversión a tu computación con los modernos y coloridos accesorios! Nuestras herramientas son fáciles de usar y ofrecen la más alta calidad. ¡Compra tus accesorios Innova Products hoy y disfruta de la mejor experiencia de usuario al mejor precio del mercado!',
            productoEspecificaciones: [
                'Marca Logitech',
                'Tipo Teclados',
                'Modelo K400R BLACK',
                'Inalámbrico Sí'

            ],
            productoPrecio: 150.00,
            productoImagen: img18
        }, {
            productoNombre: 'Mouse Logitech G Pro – blanco',
            productoDescripcion: 'Tasa de informe USB: 1000 Hz (1 ms),Microprocesador: ARM de 32 bits,Movimiento constante: 70h,Dimensiones: 12.50 x 6.35 x 4 cm,Peso: 63 g',
            productoCaracteristicas: 'Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.',
            productoEspecificaciones: [
                'Conectividad: cable.',
                'Utiliza cable.',
                'Posee rueda de desplazamiento.',
                'Con luces para mejorar la experiencia de uso.',
                'Con sensor óptico.',
                'Resolución de 8000dpi.'

            ],
            productoPrecio: 150.00,
            productoImagen: img19
        }, {
            productoNombre: 'Mouse gamer Lenovo legion M500 RGB',
            productoDescripcion: 'Cableado vía USB 2.0. · Diseño ergonómico diestro para la palma y agarre con garra. · Agarres laterales con textura para un mejor control. · Hasta 16.000 DPI.',
            productoCaracteristicas: 'Cableado vía USB 2.0,Diseño ergonómico diestro para la palma y agarre con garra,Agarres laterales con textura para un mejor control,Hasta 16.000 DPI,Cable de 1.8 metros de longitud, trenzado.',
            productoEspecificaciones: [
                'Marca LENOVO',
                'Peso (kg) -',
                'EAN/UPC 193268293830',
                'Bluetooth No',
                'Inalámbrico No',
                'Tipo de Producto Accesorios Cómputo',
                'Modelo Legion M500 RGB'
            ],
            productoPrecio: 159.99,
            productoImagen: img20
        }, {
            productoNombre: 'Mouse Logitech G -Morado',
            productoDescripcion: 'Descripcion',
            productoCaracteristicas: 'Sensor Hero 25K a través de una actualización de software de G HUB, esta actualización es gratuita para todos los jugadores: Nuestro más avanzado, con seguimiento 1:1, más de 400 ips, y sensibilidad de 100 a 25.600 ppp máximo más suavidad, filtrado o aceleración cero,Lightsync RGB: la iluminación de espectro completo responde a la acción del juego, el audio y el color de la pantalla; personaliza los efectos de iluminación de colores de 55.1 ft con el software de juego g hub y sincroniza a través de g gear,Comodidad y durabilidad: ligero (3.07 oz), cómodamente diseñado para moldearse a tu mano con agarres de goma para mayor control; peso extraíble de 0.35 oz te permite sintonizar tus preferencias',
            productoEspecificaciones: [
                'Marca LOGITECH G',
                'Peso (kg) 0.2',
                'Tipo de Producto Accesorios Gamer',
                'Alto (cm) 5.08',
                'Ancho (cm) 10.16',
                'Largo (cm) 20.32'
            ],
            productoPrecio: 281.00,
            productoImagen: img21
        }, {
            productoNombre: 'Teclado kit teclado y mouse Mofii celeste',
            productoDescripcion: 'Número de llaves: 104 teclas,Peso: alrededor de 660 gramos,Fuente de alimentación: 1 batería AAA,Llaves: 5 llaves,Dimensiones: 101 x 75 x 34 mm,Resolución óptica: 1600DPI',
            productoCaracteristicas: 'Botón multimedia, volumen, mute, search, play/pausa, adelantar canción/retroceder canción, subir y bajar volumen, email, guardar, configuración y favoritos,Tamaño del teclado: 44cm x 13cm x 3cm,Tamaño del mouse: 10cm x 7.5cm x 3.4cm,Diseño ergonómico adaptable a la mano,Teclado numérico',
            productoEspecificaciones: [
                'Condicion del productoNuevo',
                'Detalle de la garantía 5 días',
                'País de origen China',
                'Modelo Teclado y mouse',
                'Dimensiones 13cm x 3cm x 44cm',
                'Autonomía 48'
            ],
            productoPrecio: 189.00,
            productoImagen: img22
        }, {
            productoNombre: 'Teclado kit teclado y mouse Mofii verde',
            productoDescripcion: 'Número de llaves: 104 teclas,Peso: alrededor de 660 gramos,Fuente de alimentación: 1 batería AAA,Llaves: 5 llaves,Dimensiones: 101 x 75 x 34 mm,Resolución óptica: 1600DPIion',
            productoCaracteristicas: 'Botón multimedia, volumen, mute, search, play/pausa, adelantar canción/retroceder canción, subir y bajar volumen, email, guardar, configuración y favoritos.,Tamaño del teclado: 44cm x 13cm x 3cm,Tamaño del mouse: 10cm x 7.5cm x 3.4cm,Diseño ergonómico adaptable a la mano.,Teclado numérico',
            productoEspecificaciones: [
                'Condicion del productoNuevo',
                'Detalle de la garantía 5 días',
                'Modelo Teclado y mouse',
                'Dimensiones 13cm x 3cm x 44cm',
                'Color verde'
            ],
            productoPrecio: 189.00,
            productoImagen: img23
        }, {
            productoNombre: 'Audífonos Antryx H750BT blanco',
            productoDescripcion: 'Encuentra en Innova Products lo mejor en accesorios para PC de la prestigiosa marca Antryx y arma el setup gamer de alta performance que deseas.',
            productoCaracteristicas: 'Los audífonos modelo H750BT cuentan con la última tecnología Bluetooth 5.0, lo que te asegura una conexión sólida y una velocidad de transferencia súper rápida. Es compatible con smartphones, laptops, tablets, smart tv, etc. Ofrece una experiencia de audio nítida, potente y balanceada.Su micrófono de alta calidad te asegura una comunicación nítida y cristalina, necesaria para el home office, clases virtuales, video llamadas, etc. Su batería de alta duración puede durar hasta 8 horas seguidas de reproducción. ',
            productoEspecificaciones: [
                'Marca	ANTRYX',
                'Modelo	H750BT',
                'Peso (kg)	190',
                'Resistente al agua	No',
                'Tipo de audífono	Over-Ear',
                'Color	Blanco'
            ],
            productoPrecio: 99.00,
            productoImagen: img25
        }, {
            productoNombre: 'Audífonos skullcandy crusher 3.0 bt',
            productoDescripcion: 'Cómodos, potentes e inalámbricos, los audífonos over ear Crusher 3.0 de Skullcandy te acompañarán a donde vayas, otorgándote audio de altísima calidad.',
            productoCaracteristicas: 'Si eres una persona exigente y que gusta de disfrutar cada detalle de su música favorita, Skullcandy y Ripley.com tienen para ti un par de auriculares sorprendentemente bellos y de sublime performance.El modelo Crusher 3.0 destaca por ofrecer una experiencia verdaderamente inmersiva en todo lo que estés escuchando.Refinados y poderosos, ofrecen hasta 40 horas de duración con una sola carga, conexión vía Bluetooth muy estable y el peso ideal para llevarlos con suma comodidad.',
            productoEspecificaciones: [
                'Marca	SKULLCANDY',
                'Resistente al agua	No',
                'Tipo de Producto	Audífonos',
                'Bluetooth	Sí',
                'Sensibilidad dB	102 dB (1mW/500Hz)',
                'Color	Negro'
            ],
            productoPrecio: 189.00,
            productoImagen: img26
        }, {
            productoNombre: 'Audífonos "True Wireless" WF-C500',
            productoDescripcion: 'Cómodos, potentes e inalámbricos, los audífonos over ear Crusher 3.0 de Skullcandy te acompañarán a donde vayas, otorgándote audio de altísima calidad.',
            productoCaracteristicas: 'Si eres una persona exigente y que gusta de disfrutar cada detalle de su música favorita, Skullcandy y Ripley.com tienen para ti un par de auriculares sorprendentemente bellos y de sublime performance.El modelo Crusher 3.0 destaca por ofrecer una experiencia verdaderamente inmersiva en todo lo que estés escuchando.Refinados y poderosos, ofrecen hasta 40 horas de duración con una sola carga, conexión vía Bluetooth muy estable y el peso ideal para llevarlos con suma comodidad.',
            productoEspecificaciones: [
                'Superficie con diseño ergonómico',
                'Estuche de bolsillo para llevar a cualquier parte',
                'Botones intuitivos',
                'Compatibles con asistentes de voz',
                'Encuentra tus audífonos con Fast Pair',
                'Color	Negro'
            ],
            productoPrecio: 79.90,
            productoImagen: img27
        }, {
            productoNombre: 'Apple airpods max',
            productoDescripcion: 'ENCUENTRA EL APPLE AIRPODS MAX, EN INNOVA PRODUCTS PERÚ ¡COMPRA ONLINE!',
            productoCaracteristicas: 'Quisimos reinventar los audífonos de diadema para llevarlos un paso más allá. Desde las almohadillas hasta la misma diadema, los AirPods Max están diseñados para lograr un ajuste excepcional y crear un aislamiento acústico óptimo que se adapta a la forma de la cabeza. El resultado es una experiencia de audio realmente inmersiva.Los brazos telescópicos se extienden con facilidad y se quedan fijos en la posición que los coloques, para brindar un ajuste y un aislamiento perfectos.',
            productoEspecificaciones: [
                'Controlador dinámico diseñado por Apple',
                'Cancelación Activa de Ruido',
                'Modo Ambiente',
                'Ecualización Adaptativa',
                'Chip H1 de Apple para audífonos',
                'Nueve micrófonos en total'
            ],
            productoPrecio: 2779.00,
            productoImagen: img28
        }, {
            productoNombre: 'Audifonos bluetooth tws freebuds pro 2',
            productoDescripcion: '¡Ven a Innova Prdoucts.com y encuentra los mejores audífonos inalámbricos de la marca Huawei! Compra aquí.',
            productoCaracteristicas: 'Quisimos reinventar los audífonos de diadema para llevarlos un paso más allá. Desde las almohadillas hasta la misma diadema, los AirPods Max están diseñados para lograr un ajuste excepcional y crear un aislamiento acústico óptimo que se adapta a la forma de la cabeza. El resultado es una experiencia de audio realmente inmersiva.Los brazos telescópicos se extienden con facilidad y se quedan fijos en la posición que los coloques, para brindar un ajuste y un aislamiento perfectos.',
            productoEspecificaciones: [
                'Marca	HUAWEI',
                'Peso (kg)	0.3',
                'Peso (kg)	0.3',
                'Conectividad	Bluetooth',
                'Aislador de ruido	Sí',
                'Control de volumen	Sí',
                'Control por voz	No'
            ],
            productoPrecio: 579.00,
            productoImagen: img29
        }, {
            productoNombre: 'Audífonos Bluetooth 5.1 Gaming K9 Con Microfono – Negro',
            productoDescripcion: 'Tiempo de carga: 1,5hTiempo de espera: 100hPuerto de carga: USB Tipo-CPeso de un solo auricular: 5gPeso del estuche de carga: 32g.',
            productoCaracteristicas: 'Estos auténticos auriculares inalámbricos vienen con el estuche de carga más innovadores para que puedas participar en tu juego online favorito en cualquier momento y lugar. Estos auriculares TWS cuentan con controladores de 13 mm para un sonido estéreo perfecto con baja latencia y una duración de la batería notablemente larga gracias a un estuche de carga de 350 mAh. Además, la luz de respiración de colores, el diseño llamativo y los auriculares ligeros y ergonómicos llevan el juego móvil al siguiente nivel.',
            productoEspecificaciones: [
                'Segmento	Gamer',
                'Color	negro',
                'Conectividad/conexión	Bluetooth',
                'Modelo	EarPhone-K9',
                'Tipo de auricular	In-Ear',
                'Características	Cuenta con bluetooth'
            ],
            productoPrecio: 69.00,
            productoImagen: img30
        }, {
            productoNombre: 'Huawei Nova 11I 6.8" 8GB 128GB 48MP + 2MP Black bundle freebuds SE',
            productoDescripcion: '¡Ven a Innova Prdoucts.com y encuentra los mejores celulares de la marca Huawei! Compra aquí.',
            productoCaracteristicas: 'Huawei Nova 11i 8GB 128GB Black BUNDLE Freebuds SE Compra Celular huawei nova 11i 6.8" 8gb 128gb 48mp + 2mp black bundle freebuds se en Ripley Perú. Conoce sus caracteristicas y recíbelo en pocos días.',
            productoEspecificaciones: [
                'Marca	HUAWEI',
                'Memoria Interna	128GB',
                'Memoria RAM	8GB',
                'Procesador	Qualcomm Snapdragon',
                'Cámara frontal	16MP',
                'Cámara posterior rango	Más de 10MP',
                'Cámara posterior	48MP + 2MP'
            ],
            productoPrecio: 999.00,
            productoImagen: img31
        }, {
            productoNombre: 'Apple Iphone 14 6.1" 128GB 12MP + 12MP azul',
            productoDescripcion: 'Memoria Interna: 128GB. Cámara frontal: 12MP ,Tipo Procesador, Apple Chip A15 Bionic.',
            productoCaracteristicas:
                'Pantalla Super Retina XDR. \n' +
                'Resolución de 2532 x 1170 pixeles a 460 ppi. \n' +
                'Resistencia al agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6 metros). \n' +
                'Chip A15 Bionic: CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia.',
            productoEspecificaciones: [
                'Marca	APPLE',
                'Memoria Interna	128GB',
                'Memoria RAM	No aplica',
                'Procesador	A15 Bionic',
                'Tipo Procesador	Apple Chip A15 Bionic',
                'Resolución de la pantalla : Resolución de 2.532 por 1.170 píxeles'
            ],
            productoPrecio: 3799.00,
            productoImagen: img32
        }, {
            productoNombre: 'Oppo A57 6.56" 4GB 128GB 13MP F/2.2 green',
            productoDescripcion: '¡Ven a Innova Prdoucts.com y encuentra los mejores celulares de la marca oppo! Compra aquí.',
            productoCaracteristicas: 'OPPO A57 128GB 4GB GREEN , Descubre Celular oppo a57 6.56" 4gb 128gb 13mp f/2.2 green al mejor precio. Compra con Ofertas y Descuentos.',
            productoEspecificaciones: [
                'Marca	OPPO',
                'Memoria Interna	128 GB',
                'Memoria RAM	4GB',
                'Procesador	Mediatek',
                'Tipo Procesador	MediaTek Helio G35',
                'Capacidad de batería	5000 mAh'
            ],
            productoPrecio: 799.00,
            productoImagen: img33
        }, {
            productoNombre: 'Honor X8A 6.7" 8GB 128GB 100M+5M+2M black',
            productoDescripcion: 'Memoria RAM, 8GB. Procesador, Mediatek. Tipo Procesador, Helio G88. Cámara frontal, 16MP. Cámara posterior rango, Más de 10MP. Cámara posterior, 100M+5M+2M',
            productoCaracteristicas: 'Recibe todas tus compras online. Compra con las mejores ofertas y descuentos. Celular honor x8a 6.7" 8gb 128gb 100m+5m+2m black',
            productoEspecificaciones: [
                'Marca	HONOR',
                'Memoria Interna	128 GB',
                'Memoria RAM	8GB',
                'Procesador	Mediatek',
                'Tipo Procesador	Helio G88',
                'Capacidad de batería	4500 mAh'
            ],
            productoPrecio: 929.00,
            productoImagen: img34
        }, {
            productoNombre: 'Samsung Galaxy S23 6.1" 8GB 256GB 50MP + 10MP + 12MP SM-S911BZGMLTP verde',
            productoDescripcion: 'Memoria Interna: 256GB. Cámara frontal: 12 MP. Cámara posterior: 50 MP + 10 MP + 12 MP. Batería: 3900 mAh.',
            productoCaracteristicas: 'OPPO A57 128GB 4GB GREEN , Descubre Celular oppo a57 6.56" 4gb 128gb 13mp f/2.2 green al mejor precio. Compra con Ofertas y Descuentos.',
            productoEspecificaciones: [
                'Marca	SAMSUNG',
                'Memoria Interna	256GB',
                'Memoria RAM	4GB',
                'Procesador	Qualcomm | SM8550',
                'Tipo Procesador	Octa-Core',
                'Capacidad de batería	3900 mAh'
            ],
            productoPrecio: 4299.00,
            productoImagen: img35
        }, {
            productoNombre: 'Samsung Galaxy S23 Ultra 6.8" 12GB 512GB 200MP + 10MP + 12MP + 10MP SM-S918BLIVLTP lavanda',
            productoDescripcion: 'Memoria Interna: 512GB. Cámara frontal: 12 MP. Cámara posterior: 200 MP + 10 MP + 12 MP + 10 MP. Batería: 5000 mAh.',
            productoCaracteristicas: 'Toma fotos y videos nítidos desde el anochecer hasta el amanecer. El sensor de cámara más avanzado y el procesador más rápido del Galaxy admiten poca luz y reducen el ruido. E incluso la lente de la cámara borra la captura al atenuar el resplandor,Maximiza tu tiempo libre con el chip más potente de un teléfono inteligente Galaxy. Las características mejoradas en todos los ámbitos significan que todo, desde los juegos hasta la transmisión, está optimizado y es perfecto, sin agotar la batería,El uso de materiales conscientes permite que nuestro teléfono inteligente sea más ecológico. El vidrio reciclado y la película de PET acentúan el exterior del smartphone, y la caja hecha de papel reciclado lo hace amigable con el planeta desde el momento en que llega a tus manos.',
            productoEspecificaciones: [
                'Marca	SAMSUNG',
                'Memoria Interna	512GB',
                'Memoria RAM	12GB',
                'Procesador	Qualcomm | SM8550',
                'Tipo Procesador	Octa-Core',
                'Capacidad de batería	5000 mAh'
            ],
            productoPrecio: 5199.00,
            productoImagen: img36
        }, {
            productoNombre: 'Laptop HP amd Ryzen 5 8GB',
            productoDescripcion: 'Procesador: Intel Core i7 · Memoria RAM: 12GB · Disco duro: 512 GB SSD · Tarjeta gráfica: Intel Iris® Xe Graphics (integrada) · Tipo de disco duro: SSD.',
            productoCaracteristicas: 'Procesamiento Intel® Core™ de 11va generaciónPantalla 15.6” FHD táctil opcional con bordes estrechos para una visualización grandiosaTapa de privacidad en la cámara web y lector de huellas digitales opcionalAltavoces Dolby Audio™ orientados al usuarioIncluye 1 puerto USB-C & soporta Rapid Charge para que siempre tengas bateríaAlgunos puertos y características pueden ser opcionales; colores sujetos a disponibilidad',
            productoEspecificaciones: [
                'Marca	LENOVO',
                'Modelo	IdeaPad 5i',
                'Conectividad	Wi-Fi / Bluetooth',
                'Cámara	HD 720p con obturador de privacidad',
                'Procesador	Intel Core i7',
                'Memoria RAM	12GB',
                'Disco duro	512 GB SSD',
                'Tarjeta gráfica	Intel Iris® Xe Graphics (integrada)'
            ],
            productoPrecio: 1959.00,
            productoImagen: img37
        },
        {
            productoNombre: 'Lenovo IDEAPAD 5I Intel core I7 12GB RAM 512GB SSD 15.6" FHD',
            productoDescripcion: 'Procesador: Intel Core i7 · Memoria RAM: 12GB · Disco duro: 512 GB SSD · Tarjeta gráfica: Intel Iris® Xe Graphics (integrada) · Tipo de disco duro: SSD.',
            productoCaracteristicas: 'Procesamiento Intel® Core™ de 11va generaciónPantalla 15.6” FHD táctil opcional con bordes estrechos para una visualización grandiosaTapa de privacidad en la cámara web y lector de huellas digitales opcionalAltavoces Dolby Audio™ orientados al usuarioIncluye 1 puerto USB-C & soporta Rapid Charge para que siempre tengas bateríaAlgunos puertos y características pueden ser opcionales; colores sujetos a disponibilidad',
            productoEspecificaciones: [
                'Marca	LENOVO',
                'Modelo	IdeaPad 5i',
                'Conectividad	Wi-Fi / Bluetooth',
                'Cámara	HD 720p con obturador de privacidad',
                'Procesador	Intel Core i7',
                'Memoria RAM	12GB',
                'Disco duro	512 GB SSD',
                'Tarjeta gráfica	Intel Iris® Xe Graphics (integrada)'
            ],
            productoPrecio: 2999.00,
            productoImagen: img38
        },
        {
            productoNombre: 'Laptop Lenovo IDEAPAD GAMING 3 AMD Ryzen 5 16GB RAM 512GB SSD 15.6',
            productoDescripcion: 'Disco duro: 512GB. Memoria RAM: 16GB. Procesador: AMD Ryzen 5. Tipo de disco duro: SSD. ',
            productoCaracteristicas: 'Laptop gamer IdeaPad Gaming 3 de Lenovo.Procesador AMD Ryzen 5 5600H.Tarjeta de video NVIDIA GeForce RTX 3050 (4GB).Memoria RAM de 16GB.Almacenamiento en estado sólido de 512GB.',
            productoEspecificaciones: [
                'Marca	LENOVO',
                'Lector de tarjetas	No',
                'Parlantes	2',
                'Tipo de Producto	Laptops',
                'Disco duro	512GB',
                'Tarjeta de video	NVIDIA GeForce RTX 3050 (4GB)'
            ],
            productoPrecio: 3799.00,
            productoImagen: img39
        },
        {
            productoNombre: 'Laptop gamer Asus TUF F15 FX506LHB-HN323UW Intel core I5 10300H 8GB RAM 512GB SSD 15.6',
            productoDescripcion: ' Procesador: Intel Core i5 · Memoria RAM: 8GB · Disco duro: 512GB · Tarjeta gráfica: NVIDIA GeForce GTX 1650 · Tipo de disco duro: SSD.',
            productoCaracteristicas: 'El ASUS TUF Gaming cuenta con todo lo que necesitas para derrotar a la competencia, como componentes de alto rendimiento enfriados por un sistema térmico con módulos anti polvo y durabilidad testeada bajo pruebas de grado militar.Pantalla ultrarrápida.La sorprendente pantalla de 144Hz del ASUS TUF Gaming F15 entrega visuales fluidas para una experiencia de gaming más inmersiva.Resistencia de Grado Militar.Lleva el ASUS TUF Gaming A15 a cualquier lugar gracias a su resistencia a cualquier tipo de ambiente extremo, testeada bajo estrictas pruebas de grado militar.',
            productoEspecificaciones: [
                'Marca	ASUS',
                'Modelo	FX506LHB-HN323W',
                'Cámara	720p',
                'Procesador	Intel Core i5',
                'Memoria RAM	8GB',
                'Disco duro	512GB'
            ],
            productoPrecio: 2599.00,
            productoImagen: img40
        },
        {
            productoNombre: 'Laptop Apple Macbook air 13 con chip M2 (2022) 8GB RAM 2TB SSD - plateado',
            productoDescripcion: 'ENCUENTRA LA MACBOOK AIR,POTENCIA EN VELOCIDAD, EFICIENCIA.CPU DE 8 NÚCLEOS,GPU DE 10 NÚCLEOS,MOTOR DE ALTO RENDIMIENTO,BATERÍA DE 21 HORAS DE DURACIÓN,EN RIPLEY PERÚ COMPRA ONLINE.',
            productoCaracteristicas: 'Teclado Ingles Chip Apple M2 con CPU de 8 núcleos, GPU de 8 núcleos, Neural Engine de 16 núcleos,Memoria unificada de 8GB,Almacenamiento SSD de 2TB,Pantalla Liquid Retina de 13,6 pulgadas con True Tone,Cámara FaceTime HD de 1080p,Puerto de carga MagSafe,Dos puertos Thunderbolt/USB,Adaptador de corriente USB tipo C de 30 W.',
            productoEspecificaciones: [
                'Marca	APPLE',
                'Procesador	M2 Apple',
                'Memoria RAM	8GB',
                'Disco Duro	2TB',
                'Tipo Procesador	Octa-Core',
                'Conectividad	Wi-Fi'
            ],
            productoPrecio: 9649.00,
            productoImagen: img41
        }, {
            productoNombre: 'Laptop Acer NITRO 5 Intel core I5 8GB RAM 512GB SSD 15.6 FHD IPS 144HZ GTX 1650 4GB',
            productoDescripcion: 'Procesador: Intel Core i5. Memoria RAM: 8GB. Disco duro: 512GB. Tarjeta gráfica: NVIDIA GeForce GTX 1650. Tipo de disco duro: SSD.',
            productoCaracteristicas: 'Domina el mundo del juego con la potencia combinada de los procesadores Intel® CoreTM de 11.a generación y los gráficos NVIDIA® GeForce GTX1. Configure su computadora portátil para máxima velocidad y almacenamiento masivo con dos ranuras para SSD M.2 PCIe / SATA1 (hasta 1TB Raid 0 / 2TB HDD) y hasta 32GB de RAM DDR4.Domine el mundo de los videojuegos con la potencia y el rendimiento de los gráficos NVIDIA® GeForce® GTX 1650 con las capacidades de la arquitectura NVIDIA® Turing®¹.Obtenga una ventaja en línea tomando el control de su red y priorizando su juego con Killer™ Ethernet E2600 e Intel® Wi-Fi 61. Conecte todos sus periféricos a la gama completa de puertos, incluidos HDMI 2.0 y el estándar USB 3.2 más nuevo con Gen1 y 2 soporte1.',
            productoEspecificaciones: [
                'Marca	ACER',
                'Modelo	AN515-57-57U5',
                'Memoria RAM	8GB',
                'Disco duro	512GB',
                'Tarjeta gráfica	NVIDIA GeForce GTX 1650',
                'Sistema operativo	Windows 11 Home'
            ],
            productoPrecio: 2799.00,
            productoImagen: img42
        }, {
            productoNombre: 'Mouse gamer Lenovo IDEAPAD M100 RGB',
            productoDescripcion: 'Procesador: Intel Core i5. Memoria RAM: 8GB. Disco duro: 512GB. Tarjeta gráfica: NVIDIA GeForce GTX 1650. Tipo de disco duro: SSD.',
            productoCaracteristicas: '¡Siente toda la potencia de un clic en tus manos con Lenovo!Esta exclusiva marca pone a tu alcance su amplia línea de accesorios de computación para que realices tus labores con comodidad y eficiencia. Vive una experiencia única con el mouse Ideapad Gaming M100 Rgb diseñado para brindarte un alto rendimiento al competir.Todos los productos que Lenovo tiene para ti han sido fabricados con altos estándares de calidad y tecnología de punta.',
            productoEspecificaciones: [
                'Marca	LENOVO',
                'Tipo de Producto	Accesorios Cómputo',
                'Modelo	IdeaPad Gaming M100 RGB',
                'Compatibilidad	Windows 7, Windows 10',
                'Incluye batería	No',
                'Utiliza Baterías	No'
            ],
            productoPrecio: 39.90,
            productoImagen: img43
        }, {
            productoNombre: 'Mouse Logitech G blanco',
            productoDescripcion: 'Sensor: HERO™ Resolución: 100 – 25.600 DPI Aceleración máxima: >40 G 2 Pruebas realizadas sobre alfombrilla de mouse Logitech G240 para juegos',
            productoCaracteristicas: 'Domina el mundo del juego con la potencia combinada de los procesadores Intel® CoreTM de 11.a generación y los gráficos NVIDIA® GeForce GTX1. Configure su computadora portátil para máxima velocidad y almacenamiento masivo con dos ranuras para SSD M.2 PCIe / SATA1 (hasta 1TB Raid 0 / 2TB HDD) y hasta 32GB de RAM DDR4.Domine el mundo de los videojuegos con la potencia y el rendimiento de los gráficos NVIDIA® GeForce® GTX 1650 con las capacidades de la arquitectura NVIDIA® Turing®¹.Obtenga una ventaja en línea tomando el control de su red y priorizando su juego con Killer™ Ethernet E2600 e Intel® Wi-Fi 61. Conecte todos sus periféricos a la gama completa de puertos, incluidos HDMI 2.0 y el estándar USB 3.2 más nuevo con Gen1 y 2 soporte1.',
            productoEspecificaciones: [
                'Marca	LOGITECH G',
                'Batería Recargable	No',
                'Inalámbrico	Sí',
                'Modelo	PRO X SUPERLIGHT',
                'Contenido	Mouse y Manual de usuario',
                'Conectividad	Inalambrico'
            ],
            productoPrecio: 250.00,
            productoImagen: img44
        },
        {
            productoNombre: 'Mouse Logitech G203 RGB blanco',
            productoDescripcion: 'Sensor: HERO™ Resolución: 100 – 25.600 DPI Aceleración máxima: >40 G 2 Pruebas realizadas sobre alfombrilla de mouse Logitech G240 para juegos',
            productoCaracteristicas: 'Domina el mundo del juego con la potencia combinada de los procesadores Intel® CoreTM de 11.a generación y los gráficos NVIDIA® GeForce GTX1. Configure su computadora portátil para máxima velocidad y almacenamiento masivo con dos ranuras para SSD M.2 PCIe / SATA1 (hasta 1TB Raid 0 / 2TB HDD) y hasta 32GB de RAM DDR4.Domine el mundo de los videojuegos con la potencia y el rendimiento de los gráficos NVIDIA® GeForce® GTX 1650 con las capacidades de la arquitectura NVIDIA® Turing®¹.Obtenga una ventaja en línea tomando el control de su red y priorizando su juego con Killer™ Ethernet E2600 e Intel® Wi-Fi 61. Conecte todos sus periféricos a la gama completa de puertos, incluidos HDMI 2.0 y el estándar USB 3.2 más nuevo con Gen1 y 2 soporte1.',
            productoEspecificaciones: [
                'Marca	LOGITECH G',
                'Batería Recargable	No',
                'Inalámbrico	Sí',
                'Modelo	PRO X SUPERLIGHT',
                'Contenido	Mouse y Manual de usuario',
                'Conectividad	Inalambrico'
            ],
            productoPrecio: 170.00,
            productoImagen: img45
        },
        {
            productoNombre: 'Mouse Logitech G203 RGB morado',
            productoDescripcion: 'Sensor: HERO™ Resolución: 100 – 25.600 DPI Aceleración máxima: >40 G 2 Pruebas realizadas sobre alfombrilla de mouse Logitech G240 para juegos',
            productoCaracteristicas: 'Domina el mundo del juego con la potencia combinada de los procesadores Intel® CoreTM de 11.a generación y los gráficos NVIDIA® GeForce GTX1. Configure su computadora portátil para máxima velocidad y almacenamiento masivo con dos ranuras para SSD M.2 PCIe / SATA1 (hasta 1TB Raid 0 / 2TB HDD) y hasta 32GB de RAM DDR4.Domine el mundo de los videojuegos con la potencia y el rendimiento de los gráficos NVIDIA® GeForce® GTX 1650 con las capacidades de la arquitectura NVIDIA® Turing®¹.Obtenga una ventaja en línea tomando el control de su red y priorizando su juego con Killer™ Ethernet E2600 e Intel® Wi-Fi 61. Conecte todos sus periféricos a la gama completa de puertos, incluidos HDMI 2.0 y el estándar USB 3.2 más nuevo con Gen1 y 2 soporte1.',
            productoEspecificaciones: [
                'Marca	LOGITECH G',
                'Batería Recargable	No',
                'Inalámbrico	Sí',
                'Modelo	PRO X SUPERLIGHT',
                'Contenido	Mouse y Manual de usuario',
                'Conectividad	Inalambrico'
            ],
            productoPrecio: 180.00,
            productoImagen: img46
        },
        {
            productoNombre: 'Teclado gaming Logitech G PRO',
            productoDescripcion: 'Las teclas tienen la forma de tus dedos, mientras que el diseño contemporáneo garantiza clics discretos y fluidos. Moderniza tu escritorio desde donde quieras con una nueva gama de colores',
            productoCaracteristicas: '	Diseño de diez teclas sin inspiración profesional.Interruptores mecánicos Clicky GX Blu,Iluminación LIGHTSYNC RGB 	Cable desmontable de 1,8 m',
            productoEspecificaciones: [
                'Marca	ACER',
                'Modelo	AN515-57-57U5',
                'Memoria RAM	8GB',
                'Disco duro	512GB',
                'Tarjeta gráfica	NVIDIA GeForce GTX 1650',
                'Sistema operativo	Windows 11 Home'
            ],
            productoPrecio: 430.00,
            productoImagen: img47
        }, {
            productoNombre: 'Teclado Logitech K380 ROSE',
            productoDescripcion: ' Las teclas tienen la forma de tus dedos, mientras que el diseño contemporáneo garantiza clics discretos y fluidos. Moderniza tu escritorio desde donde quieras con una nueva gama de colores',
            productoCaracteristicas: 'El teclado K380 multidispositivo, inalámbrico y Bluetooth te sigue a donde vayas. Con un fino diseño portátil, te brinda la comodidad y la facilidad de teclear desde el ordenador, desde tu tablet o teléfono. Conecta hasta tres dispositivos a la vez y pasa al ordenador a la tableta con solo tocar un botón gracias al diseño Easy-Switch. Es compatible con Windows, Mac, iPadOS, Chrome OS, Android, iOS (iPhone y iPad), Apple TV y más. Disfruta de la facilidad del portátil estés donde estés.',
            productoEspecificaciones: [
                'Es compatible con Windows, Mac, iPadOS, Chrome OS, Android, iOS (iPhone y iPad), Apple TV y más.',
                'Las teclas están dispuestas con un diseño que se adapta a ti para ocupar poco espacio.',
                'Las teclas tienen la forma de tus dedos, mientras que el diseño contemporáneo garantiza clics discretos y fluidos',
                'Trae dos baterías alcalinas AAA preinstaladas',
                'Tarjeta gráfica	NVIDIA GeForce GTX 1650',
                'La batería dura hasta dos años'
            ],
            productoPrecio: 119.00,
            productoImagen: img48
        },

    ]

    const currentData = data[productID];// Obtener los datos del producto actual utilizando el ID del producto
    const [cantidad, setCantidad] = useState(1); // Estado para almacenar la cantidad seleccionada del producto
    const cambiarCantidad = (event) => { // Función para actualizar la cantidad seleccionada
        const newCantidad = parseInt(event.target.value);// Obtener la nueva cantidad del campo de entrada y convertirla a un número entero
        setCantidad(newCantidad);// Actualizar el estado de la cantidad
    };

    const agregarItem = () => {// Función para agregar el producto al carrito
        const productoId = productID// ID del producto
        const productoNombre = currentData.productoNombre// Nombre del producto
        const productoPrecio = currentData.productoPrecio// Precio del producto
        const productoCantidad = cantidad// Cantidad seleccionada del producto
        const productoImagen = currentData.productoImagen// URL de la imagen del producto


        //Comprobamos si ya existe un carrito
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];// Obtener el carrito almacenado en el almacenamiento local o un array vacío si no existe
        carrito.push({// Agregar el nuevo producto al carrito
            itemId: generarIdUnico(),// Generar un ID único para el producto
            productoId: productoId,
            productoNombre: productoNombre,
            productoCantidad: productoCantidad,
            productoPrecio: productoPrecio,
            productoImagen: productoImagen
        });

        //Guardamos el carrito de compras localmente
        localStorage.setItem('carrito', JSON.stringify(carrito));

        console.log('Producto agregado al carrito exitosamente');
    }

    const generarIdUnico = () => {// Función para generar un ID único para el producto
        return Date.now().toString();// Generar un ID único basado en la marca de tiempo actual
    };

    return (
        <main>
            <Header/>

            <section className={styles.itemContainer}>
                <div className={styles.imgContainer}>
                    <img src={currentData.productoImagen} alt='img'></img>
                </div>
                <div className={styles.infoContainer}>
                    <h2>{currentData.productoNombre}</h2>
                    <p>{currentData.productoDescripcion}</p>
                    <h3>S/. {currentData.productoPrecio}</h3>
                    <input type='number' value={cantidad} onChange={cambiarCantidad}/>
                    <button onClick={agregarItem}>Añadir al carrito</button>
                </div>
            </section>

            <section className={styles.productInfoContainer}>
                <div className={styles.featuresContainer}>
                    <h1>Características</h1>
                    <p>{currentData.productoCaracteristicas}</p>
                </div>
                <div className={styles.especificationsContainer}>
                    <h1>Especificaciones</h1>
                    <ul>
                        {currentData.productoEspecificaciones.map((cadena) => (
                            <li key={productID}>{cadena}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section>
                <div class={styles.centerText}>
                    <h2>PRODUCTOS QUE PUEDAN INTERESARTE</h2>
                </div>
                <div className={styles.products}>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${1}`}>
                        <img src={img1} alt=""/>
                        <div className={styles.newText}>
                            <h5>SONY</h5>
                            <h4>Audífonos Sony WH-1000XM4 BT</h4>
                            <p>S/1,499.90</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${18}`}>
                        <img src={img18} alt=""></img>
                        <div className={styles.newText}>
                            <h5>LOGITECH</h5>
                            <h4>Logitech teclado Bluetooth</h4>
                            <p>S/150.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${13}`}>
                        <img src={img13} alt=""></img>
                        <div className={styles.newText}>
                            <h5>SAMSUNG</h5>
                            <h4>Samsung galaxy Tab S6 Lite</h4>
                            <p>S/2,999.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${6}`}>
                        <img src={img6} alt=""/>
                        <div className={styles.newText}>
                            <h5>Apple</h5>
                            <h4>Apple iphone 14 PRO 6.1" 128GB 48MP + 12MP + 12MP morado oscuro</h4>
                            <p>S/ 4,999.00</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section>
                <div className={styles.products}>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${16}`}>
                        <img src={img16} alt=""></img>
                        <div className={styles.newText}>
                            <h5>JUMPER</h5>
                            <h4>Tablet PC JUMPER EZPADI78128 - Incluye teclado y lapicero</h4>
                            <p>S/2,099.00</p>
                        </div>

                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${19}`}>
                        <img src={img19} alt=""></img>
                        <div className={styles.newText}>
                            <h5>LOGITECH</h5>
                            <h4>Mouse Logitech G Pro - blanco</h4>
                            <p>S/150.00</p>
                        </div>
                    </Link>

                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${12}`}>
                        <img src={img12} alt=""></img>
                        <div className={styles.newText}>
                            <h5>SAMSUNG</h5>
                            <h4>Tablet samsung galaxy TAB S7 - Verde mistico</h4>
                            <p>S/949.00</p>
                        </div>
                    </Link>
                    <Link className={`${styles.rowThree} ${styles.imge}`} to={`/agregar?productID=${5}`}>
                        <img src={img24} alt=""></img>
                        <div className={styles.newText}>
                            <h5>PHILIPS</h5>
                            <h4>Audífonos philips on ear con micrófono blanco</h4>
                            <p>S/59.40</p>
                        </div>
                    </Link>
                </div>
            </section>

            <Footer/>
        </main>
    );
}
