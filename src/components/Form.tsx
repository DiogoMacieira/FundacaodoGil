import "../css/form.css";
import React, { useEffect } from "react";
const Form = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="formbody">
      <h2>Envio de Faturação</h2>
      <div className="firstform">
        <div className="firstleft">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Nif" />
        </div>
        <div>
          <input type="text" placeholder="Apelidos" />
        </div>
      </div>
      <div className="secondform">
        <div className="secondleft">
          <input type="text" placeholder="Endereço" />
          <input type="text" placeholder="Código Postal" />
          <input type="text" placeholder="Distrito" />
        </div>
        <div className="secondright">
          <input type="text" placeholder="Indicativo" />
          <input type="text" placeholder="Localidade" />
          <input type="text" placeholder="Email" />
        </div>
      </div>
      <div className="thirdform">
        <div className="thirdleft">
          <input type="text" placeholder="Telefone:+351" />
        </div>
        <div className="thirdright">
          <div className="mbway">
            <input type="checkbox" />
            <p>MBway</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Multibanco</p>
          </div>
        </div>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <p>Quero receber comunicações da newslleter</p>
      </div>

      <div className="final">
        <button className="btnfinal">FINALIZAR</button>
      </div>
    </div>
  );
};

export default Form;
