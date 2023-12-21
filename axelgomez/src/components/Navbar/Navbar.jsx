import "./Navbar.css";
const axel = require("../../utils/axelpng2.png");

const Navbar = () => {

    function showSidebar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }

    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }
    return(
        <nav>
             <ul className="sidebar">
                <li onClick={hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="white"/></svg></a></li>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#trabajos">Trabajos</a></li>
                <li><a href="#about">Sobre mi</a></li>
                <li><a href="#contact">Contactame</a></li>
            </ul>
            <ul>
                <li><a href="#inicio"><img src={axel} alt="Axel" style={{marginTop: "32px"}}></img></a></li>
                <li className="hideOnMobile"><a href="#inicio">Inico</a></li>
                <li className="hideOnMobile"><a href="#trabajos">Trabajos</a></li>
                <li className="hideOnMobile"><a href="#tecnologias">Conocimientos</a></li>
                <li className="hideOnMobile"><a href="#contact">Contactame</a></li>
                <li className="menu-button" onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" fill="white"/></svg></a></li>
            </ul>
        </nav>
    )
}


export default Navbar;