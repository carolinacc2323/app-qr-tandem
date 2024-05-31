import './Footer.css'
import logoblanco from '../assets/logoblanco.png';
import inst from '../assets/inst.png'
import tiktok from '../assets/tiktok.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='logotipos'>
            <img src={logoblanco} alt="logo blanco" className='logoblanco'/>
            <div className='RRSS'>
            <img src={inst} alt="logo Instagram" className='logo'/>
            <img src={tiktok} alt="logo Tiktok" className='logo'/>
            <img src={twitter} alt="logo twitter" className='logo' />
            <img src={youtube} alt="logo youtube" className='logo' />
            </div>
        </div>
        <div className='enlaces'>
        <a href="/">Política de Privacidad</a>
        <a href="/">Cookies</a>
        <a href="/">Accesibilidad</a>
        <a href="/">Aviso legal</a>
        </div>
    </footer>
  )
}

export default Footer
