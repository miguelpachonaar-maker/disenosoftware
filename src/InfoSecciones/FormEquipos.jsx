import '../Estilos/Estilos.css'
import React, { useState, useEffect } from 'react';

    const API_URL = 'http://localhost:4000/api/registros';
    
    const FormEquipos = () => {
        const [formData, setFormData] = useState({
            IDPc: '',
            MAC: '',
            Serial: '',
            Descripcion: '',
            Usuario: '',
            Contraseña: '',
            Area: '',
            UsuarioAnyDesk: '',
            Estado: ''
        });
    
        const [equipos, setEquipos] = useState([]);
    
        // Función genérica para actualizar el estado cuando cualquier input cambia
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
    
                if (!response.ok) {
                    throw new Error(`Error al guardar: ${response.statusText}`);
                }
    
                const data = await response.json();
                alert('Equipo guardado con éxito: ' + data._id);
                
                // Opcional: Limpiar el formulario y recargar la lista
                setFormData({
                    IDPc: '', MAC: '', Serial: '', Descripcion: '', Usuario: '',
                    Contraseña: '', Area: '', UsuarioAnyDesk: '', Estado: ''
                });
                fetchEquipos(); // Recargar la lista para visualizar el nuevo usuario
                
            } catch (error) {
                console.error('Error al guardar el equipo:', error);
                alert('Error al guardar el equipo.');
            }
        };
    
        // Función para cargar los datos (Buscar o Visualizar)
        const fetchEquipos = async () => {
            try {
                const response = await fetch(API_URL); // Asume que GET /api/usuarios devuelve todos
                
                if (!response.ok) {
                    throw new Error(`Error al buscar equipos: ${response.statusText}`);
                }
                
                const data = await response.json();
                setEquipos(data); // Almacena los usuarios en el estado
                
            } catch (error) {
                console.error('Error al obtener equipos:', error);
                alert('Error al cargar la lista de equipos');
            }
        };
        
        // 5. Cargar los usuarios al montar el componente para visualización
        useEffect(() => {
            fetchEquipos();
        }, []);
    
    
    return <> 
        <form onSubmit={handleSubmit}> 
            <div className='TituloSecciones'>
                <div className='EstiloTitulos'>
                    <img src="https://static.vecteezy.com/system/resources/previews/010/882/188/non_2x/monitor-screen-computer-icon-display-electronic-flat-device-equipment-office-business-pc-front-view-vector.jpg" alt="" />
                    <h2>Formulario de registro</h2>
                </div>
            </div>
            <div className='DivTodoForm'>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">ID PC</label>
                    <input 
                    type="text"
                    name='IDPc' 
                    className="CamposFormEquipos"
                    placeholder='EQING01'
                    value={formData.IDPc}
                    onChange={handleChange}
                    />
                </div>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">MAC</label>
                    <input 
                    type="text"
                    name='MAC' 
                    className="CamposFormEquipos"
                    placeholder='f0:34:56:bd:32:t3'
                    value={formData.MAC}
                    onChange={handleChange}
                    />
                </div>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Serial</label>
                    <input 
                    type="text"
                    name='Serial' 
                    className="CamposFormEquipos"
                    placeholder='SN'
                    value={formData.Serial}
                    onChange={handleChange}
                    />
                </div>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Descripción</label>
                    <input 
                    type="text"
                    name='Descripcion' 
                    className="CamposFormEquipos"
                    placeholder='...'
                    value={formData.Descripcion}
                    onChange={handleChange}
                    />
                </div>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Usuario</label>
                    <input 
                    type="text"
                    name='Usuario' 
                    className="CamposFormEquipos"
                    placeholder='101010'
                    value={formData.Usuario}
                    onChange={handleChange}
                    />
                </div>      
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Contraseña</label>
                    <input 
                    type="password"
                    name='Contraseña' 
                    className="CamposFormEquipos"
                    placeholder='* * * * *'
                    value={formData.Contraseña}
                    onChange={handleChange}
                    />
                </div>
                <div className='DivCamposFormEquipos'>
                    <select
                        className="CamposFormEntregas"
                        name='Area'
                        value={formData.Area}
                        onChange={handleChange}
                    >
                        <option value="" disabled selected> Elige un Área</option>
                        <option value="Ingeniería">Ingeniería</option>
                        <option value="Administracion">Administración</option>
                        <option value="Compras">Compras</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Ventas">Ventas</option>
                        <option value="Logistica">Logística</option>
                        <option value="Compras">RRHH</option>
                    </select>
                </div>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Usuario AnyDesk</label>
                    <input 
                    type="number"
                    name='UsuarioAnyDesk' 
                    className="CamposFormEquipos"
                    placeholder='238 975 010'
                    value={formData.UsuarioAnyDesk}
                    onChange={handleChange}
                    />
                </div>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputEntregas">Estado</label>
                    <select 
                        className="CamposFormEntregas"
                        name='Estado'
                        value={formData.Estado}
                        onChange={handleChange}
                    >
                        <option value="" disabled selected> Elige una opción</option>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                        <option value="Reparacion">Reparación</option>
                    </select>
                </div>
            </div>     
            <div className="BotonesFormEquipos">
                <button type="submit" className="BotonGuardar">
                    Guardar
                </button>
                <button type="submit" className="BotonGuardar">
                    Buscar
                </button>
            </div>

            {/*Tabla registro EQUIPOS*/}
            <div className='TituloSecciones'>
                <div className='EstiloTitulos'>
                    <h2>Registro de equipos</h2>
                </div>
            </div>
            <div>
                <input 
                type="text" 
                className="BarraBusqueda"
                placeholder="Buscar..."
                />
            </div>
            {equipos.length > 0 ? (
                <div className='DivTablaUsuarios'>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>ID Pc</th>
                                <th>MAC</th>
                                <th>Serial</th>
                                <th>Descripción</th>
                                <th>Usuario</th>
                                <th>Contraseña</th>
                                <th>Area</th>
                                <th>Usuario AnyDesk</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {equipos.map((equipo) => (
                                <tr key={equipo._id}>
                                    <td>{equipo.IDPc}</td>
                                    <td>{equipo.MAC}</td>
                                    <td>{equipo.Serial}</td>
                                    <td>{equipo.Descripcion}</td>
                                    <td>{equipo.Usuario}</td>
                                    <td>{equipo.Contraseña}</td>
                                    <td>{equipo.Area}</td>
                                    <td>{equipo.UsuarioAnyDesk}</td>
                                    <td>{equipo.Estado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                    <h2>No hay usuarios registrados aún.</h2>
                
            )}
        </form>
        <div className='Separador'></div>
        {/*Entregas y devoluciones*/}
        <div className='TituloSecciones'>
            <div className='EstiloTitulos'>
                <img src="https://cdn-icons-png.flaticon.com/512/13330/13330701.png" alt="" />
                <h2>Entregas y devoluciones</h2>
            </div>
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
            <div className="BotonesFormEquipos">
                <button type="submit" className="BotonGuardar">
                    Guardar
                </button>
                <button type="submit" className="BotonGuardar">
                    Buscar
                </button>
            </div>
        </div>

        {/*Tabla registro ENTREGAS Y DEVOLUCIONES*/}
    </>
}
export default FormEquipos