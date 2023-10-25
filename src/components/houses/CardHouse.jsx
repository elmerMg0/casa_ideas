import { useContext } from "react";
import { useNavigate } from "react-router"
import { PublicRoutes } from "../../models/routes";

import { MyContext } from "../../context/MyContext";

export function CardHouse ({house={nombre: '', img: '', link: ''}}){
    const navigate = useNavigate();
    const {setNameHouse} = useContext(MyContext)
    /* Save name house and redirect */
    const handleShowDetail = () => {
        setNameHouse(house.nombre);
        navigate(`/${PublicRoutes.DETAILS}`)
        window.localStorage.setItem('namehouse', house.nombre)
    }
    return(
        <section className="card-house" onClick={handleShowDetail}>
            <div className="card-house-img">
                <img src={house.img} />
            </div>
            <p> {house.nombre} </p>
            <a >Ver mas</a>
        </section>
    )
}