import '../Estilos/Estilos.css'

const FormUsuarios = () => {
    return <> 
        <div className='TituloSecciones2'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/049/128/320/small/a-3d-ui-contact-address-book-icon-png.png" alt="" />
            <h2>Registro Usuarios</h2>
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
    </>
}
export default FormUsuarios