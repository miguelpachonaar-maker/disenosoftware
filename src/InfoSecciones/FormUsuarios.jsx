import '../Estilos/Estilos.css'
import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:4000/api/usuarios';

const FormUsuarios = () => {
    const [formData, setFormData] = useState({
        NombresApellidos: '',
        TipoDocumento: '',
        NumeroDocumento: '',
        Contacto: '',
        Correo: '',
        Area: '',
        Cargo: '',
        Usuario: ''
    });

    const [usuarios, setUsuarios] = useState([]);

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
            alert('Usuario guardado con éxito: ' + data._id);
            
            // Opcional: Limpiar el formulario y recargar la lista
            setFormData({
                NombresApellidos: '', TipoDocumento: '', NumeroDocumento: '', Contacto: '', Correo: '',
                Area: '', Cargo: '', Usuario: ''
            });
            fetchUsuarios(); // Recargar la lista para visualizar el nuevo usuario
            
        } catch (error) {
            console.error('Error al guardar el usuario:', error);
            alert('Error al guardar el usuario.');
        }
    };

    // Función para cargar los datos (Buscar o Visualizar)
    const fetchUsuarios = async () => {
        try {
            const response = await fetch(API_URL); // Asume que GET /api/usuarios devuelve todos
            
            if (!response.ok) {
                throw new Error(`Error al buscar usuarios: ${response.statusText}`);
            }
            
            const data = await response.json();
            setUsuarios(data); // Almacena los usuarios en el estado
            
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            alert('Error al cargar la lista de usuarios.');
        }
    };
    
    // 5. Cargar los usuarios al montar el componente para visualización
    useEffect(() => {
        fetchUsuarios();
    }, []);
 
        
    
    return <>
        <form onSubmit={handleSubmit}>    
            <div className='TituloSecciones'>
                <div className='EstiloTitulos'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3200/3200751.png" alt="" />
                    <h2>Registro Usuarios</h2>
                </div>
            </div>        
            <div className='DivTodoForm'>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Nombres y Apellidos</label>
                    <input 
                    type="text"
                    name='NombresApellidos' 
                    className="CamposFormEquipos"
                    placeholder='Nombres'
                    value={formData.NombresApellidos}
                    onChange={handleChange}
                    />
                </div>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Tipo de documento</label>
                    <input 
                    type="text"
                    name='TipoDocumento' 
                    className="CamposFormEquipos"
                    placeholder='CC / CE'
                    value={formData.TipoDocumento}
                    onChange={handleChange}
                    />
                </div>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Numero de documento</label>
                    <input 
                    type="number"
                    name='NumeroDocumento'  
                    className="CamposFormEquipos"
                    placeholder='1065738902'
                    value={formData.NumeroDocumento}
                    onChange={handleChange}
                    />
                </div>      
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Contacto</label>
                    <input
                    type="number"
                    name='Contacto'  
                    className="CamposFormEquipos"
                    placeholder='3201013344'
                    value={formData.Contacto}
                    onChange={handleChange}
                    />
                </div>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Correo</label>
                    <input 
                    type="email"
                    name='Correo' 
                    className="CamposFormEquipos"
                    placeholder='ejemplo@foltec.co'
                    value={formData.Correo}
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
                        <option value="Ingenieria">Ingeniería</option>
                        <option value="Administracion">Administración</option>
                        <option value="Compras">Compras</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Ventas">Ventas</option>
                        <option value="Logistica">Logística</option>
                        <option value="RRHH">RRHH</option>
                    </select>
                </div>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Cargo</label>
                    <input 
                    type="text"
                    name='Cargo' 
                    className="CamposFormEquipos"
                    placeholder='Coordinador TI'
                    value={formData.Cargo}
                    onChange={handleChange}
                    />
                </div>
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Usuario</label>
                    <input 
                    type="number"
                    name='Usuario'
                    className="CamposFormEquipos"
                    placeholder='101010'
                    value={formData.Usuario}
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="BotonesFormEquipos">
                <button type="submit" className="BotonGuardar">
                    Guardar
                </button>
                <button type="button" className="BotonGuardar" onClick={fetchUsuarios}>
                    Buscar
                </button>
            </div>
            <div className='TituloSecciones'>
                <div className='EstiloTitulos'>
                    <img src="https://static.vecteezy.com/system/resources/previews/010/882/188/non_2x/monitor-screen-computer-icon-display-electronic-flat-device-equipment-office-business-pc-front-view-vector.jpg" alt="" />
                    <h2>Lista de usuarios</h2>
                </div>
            </div>
            <div >
                <input 
                type="text" 
                className="BarraBusqueda"
                placeholder="Buscar..."
                />
            </div>
            {usuarios.length > 0 ? (
                <div className='DivTablaUsuarios'>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombres y Apellidos</th>
                                <th>Tipo de Documento</th>
                                <th>N° Documento</th>
                                <th>Contacto</th>
                                <th>Correo  </th>
                                <th>Área</th>
                                <th>Cargo</th>
                                <th>Usuario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.NombresApellidos}</td>
                                    <td>{user.TipoDocumento}</td>
                                    <td>{user.NumeroDocumento}</td>
                                    <td>{user.Contacto}</td>
                                    <td>{user.Correo}</td>
                                    <td>{user.Area}</td>
                                    <td>{user.Cargo}</td>
                                    <td>{user.Usuario}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No hay usuarios registrados aún.</p>
            )}
        </form>
    </>
}
export default FormUsuarios