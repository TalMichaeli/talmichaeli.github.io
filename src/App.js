import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import './App.css';
import './WhatsAppIcon.js'
import WhatsAppIcon from './WhatsAppIcon.js';

function App() {
  useEffect(() => {
    document.title = "החנות של יוסי";
  }, []);

  
    return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">
            <img src="/assets/logo.png" alt="logo" className="logo-img" />
          </div>

          <nav>
            <Link to="/">בית</Link>
            <Link to="/products">מוצרים</Link>
            </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      <WhatsAppIcon></WhatsAppIcon>
        <footer className="footer">© 2025 yosy's Gadget Shop</footer>
      </div>
    </Router>
  );
}

export default App;
