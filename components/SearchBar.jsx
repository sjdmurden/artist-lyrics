import React, { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate, Link } from "react-router-dom";
import lyrics from "../lyrics.json";

function SearchBar() {
  const items = [];
  for (const album in lyrics) {
    const tracks = Object.keys(lyrics[album]);
    tracks.forEach((track) => {
      items.push({
        id: items.length,
        trackName: track,
        albumName: album,
      });
    });
  }
  // console.log(items);

  const navigate = useNavigate();
  const handleOnSelect = (item) => {
    const { albumName, trackName } = item;
    navigate(`/${albumName}/${trackName}`);
    item = "";
  };

  const formatResult = (item) => {
    return (
      <>
        <Link
          to={`/${item.albumName}/${item.trackName}`}
          style={{ display: "block", textAlign: "left" }}
        >
          {item.trackName}
        </Link>
      </>
    );
  };

  return (
    <div className="search-bar">
      <ReactSearchAutocomplete
        items={items}
        fuseOptions={{ keys: ["trackName", "albumName"] }}
        resultStringKeyName="trackName"
        onSelect={handleOnSelect}
        formatResult={formatResult}
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;