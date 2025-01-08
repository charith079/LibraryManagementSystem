import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './Components/AuthContext';  // Import Auth context and provider
import Search from './Pages/SearchPage';
import Favourites from './Pages/FavaouritesPage';
import NavBar from './MajorComponents/NavBar'; // Common NavBar
import ProfilePage from './Pages/ProfilePage';
import BooksInHand from './Pages/BooksInHand';
import RequestedBooks from './Pages/RequestedBooksPage';
import SubmittedBooks from './Pages/SubmittedBooks';
import BooksPage from './Pages/BooksPage';
import PrivateRoute from './Components/PrivateRoute'; // Import PrivateRoute
import HomePage from './Pages/HomePage'; // HomePage Component (public)
import Login from './Pages/LoginPage';
import Signup from './Pages/SignupPage';

const App = () => {
  const { isAuthenticated } = useAuth();

  // Redirect to last route on reload
  useEffect(() => {
    const lastRoute = localStorage.getItem('lastRoute');
    if (isAuthenticated && lastRoute) {
      window.history.replaceState(null, '', lastRoute); // Update URL to lastRoute
    }
  }, [isAuthenticated]);

  return (
    <div>
      {/* Only show NavBar if the user is logged in */}
      <AuthWrapper>
        <NavBar />
      </AuthWrapper>

      <Routes>
        {/* Protected Routes */}
        <Route path="/books" element={<PrivateRoute element={<BooksPage />} />} />
        <Route path="/search" element={<PrivateRoute element={<Search />} />} />
        <Route path="/favourites" element={<PrivateRoute element={<Favourites />} />} />
        <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
        <Route path="/books-in-hand" element={<PrivateRoute element={<BooksInHand />} />} />
        <Route path="/requested-books" element={<PrivateRoute element={<RequestedBooks />} />} />
        <Route path="/submitted-books" element={<PrivateRoute element={<SubmittedBooks />} />} />

        {/* Public Routes */}
        <Route path="/" element={<HomePage />} /> {/* Home Page (public) */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
      </Routes>
    </div>
  );
};

// Wrapper to display NavBar only when authenticated
const AuthWrapper = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : null;
};

// Wrap the entire App component with AuthProvider
const RootApp = () => {
  return (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  );
};

export default RootApp;
