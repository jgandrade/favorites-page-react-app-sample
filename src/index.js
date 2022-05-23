import React from 'react';
import ReactDOM from 'react-dom/client';
import Favorites from './components/favorites';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LandingPage from './components/landing-page';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navbar />
        <Favorites />
        <Footer />
    </>
);