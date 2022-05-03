import React from "react";
import { FooterContainer } from "./styles";
import logo from "../../../img/header/logo.png";
import face from "../../../img/icon/facebook.png";
import insta from "../../../img/icon/insta.png";
import twitter from "../../../img/icon/twitter.png";

import visa from "../../../img/flagpayment/visa.png";
import master from "../../../img/flagpayment/master.png";
import american from "../../../img/flagpayment/american.png";
import diners from "../../../img/flagpayment/dinersclub.png";
import hipercard from "../../../img/flagpayment/hipercard.png";
import aura from "../../../img/flagpayment/aura.png";
import elo from "../../../img/flagpayment/elo.png";
import boleto from "../../../img/flagpayment/boleto.png";
import serie from "../../../img/icon/logo-serie.png";


export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <ul className="social">
          <li className="haha">
            <img src={logo} alt="Logo"></img>
          </li>
          <li className="midia">
            <img src={face} alt="Facebook"></img>
            <img src={insta} alt="Instagran"></img>
            <img src={twitter} alt="Twitter"></img>
          </li>
          <li className="info">
            <span>® 2019  •  CNPJ 00.000.000/0000-00</span>
            <span>Rua Tal de Tal, 123 - Campinas-SP </span>
          </li>
        </ul>
        <ul className="pet-store">
          <li>PET STORE</li>
          <li>Quem Somos</li>
          <li>Como Comprar</li>
          <li>Trocas e Devoluções</li>
          <li>Frete e Entrega</li>
        </ul>
        <ul className="contact">
          <li>CONTATO</li>
          <li>(99) 9999-9999</li>
          <li>(99) 9999-9999</li>
          <li>petstore@petsore.com.br</li>
        </ul>
        <ul className="payment">
          <li>PAGAMENTO</li>
          
          <li className="payment-flag">
            <span><img src={visa} alt="Visa"></img></span>
            <span><img src={master} alt="Master card"></img></span>
            <span><img src={american} alt="American express"></img></span>
            <span><img src={diners} alt="Diners club"></img></span>
            <span><img src={hipercard} alt="Hipercard"></img></span>
            <span><img src={aura} alt="Aura"></img></span>
            <span><img src={elo} alt="Elo"></img></span>
            <span><img src={boleto} alt="Boleto"></img></span>
          </li>
              
        </ul>
      </div>
      <div className="signature">
        <span>TECNOLOGIA E DESENVOLVIMENTO : </span>
        <span><img src={serie} alt="Serie"></img></span>
      </div>
    </FooterContainer>
  );
};
