import "../css/footer.css";
import footer from "../assets/footer.jpg";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className="fotterwrapper">
      <div className="fottercontainer">
        <div className="footercontent">
          <img src={footer} alt="" />
          <p> Contactos e política de provacidade</p>
          <div className="icons">
            <a
              href="https://www.youtube.com/user/fundacaodogil"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} alt="icon" className="icon" />
            </a>
            <a
              href="https://www.facebook.com/fundacaodogil/?locale=pt_PT"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="icon" className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/funda%C3%A7%C3%A3o-do-gil/?originalSubdomain=pt"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="icon" className="icon" />
            </a>
            <a
              href="https://www.instagram.com/fundacaodogil/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="icon" className="icon" />
            </a>
          </div>
        </div>
        <p className="allrights">
          2023 Fundação do Gil. Todos os direitos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
