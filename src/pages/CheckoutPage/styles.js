import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0.55rem;
  margin-bottom: 1rem;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    /* Chrome */
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const CheckoutTittle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 23.9328px;
  line-height: 33px;
  margin-bottom: 0.55rem;
`;

export const ProductCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.7fr 0.3fr;
  grid-template-rows: 1fr 1fr 0.3fr;
  gap: 0px 0px;
  grid-template-areas:
    'photo description delete'
    'photo delivery delete'
    'total amount delete';

  background-color: #f7f7f7;
  border-radius: 9.02222px;
  padding: 0.85rem;
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

export const Total = styled.div`
  grid-area: total;
  height: auto;
  padding-top: 0.5rem;

  p {
    &:first-child {
      font-weight: 400;
      font-size: 13.53px;
      line-height: 16.24px;
    }
    &:not(:first-child) {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 13.5333px;
      line-height: 16px;

      color: #a5a5a5;
    }
  }
`;

export const Delete = styled.div`
  grid-area: delete;
  img {
    float: right;
    cursor: pointer;
  }
`;

export const Amount = styled.div`
  grid-area: amount;
  height: auto;
  padding-top: 0.5rem;

  p {
    float: right;
    font-weight: 700;
    font-size: 36.09px;
    line-height: 36.09px;
  }
`;

export const Description = styled.div`
  grid-area: description;

  p {
    &:first-child {
      font-style: normal;
      font-weight: normal;
      font-size: 18.0444px;
      line-height: 16px;
    }
    &:not(:first-child) {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 14.4356px;
      line-height: 21px;

      color: #a5a5a5;
    }
  }
`;

export const Delivery = styled.div`
  grid-area: delivery;

  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 13.16px;
  line-height: 135.8%;

  letter-spacing: 0.612903px;

  p {
    &:first-child {
      color: #212121;
    }
    &:not(:first-child) {
      font-size: 12.16px;
      font-weight: 400;

      color: #a5a5a5;
    }
  }
`;

export const PaymentMethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.85rem 0;
  background-color: #f7f7f7;
  border-radius: 9.02222px;
  padding: 0.85rem;
`;

export const PaymentMethodTittle = styled.p`
  margin-top: 1rem;
  font-style: normal;
  font-weight: normal;
  font-size: 16.9328px;
  line-height: 23px;
`;

export const PaymentMethodItem = styled.button`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-content: center;
  text-align: left;
  height: 4.5rem;

  border: none;
  outline: none;
  border: 2px solid transparent;
  border-radius: 9.02222px;
  margin-bottom: 1rem;
  padding: 0.6rem 0.4rem;
  background: #ffffff;
  cursor: pointer;

  &:active {
    border: 2px solid #63b55c;
    border-radius: 9.02222px;
  }
  &:hover {
    border: 2px solid #63b55c;
    border-radius: 9.02222px;
  }
  &:focus {
    border: 2px solid #63b55c;
    border-radius: 9.02222px;
  }

  img {
    float: right;
  }

  p {
    &:first-child {
      font-style: normal;
      font-weight: normal;
      font-size: 13.5333px;
      line-height: 18px;

      color: #565656;
    }
  }
`;

export const DiscountAdd = styled.p`
  font-weight: bold;
  font-size: 9.77px;
  line-height: 10px;
  text-align: center;
  border-radius: 5px;
  background-color: #ffcc00;
  padding: 3px 6px;
  display: inline-block;

  color: #9e7d27;
`;

export const OnlineBanksBanner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
