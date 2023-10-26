import { colors } from '../../utilities/constans'
import { FacebookIcon, InstagramIcon, WhatsappIcon } from '../icons/Icons'
import './footer.css'
export function Footer(){
    return(
        <footer id='contacto' className='footer'>
            <section className='footer-header container'>
                <ul className='footer-social'>
                    <a href="https://api.whatsapp.com/send?phone=59174369570&text=Hola,%20más%20información%20por%20favor.
" target='_blank' className='footer-social__icon'>
                        <FacebookIcon color={colors.GRISSOFT}/>
                    </a>
                    <a className='footer-social__icon'>
                        <InstagramIcon color={colors.GRISSOFT}/>
                    </a>
                    <a className='footer-social__icon'>
                        <WhatsappIcon color={colors.GRISSOFT}/>
                    </a>
                </ul>
                <div className='footer-contact'>
                    <span>Llamanos</span>                    
                    <a href="https://api.whatsapp.com/send?phone=59174369570&text=Hola,%20más%20información%20por%20favor." rel='dhfdf' target='_blank'>+591 74369570</a>                    
                </div>
            </section>
        </footer>
    )
}