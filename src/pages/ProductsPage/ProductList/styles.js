import styled from 'styled-components';

export const ProductsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    height: 85vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      /* Chrome */
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
  max-width: 376px;
  margin: 0 auto;

  img {
    @media (max-width: 376px) {
      width: 95vw;
    }
  }
`;

export const ProductDescription = styled.div`
  margin: 1rem 0;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;

  text-align: center;
`;

export const ProductPrice = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 18px;

  text-align: center;
  color: #000000;
  margin: 1rem 0;
`;
