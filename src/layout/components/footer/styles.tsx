import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #888888;
  font-size: 14px;
  padding-top: 20px;
  align-items: center;
  div {
    max-width:1170px;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media screen and (max-width: 769px) {
     flex-direction: column;
     justify-content: center;
     align-items: center;
     }
   
    ul {
      display: flex;
      flex-direction: column;
     
      li {
        width: auto;
        display: flex;
        flex-direction: column;
      }
      .midia {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 15px;
        margin-bottom: 10px;
        img {
          padding: 5px 15px;
        }
      }
      .info {
        display: flex;
        font-size: 11px;
        flex-direction: column;
        align-items: center;
        span {
          padding-top: 5px;
        }
      }
    }
  }
  .social {
    padding: 0;
    @media screen and (max-width: 769px) {
     width: fit-content;
     }
  }
  .signature {
    justify-content:center;
    border-top: 2px solid #f0f0f0;
    font-size: 11px;
    display: flex;
    width: 80%;
    margin-top: 20px;
    span {
      display: flex;
      align-items: center;
      padding: 18px 12px 22px 12px;
    }
  }
  .pet-store,
  .contact,
  .payment {

    @media screen and (max-width: 769px) {
     padding: 0;
     align-items: center;
     }
   

    align-items: center;
    padding-left: 20px;
    font-size: 12px;
    li {
      margin-bottom: 15px;
    }
    li:first-child {
      font-size: 13px;
      color: #8261c5;
      font-weight: 600;
    }
  }
  .payment-flag {
    justify-content: space-between;
    width: 200px;
    flex-wrap: wrap;
    flex-direction: row;
    img {
      padding: 3px 0;
    }
  }
  
`;
