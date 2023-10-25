import './header.css'

import image from '../../assets/img/imageCasaIdeas.jpg'
import { useState } from 'react'
export function Header(){
    const [activo, setActivo] = useState(false)
    
    const handleChange = () => {
        setActivo(!activo)
    }
    return(
        <header className="header">
            <section className='container header-content'>
                <div className="header_logo">
                    <img src={image}/>
                </div>
                <div className='header-title'>
                    <h4>Casa ideas</h4>
                    <div className={`hamburguesa ${activo ? 'activo': ''}`} onClick={handleChange}>
                        <div className="linea linea1"></div>
                        <div className="linea linea2"></div>
                        <div className="linea linea3"></div>
                    </div>
                 </div>
            </section>
        </header>
    )
}   