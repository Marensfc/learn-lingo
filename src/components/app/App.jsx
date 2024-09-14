import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import HomePage from '../../pages/home-page/HomePage';
import TeachersPage from '../../pages/teachers-page/TeachersPage';
import FavoritesPage from '../../pages/favorites-page/FavoritesPage';
import Layout from '../layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route
          path="/favorites"
          element={<PrivateRoute component={<FavoritesPage />} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
