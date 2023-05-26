import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import ZoneDetail from '../pages/ZoneDetail';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/fishing-zones' element={<Home />} />
      <Route path='/fishing-zones/:id' element={<ZoneDetail />} />
    </Routes>
  )
}
