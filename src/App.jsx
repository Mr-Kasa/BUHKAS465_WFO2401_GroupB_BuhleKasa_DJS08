import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import Layout from '../components/Layout';
import Dashboard from "../src/pages/host/Dashboard"
import Income from "../src/pages/host/Income"
import Reviews from "../src/pages/host/Reviews"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
    <Route path="/host" element={<Dashboard />}>
    <Route path="/host/income" element={<Income />} />
    <Route path="/host/reviews" element={<Reviews />} />
  </Route>
</Route>
</Routes>
</BrowserRouter>)
    
}