import styled from "styled-components/macro";
import menu from "../../../img/icon/menu.png";

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #8261c5;
  @media screen and (max-width: 521px) {
    justify-content: space-around;
    height: 50px;
    &::before {
      content: url(${menu});
      display: flex;
      align-items: center;
      //padding-left: 10px;
    }

    &:hover {
      ul {
        display: flex;
      }
    }
  }
  ul {
    font-size: 14px;
    color: white;
    width: 100%;
    max-width: 1170px;
    flex-wrap: wrap;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 521px) {
      display: none;
      /* top:5px;*/
      left: 0px;
      background-color: #8261c5;
      flex-direction: column;
      flex-wrap: nowrap;
      height: auto;
      align-items: flex-start;
      width: 30vw;
      position: absolute;
      margin-left: 5px;
      padding: 10px;
      border-radius: 4px;
    }
  }
  li {
    display: flex;
    @media screen and (max-width: 521px) {
      input{
        display: block;
      }
      &:hover {
        text-decoration: underline;
        padding-left: 15px;
      }
    }
    //display: inline;
  }


  
  @media screen and (max-width: 521px) {

    &::after {
      content: "";
      width: 30px;
      background: url("https://icones.pro/wp-content/uploads/2021/06/icone-loupe-jaune.png")
        no-repeat 90% 12px;
      background-size: 25px;
    }
  }
`;
