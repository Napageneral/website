// components/FeaturesSection.js
import React from 'react';
import styled from 'styled-components';

const Features = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FeatureItem = styled.div`
  flex: 1 1 30%;
  margin: 20px;
  max-width: 300px;
`;

const FeatureIcon = styled.img`
  width: 80px;
  height: 80px;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-top: 20px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const FeaturesSection = () => {
  return (
    <Features>
      <h2>Features</h2>
      <FeatureList>
        <FeatureItem>
          <FeatureIcon src="/icons/feature1.png" alt="Feature 1" />
          <FeatureTitle>Feature 1</FeatureTitle>
          <FeatureDescription>
            Description of feature 1.
          </FeatureDescription>
        </FeatureItem>
        {/* Repeat for other features */}
      </FeatureList>
    </Features>
  );
};

export default FeaturesSection;
