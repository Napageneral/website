// components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 40px 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Your Company Name</p>
    </FooterContainer>
  );
};

export default Footer;
