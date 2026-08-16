import { FaWhatsapp } from "react-icons/fa";
import "./PresentationCardMobile.css";

export function PresentationCardMobile() {
  return (
    <div className="content-information-mobile">
      <div className="content-information-body">
        <div className="information-header">
          <h1>Happy Winter </h1>
          <h2>Artigos de Inverno</h2>
        </div>
        <div className="information-container">
          <p> Aqueça seus dias com estilo, conforto e muito carinho</p>
          <img src="logo.png"></img>
          <div className="contact-button">
            <FaWhatsapp size={28} />
            <button>Fale conosco</button>
          </div>
        </div>
      </div>
    </div>
  );
}
