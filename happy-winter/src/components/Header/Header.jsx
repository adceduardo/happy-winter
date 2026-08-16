import { useEffect, useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header({ isMobile }) {
  const [menuShow, setMenuShow] = useState("");
  const menuItems = ["Início", "Produtos", "Contato"];

  return (
    <header>
      <h1>
        <span>Happy</span>
        <span>Winter</span>
      </h1>

      {isMobile && (
        <GiHamburgerMenu
          size={32}
          onClick={() => {
            setMenuShow(!menuShow);
          }}
        />
      )}

      <nav className={menuShow === true ? "show" : menuShow === false ? "hide" : ""}>
        <ul>
          {menuItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
