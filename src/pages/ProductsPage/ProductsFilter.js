import React from 'react';
import styled from 'styled-components';

import searchIcon from '../../assets/images/searchIcon.svg';

const FilterWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

const FilterInput = styled.input`
  width: 100%;
  border: none;
  margin-left: 3.5rem;

  :focus {
    outline: none;
  }
`;

export default function ProductsFilter(props) {
  return (
    <FilterWrapper>
      <img src={searchIcon} alt="Search Icon" />

      <FilterInput
        placeholder={'Search for your sneaker'}
        onChange={props.handleFilter}
      />
    </FilterWrapper>
  );
}
