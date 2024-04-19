import { useState } from "react";
import "./App.css";
import lyrics from "../lyrics.json";
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Album from '../components/Album';
import Song from "../components/Song";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Album/>} />
        <Route path="/:album/:song" element={<Song/>} />
      </Routes>
    </div>
  );
}

export default App;
