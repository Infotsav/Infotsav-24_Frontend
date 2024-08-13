// import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Events from './Pages/Events';
import Login from './Pages/Login';
import MeetTheTeam from './Pages/MeetTheTeam';
import Sponsors from './Pages/Sponsors';
import NotFound from './Pages/NotFound';
import EventDetails from './Pages/EventDetails.tsx';

import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/register" element={<Login />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
