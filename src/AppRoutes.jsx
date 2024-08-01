import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Service from "./assets/pages/Service";
import Menu from "./assets/pages/Menu";
import Booking from "./assets/pages/Booking";
import Team from "./assets/pages/Team";
import Testimonial from "./assets/pages/Testimonial";
import Contact from "./assets/pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/team" element={<Team />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
