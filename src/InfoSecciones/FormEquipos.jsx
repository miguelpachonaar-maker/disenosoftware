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
                        <div className='TituloSecciones2'>
                            <img src="https://static.vecteezy.com/system/resources/previews/010/882/188/non_2x/monitor-screen-computer-icon-display-electronic-flat-device-equipment-office-business-pc-front-view-vector.jpg" alt="" />
                            <h2>Registro equipos</h2>
                        </div>
                        <div className='DivTodoForm'>
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputForm">ID PC</label>
                                <input 
                                type="text" 
                                className="CamposFormEquipos"
                                placeholder='EQING01'
                                />
                            </div>
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputForm">Serial</label>
                                <input 
                                type="text" 
                                className="CamposFormEquipos"
                                placeholder='MAC85924'
                                />
                            </div>
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputForm">SKU</label>
                                <input 
                                type="text"  
                                className="CamposFormEquipos"
                                placeholder='MAC-MBP16'
                                />
                            </div>      
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputForm">Descripción</label>
                                <input
                                type="text"  
                                className="CamposFormEquipos"
                                placeholder='Descripción'
                                />
                            </div>
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputForm">Usuario</label>
                                <input 
                                type="text" 
                                className="CamposFormEquipos"
                                placeholder='Sebastian Lara'
                                />
                            </div>     
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputForm">Contraseña</label>
                                <input 
                                type="password"
                                className="CamposFormEquipos"
                                placeholder='********'
                                />
                            </div>
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputForm">Área</label>
                                <input 
                                type="text"
                                className="CamposFormEquipos"
                                placeholder='Ingeniería'
                                />
                            </div>      
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputForm">Usuario AnyDesk</label>
                                <input 
                                type="number" 
                                className="CamposFormEquipos"
                                placeholder='238 878 456'
                                />
                            </div>
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputEntregas">Estado</label>
                                <select className="CamposFormEntregas">
                                    <option value="" disabled selected> Elige una opción</option>
                                    <option value="Entrega">Activo</option>
                                    <option value="Devolucion">Inactivo</option>
                                    <option value="Devolucion">Reparación</option>
                                </select>
                            </div>
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
                    </section>
                );
            case 'EntregasYDevoluciones':
                return (
                    <section id="EntregasYDevoluciones">
                        <div className='TituloSecciones2'>
                            <img src="https://cdn-icons-png.flaticon.com/512/13330/13330701.png" alt="" />
                            <h2>Entregas y devoluciones</h2>
                        </div>
                        <div className='DivTodoForm'>
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputEntregas">Gestión</label>
                                <select name="EntregaDevolucion" id="EntregaDevolucion" className="CamposFormEntregas">
                                    <option value="" disabled selected> Elige una opción</option>
                                    <option value="Entrega">Entrega</option>
                                    <option value="Devolucion">Devolucion</option>
                                </select>
                            </div>
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputEntregas">Código Gestión</label>
                                <input 
                                type="text"
                                className="CamposFormEntregas"
                                placeholder='IN001'
                                />
                            </div>
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputEntregas">Fecha IN/OUT</label>
                                <input 
                                type="date" 
                                className="CamposFormEntregas"
                                placeholder='DD/MM/AAAA'
                                />
                            </div>      
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputEntregas">Cedula Usuario</label>
                                <input
                                type="number" 
                                name="Usuario" 
                                id="Usuario" 
                                className="CamposFormEntregas"
                                placeholder='1234567890'
                                />
                            </div>
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputEntregas">ID PC</label>
                                <input 
                                type="text" 
                                name="Usuario" 
                                id="Usuario" 
                                className="CamposFormEntregas"
                                placeholder='EQING01n'
                                />
                            </div>     
                            <div className='DivCamposFormEquipos'>
                                <label class="EtiquetaInputEntregas">Documento</label>
                                <input 
                                type="file" 
                                accept=".pdf, .docx"                                
                                />
                            </div>
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