import React from "react";
import { NewsLetterContainer } from "./styles";

export const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <ul>
        <li><span>Entrega Gratuita </span>A partir de  99</li>
        <li><span>Parcelamento </span>Sem juros</li>
        <li><span>Cadastre-se </span>Ganhe Desconto</li>
      </ul>
      <div>
        <h3>Assine nossa NewsLetter</h3>
        <p>Cadastre-se para receber nossas novidades e descontos exclusivos!</p>
        
         <form>
          <input type="text" placeholder="Nome"></input>
          <input type="email" placeholder="E-mail"></input>
          <button type="submit">ENVIAR</button>
          </form> 
      </div>
    </NewsLetterContainer>
  );
};
