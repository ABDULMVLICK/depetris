import React from 'react';
import Header from '../Components/Header';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Section4 from '../Components/Section4';

const PageAcceuil = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default PageAcceuil;
