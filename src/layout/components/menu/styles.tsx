import styled from "styled-components/macro";

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #8261c5;
  ul{
    font-size: 14px;
    color: white;
    width: 100%;
    max-width: 1170px;
   //min-width: 520px;
    flex-wrap: wrap;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    margin: 0;
  }
  li{
    display: inline;
  }
`;