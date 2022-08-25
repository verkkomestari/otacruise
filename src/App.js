import NavigationBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Info from './components/Info';
import Tickets from './components/Tickets';
import Footer from './components/Footer';
// Sivun rakenne navi + kontsa
// Komponentit löytyy components-kansiosta

function App() {
  return (
    <div className='App'>
      <Router>
        <NavigationBar />
        <div style={{ marginTop: '70px' }}></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/info/:id' element={<Info />} />
          <Route path='/tickets' element={<Tickets />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
