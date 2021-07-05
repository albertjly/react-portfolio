import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'portfolio' },
    { name: 'resume' },
    { name: 'contact' },
    { name: 'about me' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="container">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        {currentCategory.name === "about me" && <About />}
        {currentCategory.name === "contact" && <ContactForm />}
        {currentCategory.name === "portfolio" && <Portfolio />}
        {currentCategory.name === "resume" && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
