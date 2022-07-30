import NavigationBar from './components/NavBar';
import Hero from './components/Hero';
import Intro from './components/Intro';

// Sivun rakenne navi + kontsa
// Komponentit löytyy components-kansiosta

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <div className='position-absolute'>
        <Hero />
        <Intro />
      </div>
    </div>
  );
}

export default App;
