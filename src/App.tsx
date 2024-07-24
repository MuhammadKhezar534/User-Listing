import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserProfilePage from './pages/UserProfilePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:gender?" element={<UserListPage />} />
        <Route path="/user/:userId" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
