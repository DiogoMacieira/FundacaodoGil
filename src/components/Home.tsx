import "../css/home.css";
// @ts-ignore
import img1 from "../assets/img1.JPG";
// @ts-ignore
import img2 from "../assets/img2.JPG";
// @ts-ignore
import img3 from "../assets/img3.JPG";
import casa from "../assets/casa.JPG";
import thumbnail from "../assets/thumbnal.jpg";
import React, { useEffect } from "react";
import video from "../assets/video.mp4";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className="homewrapper">
      <div className="beforecards">
        {/* beforeprojects */}
        <h1 className="title">
          Falar connosco está a <hr /> uma gota de distância
        </h1>
        <div className="rectanglewrraper">
          <video width="1000" height="315" controls poster={thumbnail}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h2 className="subtitle">
          A todos os parceiros que tornam possível o <hr /> nosso dia-a-dia
        </h2>
        <button className="btn">Saiba mais</button>
        <h3 className="thirdtitle">Os nossos projetos</h3>
      </div>

      <div className="cardwrapper">
        <div className="card umcard">
          <img src={img1} alt="img1" />
          <h4 className="h41">Cuidados Domiciliários Pediátricos</h4>
          <p>
            Com provas de elevada eficácia na melhoria do conforto e da
            qualidade de vida da criança e sua família e na optimização dos
            recursos hospitalares.
          </p>
          <a className="h41" href="#">
            Saber+
          </a>
        </div>
        <div className="card doiscard">
          <img src={img2} alt="img2" />
          <h4 className="h42">Casa de Acolhimento</h4>
          <p>
            Chamada carinhosamente “Casa do Gil”, destina-se ao acolhimento de
            crianças que se encontram em risco social e/ou clínico e não podem
            estar junto das suas famílias.
          </p>
          <a className="h42" href="#">
            Saber+
          </a>
        </div>
        <div className="card trescard">
          <img src={img3} alt="img3" />
          <h4 className="h43">Desenvolvimento Infantil</h4>
          <p>
            Trabalhar a criança de uma forma holística e libertar todo o seu
            potencial é o objectivo do nosso mais recente projecto.
          </p>
          <a className="h43" href="#">
            Saber+
          </a>
        </div>
      </div>
      <div className="cajajardimwrapper">
      <div className="casajardim">
        <div className="casajardimtexto">
          <h2>Casa do Jardim</h2>
          <div className="casajardimfoto">
          <img src={casa} alt="casa" />
          </div>
        </div>
      </div>
      </div>
      <div className="newsletter">
        <div className="newsleterborder">
          <h3>Newsletter</h3>
          <p>O mar é feito de pequenas gotas.</p>
          <p>Saiba como pode ajudar a Fundação do Gil</p>
          <form>
            <div className="form-item">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email:"
              />
            </div>
            <div>
              <button className="subbtn">Subscrever</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
