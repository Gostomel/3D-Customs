import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Configurator from './pages/Configurator';
import Library from './pages/Library';
import Quote from './pages/Quote';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="configurator" element={<Configurator />} />
          <Route path="library" element={<Library />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </Router>
  );
}
