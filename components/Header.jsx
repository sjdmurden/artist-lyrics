import React from "react";
import "../src/App.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <div className="topbox">
        <Link to={"/"}>
          <FontAwesomeIcon className='disk' icon={faCompactDisc} size='2xl' />
          <br/>
          Home
        </Link>
        <a className="image" href="https://skamuk.com/" target="_blank">
          <img src={"../images/skamlogo.png"} alt="SKAM's logo" />
        </a>
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
