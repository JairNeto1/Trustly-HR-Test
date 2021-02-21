import styled from 'styled-components';

export const ReceiptPageContainer = styled.div`
  width: 95%;
  flex-grow: 1;
`;

export const ReceiptTittle = styled.p`
  font-size: 23.93px;
  margin: 1rem 0 2rem 0;
`;

export const OrderSummaryCard = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  grid-template-rows: 0.3fr 1fr;
  gap: 0.5rem 0;
  grid-template-areas:
    'tittle tittle'
    'photo description';

  background: #f7f7f7;
  border-radius: 9.02222px;
  padding: 0.85rem;
  margin-bottom: 2rem;
`;

export const OrderSummaryTittle = styled.div`
  grid-area: tittle;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 154.6%;
`;

export const Photo = styled.div`
  grid-area: photo;
  width: 24vw;
  height: 26vw;
  border-radius: 9.02222px;
  margin-right: 0.55rem;
  position: relative;
  overflow: hidden;

  /* Hide scrollbar for Chrome, Safari and Opera */
  :-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  img {
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
    width: 50vw;
  }
`;

export const Description = styled.div`
  grid-area: description;
  margin-top: 1rem;

  p {
    &:first-child {
      font-weight: 400;
    }
    &:not(:first-child) {
      font-family: Arial;
      color: #a5a5a5;
      font-size: 13.16px;
      font-weight: 400;
    }
  }
`;

export const PaymentMethodCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  border-radius: 9.02222px;
  padding: 0.85rem;
  margin-bottom: 2rem;
`;

export const PaymentMethodTittle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 154.6%;
`;

export const PaymentMethodType = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  padding: 0.5rem 0 2rem 0;

  p {
    margin-left: 0.5rem;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
  }
`;

export const PaymentMethodTotal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;

  div {
    &:first-of-type {
      display: flex;
      flex-direction: column;
    }
    p {
      &:first-child {
        font-style: normal;
        font-weight: normal;
        font-size: 16.3135px;
        line-height: 20px;
      }
      &:not(:first-child) {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 16.3135px;
        line-height: 20px;

        color: #a5a5a5;
      }
    }
  }

  div {
    &:nth-of-type(2) {
      height: auto;
      width: 100%;
      text-align: center;
      padding-top: 0.5rem;
      p {
        float: right;
        font-style: normal;
        font-weight: bold;
        font-size: 50.5px;
        line-height: 44px;
      }
    }
  }
`;
