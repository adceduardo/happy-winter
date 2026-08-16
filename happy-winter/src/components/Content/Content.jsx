import "./Content.css";
import { FaHeart } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { FaSnowman } from "react-icons/fa6";
import { PresentationCard } from "../PresentationCard/PresentationCard";
import { PresentationCardMobile } from "../PresentationCardMobile/PresentationCardMobile";

export function Content({ isMobile }) {
  return (
    <>
      <section className="presentation-section">
        <article className="presentation-main">
          <div className="background-container"></div>
          <div className="content">
            {isMobile ? <PresentationCardMobile /> : <PresentationCard />}
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
              <FaSnowman size={30} style={{minWidth: "24px"}}/>
              <span>Conforto que abraça</span>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
