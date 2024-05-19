import React from 'react';
import '../../CSS/Menu.css'
import "../../CSS/App.css"
import { FaHome, FaUser, FaBriefcase, FaSuitcase, FaPhone} from 'react-icons/fa';
import { LuBrainCircuit } from "react-icons/lu";


const menuItems = [
  
    
    { section: 'Inicio', icon: <FaHome />, id: 'inicio' },
    { section: 'Sobre mí', icon: <FaUser />, id: 'sobre-mi' },
    { section: 'Mis servicios', icon: <FaBriefcase />, id: 'mis-servicios' },
    { section: 'Mis habilidades', icon: <LuBrainCircuit /> , id: 'mis-habilidades'},
    { section: 'Mis proyectos', icon: <FaSuitcase />, id: 'mis-proyectos' },
    { section: 'Contáctame', icon: <FaPhone />, id: 'contactame' },
  ];
  

  function Menu() {
    return (
        <div className="input">
            {menuItems.map((item, index) => (
                <a key={index} href={`#${item.id}`} className="botonMenu">
                {item.icon}
                <span className="menu-text">{item.section}</span>
              </a>
              
            ))}
        </div>
    );
}


export default Menu;
