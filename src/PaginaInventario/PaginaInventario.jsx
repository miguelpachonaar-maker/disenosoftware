import '../Estilos/Estilos.css'
import {Link} from 'react-router-dom'

const PaginaInventario = () => {
    return <>
        <header class="HeaderInventario">
            <div class="DivHeader">
                <img src="/Foltec.png" alt="LogoFoltec" />
                <input 
                type="text" 
                name="Usuario" 
                id="Usuario" 
                className="BarraBusqueda"
                placeholder="Buscar" />
            </div>

            <div >
                <Link to="/">
                    <h3 class="CerrarSesion">Cerrar sesión</h3>
                </Link>  
            </div>
        </header>
        <nav>
            <ul>
                <li>USUARIOS</li>
            </ul>
            <ul>
                <li>COMPUTADORAS</li>
            </ul>
            <ul>
                <li>SEGURIDAD</li>
            </ul>  
            <ul>
                <li>LOCALIZACIÓN</li>
            </ul>
        </nav>
    </>
}
export default PaginaInventario