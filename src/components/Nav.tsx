import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../css/nav.css";

const Nav = () => {
  return (
    <div className="navbody">
      <div className="navcontainer">
     <Link to="/"><img src={logo} alt="Logo" /></Link>
        <div>
          <div className="linkwrapper">
            <Link to="/">A fundação</Link>
            <Link to={""}>Projeto Solidário</Link>
            <Link to={""}>Casa do Jardim</Link>
            <Link to="/contactos">Contactos</Link>
            <Link to="/shop">Loja</Link>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Nav;
