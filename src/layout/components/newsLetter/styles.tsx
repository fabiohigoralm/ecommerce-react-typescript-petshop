import styled from "styled-components/macro";
import iconHeart from "../../../img/icon/heart.png";

export const NewsLetterContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  color: white;
  //text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  background-color: #8261c5;
  
  ul {
    max-width: 1170px;
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    padding: 0;
    margin: 0;
    align-items: center;
    border-bottom: 2px solid #fe9d3f;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  li {
    width: fit-content;
    text-transform: uppercase;
    //margin: 5px;
    font-size: small;
    height: 50px;
    background-image: url(${iconHeart});
    background-repeat: no-repeat;
    background-position: 17px;
    display: flex;
    align-items: center;
    span {
      font-weight: 500;
      margin-left: 55px;
      margin-right: 5px;
    }
  }
  div{
   // border: 2px solid white;
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  div > h3 {
    padding: 0;
    margin: 0;
    font-size: 24px;
    margin-top: 30px;
    text-transform: uppercase;
  }
  div > p {
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    padding: 0;
    margin: 0;
    margin-top: 10px;
  }
  form{
    margin-top: 45px;
    margin-bottom: 50px;
    display: flex;
    padding: 0;
    justify-content: space-between;
    align-items: center;
   //flex-wrap: wrap;
   //justify-content: center;
   max-width: 520px;
    width:100%;
    @media screen and (max-width: 520px) { 
    flex-wrap: wrap;
   justify-content: center;
   height: 120px;
    }
    //max-width: 800px;
   // border: 2px solid green;
  }
  form > input{
    height: 33px;
    background:none;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    &::placeholder{
      color: white;
    }
  }
  input[type="text"]{
    width: 70%;
    margin: 0 15px;
  }
  input[type="email"]{
    width: 100%;
    margin: 0 15px;
  }
  form > button {
    margin: 0 15px;
    padding: 0 10px;
    max-width: 100px;
    height: 35px;
    background-color: #fe9d3f;
    color: white;
    border: none;
    font-weight: 600;
  }
`;
