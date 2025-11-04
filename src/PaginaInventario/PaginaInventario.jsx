import '../Estilos/Estilos.css'
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import FormEquipos from '../InfoSecciones/FormEquipos';
import FormUsuarios from '../InfoSecciones/FormUsuarios.jsx';
import FormAdmin from '../InfoSecciones/FormAdmin.jsx';

const PaginaInventario = () => {   
    const [seccionActiva, setSeccionActiva] = useState('Inicio');

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
        { id: 'Soporte', texto: 'Soporte' },
    ];
    
    // 3. Renderizado Condicional del Contenido de la Sección (Opcional, pero más limpio en React)
    const SeccionContenido = () => {
        // En React, el renderizado condicional con estado es más limpio que usar 'style="display:none"'
        switch (seccionActiva) {
            case 'Inicio':
            return (
                <section id="Inicio">
                    <div className='TituloInicio'>
                        <h2>¡Bienvenido a FOLTEC gestor de inventarios!</h2>
                    </div>
                    <div className='ImagenInicio'>
                        <img src="https://mecaluxes.cdnwm.com/img/blog/gestion-de-inventario-gestion-stock.1.13.jpg?imwidth=1024&imdensity=1" alt="Imagen de gestor" />
                    </div>
                </section>
            );
            
            case 'Usuarios':
                return (
                    <section id="Usuarios">
                        <div>
                            <FormUsuarios></FormUsuarios>
                        </div>
                        <br />
                        <br />
                        <div className='Separador'></div>
                        <div>
                            <FormAdmin></FormAdmin>
                        </div>
                    </section>
                );
            case 'Computadoras':
                return (
                    <section id="Computadoras">
                        <div>
                            <FormEquipos></FormEquipos>
                        </div>
                    </section>
                );
            case 'Seguridad':
                return (
                    <section id="Seguridad">
                        <div className='TituloSecciones'>
                            <div className='EstiloTitulos'>
                                <h2>Seguridad</h2>
                            </div>
                        </div>
                    </section>
                );
            case 'Localizacion':
                return (
                    // Asegúrate de que el ID aquí sea 'Localizacion', no 'Lozalizacion' como en tu original.
                    <section id="Localizacion"> 
                        <div className='TituloSecciones'>
                            <h2>Lozalización</h2>
                        </div>
                    </section>
                );
            case 'Soporte':
                return (
                    // Asegúrate de que el ID aquí sea 'Localizacion', no 'Lozalizacion' como en tu original.
                    <section id="Soporte"> 
                        <div className='TituloSecciones'>
                            <h2>Soporte</h2>
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
        <footer>
                &copy; Derechos reservados
        </footer>
    </>
}
export default PaginaInventario