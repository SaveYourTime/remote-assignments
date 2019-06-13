import React, { useState } from 'react';
import './base.css';
import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import MainContent from './components/Main';
import ShowMoreButton from './components/ShowMoreButton';
import Footer from './components/Footer';

function App() {
  const [hideCards, setHideCards] = useState(true);
  const [tagline, setTagline] = useState("為您建立東北亞各大首都的橋樑");

  return (
    <div>
      <Header />
      <Banner
        headline="TAIPEI SONGSHAN"
        tagline={tagline}
        onClick={() => setTagline("親善、便捷、永續發展的首都商務機場")}
      />
      <MainContent />
      <ShowMoreButton onClick={() => setHideCards(prevHideCards => !prevHideCards)} />
      <MainContent hideCards={hideCards} />
      <Footer />
    </div>
  );
}

export default App;