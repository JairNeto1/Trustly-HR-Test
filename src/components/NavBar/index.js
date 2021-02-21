import React from 'react';
import styled from 'styled-components';

import UserAvatar from './UserAvatar';

import GoBackButton from '../../components/Buttons/GoBackButton';
import Pagetitle from './PageTitle';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export default function NavBar() {
  const mql = window.matchMedia('(min-width: 600px)');
  const mobileView = mql.matches;

  const pageTitle = mobileView ? <Pagetitle /> : <div></div>;

  return (
    <NavBarContainer>
      <GoBackButton />
      {pageTitle}
      <UserAvatar />
    </NavBarContainer>
  );
}
