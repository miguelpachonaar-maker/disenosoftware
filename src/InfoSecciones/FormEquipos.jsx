import '../Estilos/Estilos.css'
import React, { useState } from 'react';

const FormEquipos = () => {
    const [seccionActiva, setSeccionActiva] = useState('EntregaDevoluciones');

    // 2. Función Manejadora de Clic: Actualiza el estado con el ID de la sección.
    const handleMenuClick = (targetId) => {
        setSeccionActiva(targetId);
    };
    
    // Lista de botones del menú
    const menuOpciones = [
        { id: 'Formulario', texto: 'Formulario' },
        { id: 'EntregasYDevoluciones', texto: 'Entregas y Devoluciones' },
    ];
    
    // 3. Renderizado Condicional del Contenido de la Sección (Opcional, pero más limpio en React)
    const SeccionContenido = () => {
        // En React, el renderizado condicional con estado es más limpio que usar 'style="display:none"'
        switch (seccionActiva) {
            case 'Formulario':
                return (
                    <section id="Formulario">
                        <br />
                        <div>
                            <div className='DivCamposFormEquipos'>
                                <input 
                                type="text" 
                                name="Usuario" 
                                id="Usuario" 
                                className="CamposFormEquipos"
                                placeholder='ID PC'
                                />

                                <input 
                                type="text" 
                                name="Usuario" 
                                id="Usuario" 
                                className="CamposFormEquipos"
                                placeholder='Serial'
                                />

                                <input 
                                type="text" 
                                name="Usuario" 
                                id="Usuario" 
                                className="CamposFormEquipos"
                                placeholder='SKU'
                                />

                                <input 
                                type="text" 
                                name="Usuario" 
                                id="Usuario" 
                                className="CamposFormEquipos"
                                placeholder='Descripción'
                                />

                                <input 
                                type="text" 
                                name="Usuario" 
                                id="Usuario" 
                                className="CamposFormEquipos"
                                placeholder='Usuario asignado'
                                />

                                <input 
                                type="text" 
                                name="Usuario" 
                                id="Usuario" 
                                className="CamposFormEquipos"
                                placeholder='Contraseña'
                                />

                                <input 
                                type="text" 
                                name="Usuario" 
                                id="Usuario" 
                                className="CamposFormEquipos"
                                placeholder='Área'
                                />

                                <input 
                                type="text" 
                                name="Usuario" 
                                id="Usuario" 
                                className="CamposFormEquipos"
                                placeholder='Acceso remoto'
                                />

                                <input 
                                type="text" 
                                name="Usuario" 
                                id="Usuario" 
                                className="CamposFormEquipos"
                                placeholder='Estado'
                                />
                            </div>
                            <br />
                            <div className="BotonesFormEquipos">
                                <button type="submit" className="BotonGuardar">
                                    Guardar
                                </button>
                                <button type="submit" className="BotonGuardar">
                                    Modificar
                                </button>
                                <button type="submit" className="BotonEliminar">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </section>
                );
            case 'EntregasYDevoluciones':
                return (
                    <section id="EntregasYDevoluciones">
                        <h2>Soy entregas y Devoluciones</h2>
                    </section>
                );
            default:
            
            return null;
        }
    };
    
    return <>   
        <div className='EstiloFormEquipos'>
            {menuOpciones.map((opcion) => (
            <button 
                key={opcion.id}
                onClick={() => handleMenuClick(opcion.id)} 
                className={seccionActiva === opcion.id ? 'activo' : ''}
            >
                {opcion.texto}
            </button>
        ))}
        </div>
            
        <div id="ContenidoInventario">
                {SeccionContenido()} 
        </div>
    </>
}
export default FormEquipos