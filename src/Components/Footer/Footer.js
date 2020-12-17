import React from 'react';

import Container from 'react-bootstrap/Container';
import './Footer.scss';

const Footer = () => {
  let year = new Date().getFullYear();
  return(
    <Container>
      <footer>
        <p>&#169; {year} All Rights Reserved | Web Design by <a href="https://www.echelonwebsites.com">Echelon Websites LLC</a></p>
      </footer>
    </Container>
  );
}

export default Footer;