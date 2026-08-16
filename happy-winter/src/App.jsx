import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";

import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsmobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => {
      setIsmobile(window.innerWidth < 576);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header isMobile={isMobile} />
      <Content isMobile={isMobile} />
      <Footer />
    </>
  );
}

export default App;
