import React from 'react';

const Header: React.FC = () => {
  return(
    <header className='header'>
      <img src="logo230x120.png" alt="logo"/>
      
      <div className='headerSlogan'>
      <img src="slogan350x120.png" alt="logo"/>
      </div>

      <div className='headerPicture'>
      <img src="headerpic120x120.png" alt="logo"/>
      </div>
    </header>
  ); 
};

export default Header;
