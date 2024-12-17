import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Login from './pages/Login';
import AddFriend from './pages/AddFriend';
import Home from './pages/Home';
import Debts from './pages/Debts';
import Owed from './pages/Owed';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import { Navigate } from 'react-router-dom';


const ConditionalNavbar = () => {
  const location = useLocation();
  return location.pathname !== "/login" ? <Navbar /> : null;
};

function ProtectedRoute({ loggedIn, children }: { loggedIn: boolean; children: React.ReactNode }) {
  return loggedIn ? children : <Navigate to="/login" replace />;
}
function App() {

  const [loggedIn, setLoggedIn] = React.useState(false)

  function updateLoggedIn() {
    setLoggedIn(previous => !previous);
  }

  return (
    <Router>
      <ConditionalNavbar />

      <Routes>
        <Route path="/" element={<ProtectedRoute loggedIn={loggedIn}><Home /></ProtectedRoute>} />
        <Route path="/addfriends" element={<ProtectedRoute loggedIn={loggedIn}><AddFriend /></ProtectedRoute>} />
        <Route path="/login" element={<Login updateLoggedIn={updateLoggedIn} />} />
        <Route path="/debts" element={<ProtectedRoute loggedIn={loggedIn}><Debts /></ProtectedRoute>} />
        <Route path="/owed" element={<ProtectedRoute loggedIn={loggedIn}><Owed /></ProtectedRoute>} />
        <Route path="/friends" element={<ProtectedRoute loggedIn={loggedIn}><Friends /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute loggedIn={loggedIn}><Profile /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;