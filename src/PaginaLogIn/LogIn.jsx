import "../Estilos/Estilos.css"
import {Link} from 'react-router-dom'

const LogIn = () => {
    return <>
        <header class="HeaderLogIn">
            <div class="Logo">
                <img src="/Foltec.png" alt="LogoFoltec" />
            </div>
            <form action="">
                <br />
                <div class="LogIn">
                    <div>
                        <h2>Log In</h2>
                    </div>

                    <input 
                    type="text" 
                    name="Usuario" 
                    id="Usuario" 
                    className="BotonUsuario"
                    placeholder="Nombre Usuario" />

                    <input 
                    type="password" 
                    name="Contraseña" 
                    id="Contraseña" 
                    className="BotonUsuario"
                    placeholder="Contraseña "/>
                    
                    <div class="DivIngresar">
                        <Link to="/PaginaInventario">
                        <button type="submit" class="Ingresar">
                            Ingresar
                        </button>
                        </Link> 
                    </div>

                    <div class="OlvideContrasena">
                        <br />
                        <br />
                        <a href="###"><h5>Olvidé mi contraseña</h5></a>
                        <br />
                    </div>

                </div>
            </form>
        </header>
    </>
}
export default LogIn