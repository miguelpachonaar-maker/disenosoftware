import '../Estilos/Estilos.css'
import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:4000/api/registros';

const FormAdmin = () => {
    const [formData, setFormData] = useState({
            Usuario: '',
            Contraseña: ''
        });
    
        const [UsuariosAdmin, setUsuariosAdmin] = useState([]);
    
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
                const nuevoUsuarioSimulado = {
                ...formData,
                // Simulamos un ID de MongoDB (único y necesario para la 'key' de React)
                _id: Date.now().toString(), 
                };
    
                alert('Usuario guardado con éxito: ');
                setUsuariosAdmin(prevUsuariosAdmin => [...prevUsuariosAdmin, nuevoUsuarioSimulado]);
    
                // Opcional: Limpiar el formulario y recargar la lista
                setFormData({
                    Usuario: '', Contraseña: ''
                });
        };
    
        // Función para cargar los datos (Buscar o Visualizar)
        const fetchUsuariosAdmin = async () => {
            console.warn("ADVERTENCIA: La carga inicial de usuarios está desactivada o fallando debido a un backend inactivo.");
            setUsuariosAdmin([]);
        };
        
        // 5. Cargar los usuarios al montar el componente para visualización
        useEffect(() => {
            fetchUsuariosAdmin();
        }, []);

    return <>
        <form onSubmit={handleSubmit}> 
            <div className='TituloSecciones'>
                <div className='EstiloTitulos'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/049/128/320/small/a-3d-ui-contact-address-book-icon-png.png" alt="" />
                    <h2>Formulario Usuarios de soporte</h2>
                </div> 
            </div>
            <div className='DivTodoForm'>
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
                <div className='DivCamposFormEquipos'>
                    <label class="EtiquetaInputForm">Contraseña</label>
                    <input 
                    type="password"
                    name='Contraseña'
                    className="CamposFormEquipos"
                    placeholder='********'
                    value={formData.Contraseña}
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="BotonesFormEquipos">
                <button type="submit" className="BotonGuardar">
                    Guardar
                </button>
            </div>
            <div className='TituloSecciones'>
                    <div className='EstiloTitulos'>
                        <h2>Registro usuarios de soporte</h2>
                    </div>
                    <br />
                    <h4>En este espacio podrás visualizar todos los registros del formulario</h4>
                </div>
                {UsuariosAdmin.length > 0 ? (
                    <div className='DivTablaUsuarios'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Usuario</th>
                                    <th>Contraseña</th>
                                </tr>
                            </thead>
                            <tbody>
                                {UsuariosAdmin.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.Usuario}</td>
                                        <td>{user.Contraseña} </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p></p>
                )}
        </form>
    </>

}
export default FormAdmin