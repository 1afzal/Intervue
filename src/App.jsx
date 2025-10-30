import React from "react";
import HeroSection from "./components/heroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Demo from "./components/demo";
import PageNotFound from "./components/pagenotfound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/demo' element={<Demo/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}