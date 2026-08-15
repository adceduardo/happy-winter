import "./Content.css";
import { FaHeart } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { FaSnowman } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export function Content() {
  return (
    <>
      <section className="presentation-section">
        <article className="presentation-main">
          <div className="background-container"></div>
          <div className="content">
            <div className="content-information">
              <img src="logo.png"></img>
              <div className="content-information-body">
                <h1>Happy Winter </h1>
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
          </div>
        </article>

        <article className="presentation-footer">
          <ul>
            <li>
              <FaRegSnowflake size={28} />
              <span>Feito à mão</span>
            </li>

            <li>
              <FaHeart size={28} />
              <span>Feito com amor</span>
            </li>

            <li>
              <FaSnowman size={30} />
              <span>Conforto que abraça</span>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
