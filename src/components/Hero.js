import React from 'react';

import Header from '../components/Header';
import Content from '../components/Content';


const Hero = () => {
  // destructure Hero

  return (
   <>
      <div>
        <div>
           <Header/>
        </div>
        <div>
          <mage src="../assets/img/products/cover.png" alt="cover" />
          <Content/>
        </div>
      </div>
    </>
  );
};

export default Hero;
