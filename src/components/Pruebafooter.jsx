import './Pruebafooter.css'
import logoblanco from '../assets/logoblanco.png'
import ministerio from '../assets/ministerio.png'
import sepe from '../assets/sepe.png'
import inst from '../assets/inst.png'
import tiktok from '../assets/tiktok.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
const Pooter = () => {
    return (
    <footer>
        {/* <div className='logoblanco'>
        <img src={logoblanco} alt="logo blanco" width={100} height={100}/>
        </div> */}
        <div className="footer-container">
            <div className="footer-left">
                <img src={ministerio} alt="Logo Ministerio" className='ministerio'/>
            </div>
            <div className='logotipos'>
                <div className='RRSS'>
                <a href='https://www.instagram.com/'><img src={inst} alt="logo Instagram" className='logo'/></a>
                <a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des"><img src={tiktok} alt="logo Tiktok" className='logo'/></a>
                <a href="https://x.com/?lang=es"><img src={twitter} alt="logo twitter" className='logo' /></a>
                <a href="https://www.youtube.com/channel/UC1aAN4rDbKBeFmwKMBc_2dA/videos?view=0"><img src={youtube} alt="logo youtube" className='logo' /></a>
                </div>
            </div>
        </div>
        <div className='enlaces'>
                <a href="https://www.patrimonionacional.es/politica-de-privacidad">Política de Privacidad</a>
                <a href="https://www.patrimonionacional.es/politica-de-cookies">Cookies</a>
                <a href="https://www.patrimonionacional.es/accesibilidad">Accesibilidad</a>
                <a href="https://www.patrimonionacional.es/aviso-legal">Aviso legal</a>
            </div>
        <div className="footer-bottom">
            <img src={sepe} className='sepe' alt='Sepe Logo' />
        </div>
    </footer>
    );
};

export default Pooter