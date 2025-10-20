    import '../Estilos/Estilos.css'
    import {Link} from 'react-router-dom'
    import React, { useState } from 'react';

    const PaginaInventario = () => {   
        const [seccionActiva, setSeccionActiva] = useState('Usuarios');

        // 2. Función Manejadora de Clic: Actualiza el estado con el ID de la sección.
        const handleMenuClick = (targetId) => {
            setSeccionActiva(targetId);
        };
        
        // Lista de botones del menú
        const menuOpciones = [
            { id: 'Usuarios', texto: 'USUARIOS' },
            { id: 'Computadoras', texto: 'COMPUTADORAS' },
            { id: 'Seguridad', texto: 'SEGURIDAD' },
            { id: 'Localizacion', texto: 'LOCALIZACIÓN' },
        ];
        
        // 3. Renderizado Condicional del Contenido de la Sección (Opcional, pero más limpio en React)
        const SeccionContenido = () => {
            // En React, el renderizado condicional con estado es más limpio que usar 'style="display:none"'
            switch (seccionActiva) {
                case 'Usuarios':
                    return (
                        <section id="Usuarios" className="Seccion">
                            <h2>Usuarios</h2>
                            <button>hola mundo, soy usuarios</button>
                            {/* Aquí va el contenido específico de Usuarios */}
                        </section>
                    );
                case 'Computadoras':
                    return (
                        <section id="Computadoras" className="Seccion">
                            <h2>Computadoras</h2>
                            <button>hola mundo, soy COmputadoras</button>
                            {/* Aquí va el contenido específico de Computadoras */}
                        </section>
                    );
                case 'Seguridad':
                    return (
                        <section id="Seguridad" className="Seccion">
                            <h2>Seguridad</h2>
                            <button>hola mundo, soy Seguridad</button>
                            {/* Aquí va el contenido específico de Seguridad */}
                        </section>
                    );
                case 'Localizacion':
                    return (
                        // Asegúrate de que el ID aquí sea 'Localizacion', no 'Lozalizacion' como en tu original.
                        <section id="Localizacion" className="Seccion"> 
                            <h2>Localización</h2>
                            <button>hola mundo, soy Localizacion</button>
                            {/* Aquí va el contenido específico de Localización */}
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
                    <input 
                    type="text" 
                    name="Usuario" 
                    id="Usuario" 
                    className="BarraBusqueda"
                    placeholder="Buscar" />
                </div>
                <div >
                    <Link to="/">
                        <h3 className="CerrarSesion">Cerrar sesión</h3>
                    </Link>  
                </div>
            </header>
            <nav>
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
        </>
    }
    export default PaginaInventario