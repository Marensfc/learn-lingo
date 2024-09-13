import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import HomePage from '../../pages/home-page/HomePage';
import TeachersPage from '../../pages/teachers-page/TeachersPage';
import FavoritesPage from '../../pages/favorites-page/FavoritesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route
        path="/favorites"
        element={<PrivateRoute component={<FavoritesPage />} />}
      />
    </Routes>
  );
}

export default App;
