import "../Estilos/Estilos.css"
import {Link} from 'react-router-dom'

const LogIn = () => {
    return <>
        <header className="HeaderLogIn">
            <div className="Logo">
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
                    
                    <div className="DivIngresar">
                        <Link to="/PaginaInventario">
                        <button type="submit" className="Ingresar">
                            Ingresar
                        </button>
                        </Link> 
                    </div>

                    <div className="OlvideContrasena">
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