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

    const handleContact = () => {
        window.open(`https://api.whatsapp.com/send?phone=59174369570&text=Hola,%20más%20información%20por%20favor%20sobre%20${house.nombre}`, `_blank`)
    }
    return(
        <section className="card-house" >
            <div className="card-house-img">
                <img src={house.img} />
            </div>
            <h5> {house.nombre} </h5>
            <button className="card-house__contact" onClick={handleContact}>Contactar</button>
            <button className="card-house__details" onClick={handleShowDetail} >Ver Detalles</button>
        </section>
    )
}