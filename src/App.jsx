import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Clips from './pages/Clips';
import Discord from './pages/Discord';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/clips" element={<Clips />} />
            <Route path="/discord" element={<Discord />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
