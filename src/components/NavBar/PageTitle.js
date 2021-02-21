import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

const PageTitleWrapper = styled.div`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 26.1016px;
  line-height: 30px;
  text-align: center;
`;

export default function Pagetitle() {
  const locationUrl = useLocation();

  const [pageTitle, setPageTitle] = useState();

  useEffect(() => {
    const location = locationUrl.pathname;
    const expr = location;

    switch (expr) {
      case '/':
        setPageTitle('Sneakers');
        break;
      case '/checkoutpage':
        setPageTitle('Checkout');
        break;
      case '/receiptpage':
        setPageTitle('Review and Confirmation');
        break;
      default:
        setPageTitle('');
    }
  }, [locationUrl.pathname]);

  return <PageTitleWrapper>{pageTitle}</PageTitleWrapper>;
}
