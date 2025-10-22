import '../Estilos/Estilos.css'

const ListaUsuarios = () => {
return <>
    <div className='DivTablaUsuarios'>
        <table >      
            <thead>
                <br />
                <tr>
                    <th>Cedula</th>
                    <th>Nombres</th>
                    <th>Cargo</th>
                    <th>Contraseña</th>
                    <th>Celular</th>
                    <th>Correo</th>
                    <th>ID PC</th>
                    <th>Área</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>117001</td>
                    <td>Sebastian Lara</td>
                    <td>Ingeniero</td>
                    <td>abcdef</td>
                    <td>3221233221</td>
                    <td>SebastianLara@foltec.com</td>
                    <td>EQING01</td>
                    <td>Ingeniería</td>
                </tr>
                <tr>
                    <td>117002</td>
                    <td>Miguel Pachon</td>
                    <td>Ingeniero</td>
                    <td>12345</td>
                    <td>3003841926</td>
                    <td>MiguelPachon@foltec.com</td>
                    <td>EQING02</td>
                    <td>Ingeniería</td>
                </tr>
                <tr>
                    <td>117003</td>
                    <td>Alan Reyes</td>
                    <td>Ingeniero</td>
                    <td>!"#$%</td>
                    <td>3217359922</td>
                    <td>Alanreyes@foltec.com</td>
                    <td>EQING03</td>
                    <td>Ingeniería</td>
                </tr>
                <tr>
                    <td>118001</td>
                    <td>Juliana Bogotá</td>
                    <td>Contadora</td>
                    <td>12ea5b</td>
                    <td>3225094022</td>
                    <td>juliana@foltec.com</td>
                    <td>EQFIN01</td>
                    <td>Financiera</td>
                </tr>
                <tr>
                    <td>117001</td>
                    <td>Angela Perez</td>
                    <td>Auxiliar contable</td>
                    <td>zxcvb</td>
                    <td>3224213300</td>
                    <td>AngelaPerez@foltec.com</td>
                    <td>EQFIN02</td>
                    <td>Financiera</td>
                </tr>
                <tr>
                    <td>118001</td>
                    <td>Emma Monsalve</td>
                    <td>Coordinadora logística</td>
                    <td>zxcvb</td>
                    <td>3221233221</td>
                    <td>EmmaMonsalve@foltec.com</td>
                    <td>EQLOG01</td>
                    <td>Logística</td>
                </tr>
                <tr>
                    <td>118002</td>
                    <td>Julian Blanco</td>
                    <td>Auxiliar logístico</td>
                    <td>zxcvb</td>
                    <td>3221451233</td>
                    <td>JulianBlanco@foltec.com</td>
                    <td>EQLOG01</td>
                    <td>Logística</td>
                </tr>
                <tr>
                    <td>119001</td>
                    <td>Carlos Segura</td>
                    <td>Director comercial</td>
                    <td>asdfg</td>
                    <td>3124561230</td>
                    <td>CarlosSegura@foltec.com</td>
                    <td>EQCOM01</td>
                    <td>Comercial</td>
                </tr>
                <tr>
                    <td>119002</td>
                    <td>Adriana Barragán</td>
                    <td>Asesora</td>
                    <td>lkjhgg</td>
                    <td>3004567021</td>
                    <td>AdrianaBarragan@foltec.com</td>
                    <td>EQCOM02</td>
                    <td>Comercial</td>
                </tr>
                <tr>
                    <td>1111001</td>
                    <td>Enrique Pineda</td>
                    <td>Gerente</td>
                    <td>123454</td>
                    <td>3208907744</td>
                    <td>EnriquePineda@foltec.com</td>
                    <td>EQGER01</td>
                    <td>Gerencia</td>
                </tr>
            </tbody>

            <tfoot>
                <br />
                <tr>
                    <td colSpan='2'>Total de registros</td>
                    <td>10</td>
                </tr>
            </tfoot>
        </table>
    </div>
</> 
}
export default ListaUsuarios