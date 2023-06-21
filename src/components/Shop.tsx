import React, { useEffect } from "react";
import "../css/shop.css";
import book from "../assets/book.png";
import gratidao from "../assets/gratidao.png";
import cadernogil from "../assets/cadernogil.png";
import saco from "../assets/saco.png";
import cabaz1 from "../assets/cabaz1.png";
import cabaz2 from "../assets/cabaz2.png";
import shop from "../assets/shop.png";
import mascote from "../assets/mascote.png";
import flores from "../assets/flores.png";
import { Link } from "react-router-dom";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="shopbody">
      <div className="shoptittle">
        <h1>LOJA</h1>
        <button>Ordenação</button>
      </div>
      <div className="icon">
      <img src={shop} alt="icon" />
      </div>
      <div className="shopitemscontainer">
        <div className="shopitems">
          <div className="forthesquare">
            <div className="square"></div>
            <div className="item um">
              <div className="imgdiv">
                <img src={book} alt="book" className="shopimg" />
              </div>
              <div className="item-content">
                <p>
                  “A Caixa dos Sonhos Bons” é uma história que conta com a
                  preciosa ajuda dos meninos e das meninas que vivem na Casa do
                  Gil.
                </p>
                <Link to="/form">
                  <button className="shopbtn">ADICIONAR</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="item dois">
            <div className="imgdiv">
              <img src={gratidao} alt="gratidao" className="shopimg" />
            </div>
            <div className="item-content">
              <p>Caderno da Gratidão</p>
              <p>Formato A5</p>
              <Link to="/form">
                <button className="shopbtn">ADICIONAR</button>
              </Link>
            </div>
          </div>
          <div className="item tres">
            <div className="imgdiv">
              <img src={cadernogil} alt="cadernogil" className="shopimg" />
            </div>
            <div className="item-content">
              <p>Caderno do Gil</p>
              <p>Formato A5 80 folhas lisas</p>
              <Link to="/form">
                <button className="shopbtn">ADICIONAR</button>
              </Link>
            </div>
          </div>
          <div className="item quatro">
            <div className="imgdiv">
              <img src={saco} alt="saco" className="shopimg" />
            </div>
            <div className="item-content">
              <p>Tote-Bag com a nossa mascote, para levar sempre consigo</p>
              <Link to="/form">
                <button className="shopbtn">ADICIONAR</button>
              </Link>
            </div>
          </div>
          <div className="item cinco">
            <div className="imgdiv">
              <img src={mascote} alt="mascote" className="shopimg" />
            </div>
            <div className="item-content">
              <p>É a nossa mascote, o boneco do Gil, com 13cm de dimensão</p>
              <Link to="/form">
                <button className="shopbtn">ADICIONAR</button>
              </Link>
            </div>
          </div>
          <div className="item seis">
            <div className="imgdiv">
              <img src={cabaz1} alt="cabaz1" className="shopimg" />
            </div>
            <div className="item-content">
              <p>Cabaz de Natal Nº1</p>
              <Link to="/form">
                <button className="shopbtn">ADICIONAR</button>
              </Link>
            </div>
          </div>
          <div className="item sete">
            <div className="imgdiv">
              <img src={cabaz2} alt="cabaz2" className="shopimg" />
            </div>
            <div className="item-content">
              <p>Cabaz de Natal Nº2</p>
              <Link to="/form">
                <button className="shopbtn">ADICIONAR</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <div className="newsleterborder">
            <h3>Donativo</h3>

            <p>Saiba como pode ajudar a Fundação do Gil</p>
            <form>
              <div className="form-item">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="O teu Nome"
                />
              </div>
              <div>
                {" "}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </form>
            <div className="floresbtn">
              <img src={flores} alt="flores" className="flores" />
              <div className="btndiv">
                <button className="subbtn">Doar</button>
              </div>
              <img src={flores} alt="flores" className="flores" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
