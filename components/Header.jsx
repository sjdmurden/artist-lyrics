import React from 'react';
import '../src/App.css'
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className="header">
      <div className="topbox">
        <div className="title">
          <a className='image' href="https://skamuk.com/" target="_blank">
            <img src={"../images/skamlogo.png"} alt="SKAM's logo" />
          </a>
            <SearchBar/>
        </div>
      </div>
    </div>
  );
}

export default Header;
