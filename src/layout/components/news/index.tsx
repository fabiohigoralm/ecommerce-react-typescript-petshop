import React from "react";
import Slider from "react-slick";
import { SimpleSliderContainer } from "./styles";
import settings from "./config.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

export function ProductsNewsSlider() {

  const [ml, setMl] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLB/search?q=petshop")
      .then((response) => response.json())
      .then((res) => setMl(res.results.slice(0, 4)));
  });

  return (
    <SimpleSliderContainer>
      <h3>Novidades</h3>
    <Slider {...settings}>
    {ml.map((element, id) => (
            <div key={id} className="item">
              <p className="thumbnail">
              <div className="fast-buy">Compra Rapida</div>
                <img src={element.thumbnail} alt="Foto"></img>
              </p>

              <p className="title">{element.title.substring(0, 80)}...</p>
            
              <p className="price">R$ {element.price.toFixed(2)}</p>
            </div>
          ))}
    </Slider>
    </SimpleSliderContainer>
  );
}