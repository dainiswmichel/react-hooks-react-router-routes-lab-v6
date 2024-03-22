// index.js
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'; // Import the dynamic Home component
import Directors from './pages/Directors'; // adjust the path as needed
import Actors from './pages/Actors'; // adjust the path as needed
import NavBar from './components/NavBar';
import Movie from './pages/Movie'; 
import ErrorPage from './pages/ErrorPage'; // Import the ErrorPage component


const root = createRoot(document.getElementById("root"));
root.render(
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directors" element={<Directors />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>
);