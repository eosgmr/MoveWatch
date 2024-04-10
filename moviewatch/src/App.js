
import React from "react"
import './App.css';
import TopHead from './components/Header/TopHead';
import BottomNavigation from './components/ButtonNavigation/ButtomNavigation';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from '@mui/material/Container';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";


function App() {
  return (
    <BrowserRouter>
      <TopHead />

      <div className='App'>
        <Container>
          <Routes>

            <Route path="/" element={<Trending/>} exact/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/search" element={<Search/>}/>
            
          </Routes>
        </Container>
      </div>

      <BottomNavigation />
    </BrowserRouter>
  );
};

export default App;
