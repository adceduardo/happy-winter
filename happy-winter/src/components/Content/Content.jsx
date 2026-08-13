import "./Content.css";
import { FaHands } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GiWinterHat } from "react-icons/gi";

export function Content() {
  return (
    <section>
      <article>
        <h1>Happy Winter </h1>
        <h2>Artigos de Inverno</h2>
        <img src="logo.png"></img>
        <p> Aqueça seus dias com estilo, conforto e muito carinho</p>
      </article>

      <article>
        <ul>
          <li>
            <FaHands />
            <span>Feito à mão</span>
          </li>

          <li>
            <FaHeart />
            <span>Feito com amor</span>
          </li>

          <li>
            <GiWinterHat />
            <span>Conforto que abraça</span>
          </li>
        </ul>
      </article>
    </section>
  );
}
