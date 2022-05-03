import styled from "styled-components/macro";

export const SimpleSliderContainer = styled.div`
  width: 100vw;
  color: #808080;
  text-align: center;
  max-width: 1170px;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  h3 {
    text-transform: uppercase;
    text-align: center;
    font-size: 18px;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 30px;
  }
  .slick-dots {
    bottom: 0px;
  }
  .slick-prev {
    display: none;
    left: 3% !important;
    z-index: 2;
  }
  .slick-next {
    display: none;
    right: 3% !important;
    z-index: 2;
  }
  .item {
    //border:2px solid red;
    text-align: center;
  }
  .thumbnail {
    min-height: 280px;
    padding: 0;
    margin: 0;
    position: relative;
    &:hover {
      background-color: rgba(129, 88, 197, 0.5);
      .fast-buy {
        display: block;
      }
      img {
        z-index: -5;
      }
    }
  }

  .fast-buy {
    background-color: orange;
    color: white;
    position: absolute;
    display: none;
    cursor: pointer;
    justify-content: center;
    top: 40%;
    text-transform: uppercase;
    padding: 15px;
    font-size: small;
    height: fit-content;
  }
  p {
    display: flex;
    justify-content: center;
    //width: 280px;
    height: auto;
    img {
      width: 100%;
      max-width: fit-content;
      //overflow: hidden;
      align-self: center;
      max-height: 280px;
    }
  }
  .title {
    margin-bottom: 0;
  }
  .price {
    margin-top: 5px;
    margin-bottom: 40px;
    font-weight: 500;
  }
`;
