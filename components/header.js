import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.nav`
  height: 80px;
  box-shadow: 0 2px 2px #ccc;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer />
    </>
  );
};

export default Header;
