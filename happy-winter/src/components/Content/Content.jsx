import './Content.css';
import { FaHands } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { GiWinterHat } from 'react-icons/gi';

export function Content() {
  return (
    <section className="presentation-container">
      <article className="presentation-main">
        <div className="background-container"></div>
        <div className="content">
          <img src="logo.png"></img>
          <div>
            <h1>Happy Winter </h1>
            <h2>Artigos de Inverno</h2>
            <p> Aqueça seus dias com estilo, conforto e muito carinho</p>
          </div>
        </div>
      </article>

      <article className="">
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
