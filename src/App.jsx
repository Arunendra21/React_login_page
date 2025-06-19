import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create_acc from './pages/Create_acc';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/create" element={<Create_acc />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
