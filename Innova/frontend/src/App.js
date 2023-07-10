import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./paginas/login"
import Register from "./paginas/register"
import Productos from "./paginas/productos"
import Carrito from "./paginas/carrito"
import OrdenCompra from "./paginas/ordenCompra"
import Agregar from "./paginas/agregar"
import Confirmacion from "./paginas/confirmacion"
import Audifonos from "./paginas/audifonos";
import Celulares from "./paginas/celulares";
import Laptops from "./paginas/laptops";
import Accesorios from "./paginas/accesorios";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/productos' element={<Productos/>}/>
                <Route path='/productos/audifonos' element={<Audifonos/>}/>
                <Route path='/productos/celulares' element={<Celulares/>}/>
                <Route path='/productos/laptops' element={<Laptops/>}/>
                <Route path='/productos/accesorios' element={<Accesorios/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='/orden' element={<OrdenCompra/>}/>
                <Route path='/agregar' element={<Agregar/>}/>
                <Route path='/confirmacion' element={<Confirmacion/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
