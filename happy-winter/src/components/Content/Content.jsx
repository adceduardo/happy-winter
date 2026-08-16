import "./Content.css";
import { FaHeart } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { FaSnowman } from "react-icons/fa6";
import { PresentationCard } from "../PresentationCard/PresentationCard";
import { PresentationCardMobile } from "../PresentationCardMobile/PresentationCardMobile";
import { useEffect, useRef } from "react";

export function Content({ isMobile }) {
  const presentation = useRef();
  const product = useRef();
  const elementsRef = [presentation, product];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("section-hide");
            entry.target.classList.add("section-show");
          }

          else{
            entry.target.classList.remove("section-show");
             entry.target.classList.add("section-hide");
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      },
    );

    elementsRef.forEach((element) => observer.observe(element.current));
  });

  return (
    <>
      <section ref={presentation} className="presentation-section">
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
              <FaSnowman size={30} style={{ minWidth: "24px" }} />
              <span>Conforto que abraça</span>
            </li>
          </ul>
        </article>
      </section>
      <section ref={product} className="product-section"></section>
    </>
  );
}
