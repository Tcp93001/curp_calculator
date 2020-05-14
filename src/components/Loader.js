import React from 'react';
import '../assets/css/loader.css'

const Loader = () => {
  return (
    <div className='loader'>
      <p>Calculando...</p>
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loader;