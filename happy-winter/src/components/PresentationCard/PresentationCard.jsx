import { FaWhatsapp } from "react-icons/fa";
import "./PresentationCard.css";
import { useState } from "react";

export function PresentationCard() {
  const [rotate, setRotate] = useState(false)
  
  return (
    <div className="content-information">
      <img src="logo.png" className={rotate ? "rotate" : ""} onClick={() => setRotate(!rotate)}></img>
      <div className="content-information-body">
        <h1>Happy Winter</h1>
        <div>
          <h2>Artigos de Inverno</h2>
          <p> Aqueça seus dias com estilo, conforto e muito carinho</p>
        </div>
      </div>
      <div className="contact-button">
        <FaWhatsapp size={28} />
        <button>Fale conosco</button>
      </div>
    </div>
  );
}
