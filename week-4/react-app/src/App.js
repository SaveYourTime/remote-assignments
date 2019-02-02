import React, { Component } from 'react';
import './base.css';
import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import MainContent from './containers/MainContent';
import ShowMoreButton from './components/ShowMoreButton';
import HiddenContent from './containers/HiddenContent';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHiddenCards: false,
      tagline: "為您建立東北亞各大首都的橋樑"
    };
  }

  changeBannerTagline = () => {
    this.setState({tagline: "親善、便捷、永續發展的首都商務機場"});
  }

  showHiddenCards = () => {
    this.setState((prev) => {
      return ({
        showHiddenCards: !prev.showHiddenCards
      });
    });
  }

  render() {
    const { showHiddenCards, tagline } = this.state;
    return (
      <div>
        <Header />
        <Banner
          headline="TAIPEI SONGSHAN"
          tagline={tagline}
          onClick={this.changeBannerTagline}
        />
        <MainContent />
        <ShowMoreButton onClick={this.showHiddenCards}/>
        {showHiddenCards && <HiddenContent />}
        <Footer />
      </div>
    );
  }
}

export default App;
