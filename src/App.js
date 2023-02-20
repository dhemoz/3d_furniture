import React from 'react';

import "./App.css"; 


// import components
import Hero from './components/Hero';


const App = () => {
  return (
    <>
      <div className='w-full max-w-[1440px] mx-auto bg-black'>
       <Hero/>
      </div>
    </>
  );
};

export default App;