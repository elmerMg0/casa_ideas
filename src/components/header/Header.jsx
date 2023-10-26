import './header.css'

import image from '../../assets/img/logoCasaLaurel.jpeg'
import { useState } from 'react'
import { Navigation } from './navigation/Navigation'
export function Header({children}){
    const [activo, setActivo] = useState(false)
    const handleChange = () => {
        setActivo(!activo)
    }
    return(
        <>
            <header className="header">
                <section className='container header-content'>
                    <div className="header_logo">
                        <img src={image}/>
                    </div>
                    
                    <Navigation activo={activo} setActivo={setActivo}/>
                    
                    <div className='header-title'>
                        <h4>Casas Laurel</h4>
                        <div className={`hamburguesa ${activo ? 'activo': ''}`} onClick={handleChange}>
                            <div className="linea linea1"></div>
                            <div className="linea linea2"></div>
                            <div className="linea linea3"></div>
                        </div>
                    </div>
                </section>
            </header>
        {children}
        </>
    )
}   