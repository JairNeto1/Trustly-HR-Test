import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import arrowPointLeft from '../../../assets/images/arrowPointLeft.svg';

const GoBackButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;

  padding: 0.2rem 0.8rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 14.4356px;
  cursor: pointer;

  &:hover,
  :active,
  :focus {
    border: none;
    border-radius: 14.4356px;
    outline: none;
  }

  p {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 18.0444px;
    line-height: 21px;
  }
`;

export default function GoBackButton() {
  const history = useHistory();
  const locationUrl = useLocation();
  const location = locationUrl.pathname;

  const handleGoBackButton = () => {
    if (location !== '/receiptpage') {
      history.goBack();
    } else {
      history.push('/');
    }
  };

  const showGoBackButton =
    location === '/checkoutpage' ||
    location === '/receiptpage' ||
    location === '/selectbankpage' ? (
      <GoBackButtonWrapper onClick={handleGoBackButton}>
        <img src={arrowPointLeft} alt={`Arrow point to left`} />
        <p>Back</p>
      </GoBackButtonWrapper>
    ) : (
      <div></div>
    );

  return <div>{showGoBackButton}</div>;
}
