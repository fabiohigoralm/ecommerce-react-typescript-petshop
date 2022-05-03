import styled from "styled-components/macro";

export const BannerShelfContainer = styled.div`
  min-height: auto;
  display: flex;
  width: 100%;
  justify-content: center;
  ul {
    max-width: 1170px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    justify-content: center;
  }
  li {
    display: inline;
    img {
      width: 100%;
      margin: 10px 0;
    }
  }
`;
