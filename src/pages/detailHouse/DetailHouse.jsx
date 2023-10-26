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
    const { nameHouse, setNameHouse } = useContext(MyContext);
    const [infoHouse, setInfoHouse] = useState(null)
    useEffect(() => {
        /* fILTRAR de un archiov  */

        const newData = structuredClone(Object.values(housesJson));
        setInfoHouse( newData.find(house => house.nombre === nameHouse));
        /* return () => {
            setInfoHouse(null)
            setNameHouse('')
        } */
    },[nameHouse])


    if(infoHouse && Object.keys(infoHouse).length === 0)return
    return <>
    <Header/>
     <section className="container detailhouse">
        <h4 className="title">{nameHouse}</h4>
        <section className="detail-house-main">
            <SliceImage images={infoHouse?.detalles?.images}/>
            <div>
                <h4 className="subtitle">Caracteristicas del Producto</h4>
                <Dimensions dimen={infoHouse?.detalles?.dimensiones}/>
            </div>
        </section>
        <Information info={infoHouse?.detalles?.informacion}/>
    </section>
    <Footer/>
    </>
}