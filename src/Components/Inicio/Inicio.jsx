import React from 'react';
import '../../CSS/Inicio/Inicio.css';
import '../../CSS/Inicio/Botones.css';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiSaveDown1 } from "react-icons/ci";

export default function Inicio() {
  return (
    <div id="inicio" className="inicio-section">
      <div className="contenido">
        <h2 className="textInicio">Hola, Yo soy</h2>
        <h1 className="Nombre">Karolina Acosta</h1>
        <h2 className="profesion">Desarrolladora Web Full Stack</h2>
        <div className="botones">
      <button className="descargar" onClick={descargarCV}>
        <CiSaveDown1 className="mysvg" />
        <span className="texto">Descargar CV</span>
      </button>
      <button className="mensaje" onClick={enviarMensaje}>
        <IoChatboxEllipsesOutline className="mysvg" />
        <span className="texto">Mensaje</span>
      </button>
    </div>
      </div>
      <div>
        <img className="imagen" src="../docs/FotoKarolina.jpg" alt="Karolina Acosta" />
      </div>
    </div>
  );
}


function descargarCV() {
   // URL del archivo PDF
   const url = "../docs/CV_KarolinaDesarrolladoraWeb.pdf";

   // Crear un elemento <a> temporal
   const link = document.createElement('a');
   link.href = url;
   link.download = 'CV_KarolinaAcosta';
 
   // Simular un clic en el enlace para iniciar la descarga
   document.body.appendChild(link);
   link.click();
 
   // Limpiar el elemento <a> temporal
   document.body.removeChild(link);
}

function enviarMensaje() {
    const mensaje = encodeURIComponent("Hola Karolina, ¿Como estas? Me llamo ________, he visto tu Portafolio y Curriculum y quiero saber mas de ti.");
    const numeroTelefono = "+573219309832"; // Número de teléfono con el código de país (Colombia)
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}`;
    window.open(url, '_blank');
}
