import { colors } from '../../utilities/constans'
import { FacebookIcon, InstagramIcon, WhatsappIcon } from '../icons/Icons'
import './footer.css'
export function Footer(){
    return(
        <footer className='footer'>
            <section className='footer-header'>
                <ul className='footer-social'>
                    <div className='footer-social__icon'>
                        <FacebookIcon color={colors.GRISSOFT}/>
                    </div>
                    <div className='footer-social__icon'>
                        <InstagramIcon color={colors.GRISSOFT}/>
                    </div>
                    <div className='footer-social__icon'>
                        <WhatsappIcon color={colors.GRISSOFT}/>
                    </div>
                </ul>
                <div className='footer-contact'>
                    <span>Llamanos</span>                    
                    <span>+591 76457851</span>                    
                </div>
            </section>
        </footer>
    )
}