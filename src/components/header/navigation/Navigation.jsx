import { Link, useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../../models/routes"
export function Navigation({activo, setActivo}){

    const navigate = useNavigate();
    const handleChangePath = () => {
        setActivo(false)
        //navigate()
    }

    return <section className={`navigation ${activo ? "show": ''}`}>
            <ul>
                <li>
                    <Link to={PublicRoutes.PATH}>Home</Link>
                </li>
                <li onClick={handleChangePath}>
                    <a  href="#ventajas">Ventajas</a>
                </li>
                <li>
                    <a onClick={handleChangePath} href="#contacto">Contacto</a>
                </li>
            </ul>
    </section>  
}