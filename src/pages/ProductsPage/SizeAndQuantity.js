import React from 'react';
import styled from 'styled-components';

const SizeAndQuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 0 1rem;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;

  color: #8d8d8d;

  select {
    border: 0.900966px solid #e8e8e8;
    box-sizing: border-box;
    border-radius: 25.2271px;
    padding: 0.3rem 0.6rem;
    color: #8d8d8d;

    &:focus {
      border: 1px solid #63b55c;
      border-radius: 25.2271px;
      outline: none;
    }
  }
`;

const sizes = [36, 37, 38, 39, 40, 41, 42, 43];

export default function SizeAndQuantity(props) {
  return (
    <SizeAndQuantityContainer>
      <p>Size</p>
      <select name="sizes" id="sizes" onChange={props.handleSize}>
        {sizes.map((size) => {
          return (
            <option key={size} value={size}>
              {size}
            </option>
          );
        })}
      </select>

      <p>Quantity</p>
      <select name="quantity" id="quantity" onChange={props.handleQuantity}>
        <option value="0">0</option>
        <option value="1">1</option>;
      </select>
    </SizeAndQuantityContainer>
  );
}
