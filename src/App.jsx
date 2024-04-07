import { useState } from "react";
import "./App.css";
import lyrics from "../lyrics.json";
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Album from '../components/Album';

function App() {
  return (
    <div className="App">
      <Header />
      <Album />
    </div>
  );
}

export default App;
