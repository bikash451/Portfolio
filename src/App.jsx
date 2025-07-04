import { useState } from 'react';
import { LoadingScreen } from './components/loadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import "./index.css";
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import Footer from './components/footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 z-50">
          <LoadingScreen onComplete={() => setIsLoaded(true)} />
        </div>
      )}
      
      <div className={`min-h-screen bg-[#1e1e1e] text-gray-100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;