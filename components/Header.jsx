import React from 'react';
import '../src/App.css'
import SearchBar from './SearchBar';

function Header() {
  return (
    <div className="header">
      <div className="topbox">
        <div className="title">
          <a href="https://skamuk.com/" target="_blank">
            <img src="./images/logo-top2.png" alt="SKAM's website" />
            <SearchBar/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
