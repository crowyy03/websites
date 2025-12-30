import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { SignatureExperience } from './components/SignatureExperience';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Loader } from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <Layout>
          <Hero />
          <SignatureExperience />
          <Menu />
          <Gallery />
          <Reviews />
          <Contact />
        </Layout>
      )}
    </>
  );
}

export default App;
