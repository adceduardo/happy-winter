import { LuHeart } from "react-icons/lu";
import "./ProductSection.css"

export function ProductSection({ nameRef }) {
  return (
    <section ref={nameRef} className="product-section">
      <div className="header">
        <span>
          <hr></hr>
          <LuHeart size={32}/>
          <hr></hr>
        </span>
        <h2>Seção I</h2>
      </div>
      <h3>Conheça nossos destaques</h3>
    </section>
  );
}
