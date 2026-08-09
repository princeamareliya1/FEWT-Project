import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Watchlist from "./pages/Watchlist";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import MovieDetails from "./pages/MovieDetails";
import Movie1 from "./pages/Movie1";
import Movie2 from "./pages/Movie2";
import Movie3 from "./pages/Movie3";

import Star1 from "./pages/Star1";
import Star2 from "./pages/Star2";
import Star3 from "./pages/Star3";
import Star4 from "./pages/Star4";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100 text-white" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Navbar />
      
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<Watchlist />} />
          
          <Route path="/movie/1" element={<Movie1 />} />
          <Route path="/movie/2" element={<Movie2 />} />
          <Route path="/movie/3" element={<Movie3 />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          
          <Route path="/about" element={<AboutUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          
          <Route path="/profile" element={<Profile />} />
          
          <Route path="/setting" element={<Setting />} />
          <Route path="/settings" element={<Setting />} />
          
          <Route path="/star/1" element={<Star1 />} />
          <Route path="/star/2" element={<Star2 />} />
          <Route path="/star/3" element={<Star3 />} />
          <Route path="/star/4" element={<Star4 />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}