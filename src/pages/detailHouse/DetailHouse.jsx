import { useContext, useEffect, useState } from "react";
import { Dimensions } from "../../components/detailHouse/Dimensions";
import { Information } from "../../components/detailHouse/Information";
import { SliceImage } from "../../components/detailHouse/SliceImage";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { MyContext } from "../../context/MyContext";
import housesJson from '../../data/houses.json'
import './detailHome.css'

export function DetailHouse(){
    const { nameHouse } = useContext(MyContext);
    const [infoHouse, setInfoHouse] = useState(null)
    useEffect(() => {
        /* fILTRAR de un archiov  */

        const newData = Object.values(housesJson);
        setInfoHouse( newData.find(house => house.nombre = nameHouse));
    },[nameHouse])

    console.log(nameHouse);

    if(infoHouse && Object.keys(infoHouse).length === 0)return
    return <>
    <Header/>
     <section className="container">
        <h4 className="title">{nameHouse}</h4>
        <SliceImage images={infoHouse?.detalles?.images}/>
        <Dimensions dimen={infoHouse?.detalles?.dimensiones}/>
        <Information info={infoHouse?.detalles?.informacion}/>
    </section>
    <Footer/>
    </>
}