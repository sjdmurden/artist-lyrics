import React from "react";
import "../src/App.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="topbox">
        <div className="title">
          <Link to={"/"}>Home</Link>
          <a className="image" href="https://skamuk.com/" target="_blank">
            <img src={"../images/skamlogo.png"} alt="SKAM's logo" />
          </a>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Header;
