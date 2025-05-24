import React, { useState, useEffect } from 'react';
import Preloader from './Components/loader/preloader';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
 
 
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 4025); // 4 seconds delay before showing the website
  }, []);

  return (
    <>

      
      {loading ? (
        <Preloader />
        
      ) : (
        <div>
         
          <Navbar />
          <Hero />
          <About />

          <Services />
          <MyWork />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
