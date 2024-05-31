import React, {useState} from "react"
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className='logotipos'>
                <img src="../src/assets/logo.png" alt="Logo" width={145} height={85}/>
                {/* <img src={logo} alt="Logo" className='logo'/> */}
            </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> APP QR</a>
                <a href="#"> SOPORTE</a>
                <a href="#"> INFORMACIÓN INSTITUCIONAL</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar