import '../Estilos/Estilos.css'
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import ListaUsuarios from '../InfoSecciones/ListaUsuarios';
import ListaEquipos from '../InfoSecciones/ListaEquipos.jsx';
import FormEquipos from '../InfoSecciones/FormEquipos';

const PaginaInventario = () => {   
    const [seccionActiva, setSeccionActiva] = useState('Usuarios');

    // 2. Función Manejadora de Clic: Actualiza el estado con el ID de la sección.
    const handleMenuClick = (targetId) => {
        setSeccionActiva(targetId);
    };
    
    // Lista de botones del menú
    const menuOpciones = [
        { id: 'Usuarios', texto: 'Usuarios' },
        { id: 'Computadoras', texto: 'Computadoras' },
        { id: 'Seguridad', texto: 'Seguridad' },
        { id: 'Localizacion', texto: 'Localización' },
    ];
    
    // 3. Renderizado Condicional del Contenido de la Sección (Opcional, pero más limpio en React)
    const SeccionContenido = () => {
        // En React, el renderizado condicional con estado es más limpio que usar 'style="display:none"'
        switch (seccionActiva) {
            case 'Usuarios':
                return (
                    <section id="Usuarios">
                        <br />
                        <div className='SeccionPrincipal'>
                            <div className='TituloSecciones'>
                            <h2>Lista de usuarios</h2>
                            <input 
                                type="text" 
                                className="BarraBusqueda"
                                placeholder="Buscar..."
                            /> 
                            </div>
                            <ListaUsuarios></ListaUsuarios> 
                        </div>
                    </section>
                );
            case 'Computadoras':
                return (
                    <section id="Computadoras">
                        <br />
                        <div className='TituloSecciones'>
                            <h2>Registro de equipos</h2>
                            <input 
                                type="text" 
                                className="BarraBusqueda"
                                placeholder="Buscar..."
                            />
                        </div>
                        <br />
                        <ListaEquipos></ListaEquipos>
                        <br />
                        <FormEquipos></FormEquipos>
                    </section>
                );
            case 'Seguridad':
                return (
                    <section id="Seguridad">
                        <div className='TituloSecciones'>
                            <br />
                            <h2>Seguridad</h2>
                            <br />
                        </div>
                    </section>
                );
            case 'Localizacion':
                return (
                    // Asegúrate de que el ID aquí sea 'Localizacion', no 'Lozalizacion' como en tu original.
                    <section id="Localizacion"> 
                        <div className='TituloSecciones'>
                            <br />
                            <h2>Lozalización</h2>
                            <br />
                        </div>
                    </section>
                );
            default:
            return null;
        }
    };
    
    return <>
        <header className="HeaderInventario">
            <div className="DivHeader">
                <img src="/Foltec.png" alt="LogoFoltec" />
            </div>
            <div >
                <Link to="/">
                    <h3 className="CerrarSesion">Cerrar sesión</h3>
                </Link>  
            </div>
        </header>
        <nav className='NavPrincipal'>
            {menuOpciones.map((opcion) => (
                <button 
                    key={opcion.id}
                    onClick={() => handleMenuClick(opcion.id)} 
                    className={seccionActiva === opcion.id ? 'activo' : ''}
                >
                    {opcion.texto}
                </button>
            ))}
        </nav>
        <div id="ContenidoInventario">
                {SeccionContenido()} 
        </div>
        <br />
        <br />
        <footer>
            Derechos reservados
        </footer>
    </>
}
export default PaginaInventario