// components/PricingSection.js
import React from 'react';
import styled from 'styled-components';
import PurchaseButton from './PurchaseButton';

const Pricing = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const PricingSection = () => {
  return (
    <Pricing id="pricing">
      <h2>Pricing</h2>
      <h3>$49.99 - One-Time Purchase</h3>
      <PurchaseButton />
    </Pricing>
  );
};

export default PricingSection;
