import '../Estilos/Estilos.css'

const FormAdmin = () => {
    return <>
        <div className='TituloSecciones2'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/049/128/320/small/a-3d-ui-contact-address-book-icon-png.png" alt="" />
            <h2>Registro Usuarios de soporte</h2>
        </div>        
        <div className='DivTodoForm'>
            <div className='DivCamposFormEquipos'>
                <label class="EtiquetaInputForm">Usuario</label>
                <input 
                type="number" 
                className="CamposFormEquipos"
                placeholder='101010'
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
        </div>
        <br />
        <div className="BotonesFormEquipos">
            <button type="submit" className="BotonGuardar">
                Guardar
            </button>
        </div>
    </>

}
export default FormAdmin