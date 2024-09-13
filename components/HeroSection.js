// components/HeroSection.js
import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  text-align: center;
  padding: 100px 0;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
`;

const CTAButton = styled.a`
  background-color: #0070f3;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
`;

const HeroSection = () => {
  return (
    <Hero>
      <Title>Your App Name</Title>
      <Subtitle>An amazing tagline that sells your app.</Subtitle>
      <CTAButton href="#pricing">Buy Now</CTAButton>
    </Hero>
  );
};

export default HeroSection;
