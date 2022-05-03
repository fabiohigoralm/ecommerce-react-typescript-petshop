import styled from "styled-components/macro";

export const HeaderContainer = styled.div`
//border: 2px solid red;
  width: 100%;
  max-width: 1170px;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
`;

export const Search = styled.div`
  color: white;
  input {
    background: url("https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png") white no-repeat 90% 10px;
    background-size: 25px;
    width:100%;
    max-width: 190px;
    height: 44px;
    border: none;
    resize: none;
    outline: none;
    border: 1px solid #AAA;
    
  }
`;

export const Account = styled.div`
  width: fit-content;
  color: white;
  display: flex;
  justify-content: flex-end;
  img{
    padding: 5px;
  }
`;
