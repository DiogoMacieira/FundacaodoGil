import "../css/contacts.css";
import React, { useEffect } from "react";
const Contactos = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="section">
      <div className="slogan">
        <h2 className="left">Falar connosco está a</h2>
        <h2 className="right">uma gota de distância</h2>
      </div>
      <div className="contactos">
        <div className="contactosborder">
          <h3>CONTACTOS</h3>
          <p>+351 21 355 24 59</p>
          <p>+351 21 355 24 50</p>
          <p>Av. Do Brasil, 53 D, Parque de Saúde de Lisboa</p>
          <p>Pavilhão 13 1700-063 Lisboa</p>
          <p>geral@fundacaodogil.pt</p>
        </div>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.5867208780055!2d-9.146936224835343!3d38.75771295493532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1932ff696fea7b%3A0x8a49ff4a74026104!2zRnVuZGHDp8OjbyBkbyBHaWw!5e1!3m2!1spt-PT!2spt!4v1686920162601!5m2!1spt-PT!2spt"></iframe>
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

export default Contactos;
