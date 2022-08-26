import NavigationBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Info from './components/Info';
import Tickets from './components/Tickets';
import Footer from './components/Footer';
import ScrollToTop from './helpers/ScrollToTop';
import { useRef } from 'react';
// Sivun rakenne navi + kontsa
// Komponentit löytyy components-kansiosta

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop>
          <NavigationBar />
          <div style={{ marginTop: '70px' }}></div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/info/:id' element={<Info />} />
            <Route path='/tickets' element={<Tickets />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
