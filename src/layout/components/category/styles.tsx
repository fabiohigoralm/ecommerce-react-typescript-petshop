import styled from "styled-components/macro";

export const CategoryContainer = styled.div`
  //min-height: auto;
  background-color: #ffa200;
  display: flex;
  width: 100%;
  justify-content: center;
  ul {
    max-width: 1170px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline;
    img {
      max-width: 378px;
      width: 100%;
      margin: 10px 0;
    }
  }
`;
