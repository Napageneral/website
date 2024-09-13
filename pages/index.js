// pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </Layout>
  );
};

export default HomePage;
