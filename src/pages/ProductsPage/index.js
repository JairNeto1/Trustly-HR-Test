import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../components/GlobalContext';
import styled from 'styled-components';

import axios from 'axios';
import { baseUrl } from '../../constants/axios';

import ProductsList from './ProductList/ProductsList';
import ProductsFilter from './ProductsFilter';

export const ProductsPageContainer = styled.div`
  width: 100%;
`;

export default function ProductsPage() {
  const allContext = useContext(GlobalContext);
  const [filter, SetFilter] = useState('');

  useEffect(() => {
    const getProductsList = async () => {
      try {
        const response = await axios.get(`${baseUrl}`);
        allContext.setAllProducts(response.data.results);
      } catch (err) {
        alert('Something went wrong, please try again later');
      }
    };
    return getProductsList();
  }, [allContext]);

  const handleFilter = (event) => {
    SetFilter(event.target.value);
  };

  return (
    <ProductsPageContainer>
      <ProductsFilter handleFilter={handleFilter} />
      <ProductsList filter={filter} />
    </ProductsPageContainer>
  );
}
