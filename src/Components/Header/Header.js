import React from 'react';
import Container from 'react-bootstrap/Container';
import './Header.scss';


const Header = ({title}) => {
  return(
    <header>
      <Container>
        <h1>{title}</h1>
      </Container>
    </header>
  );
}

export default Header;