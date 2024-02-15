import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/NavigationComponent';
import Profile from './view/Profile';
import Home from './view/Home';
import Dashboard from './view/Dashboard';
import Calendar from './view/Calendar';
import TravelsList from './components/TravelsListComponent';

export default function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/travels" element={<TravelsList />} />
            </Routes>
        </BrowserRouter>
    );
}
