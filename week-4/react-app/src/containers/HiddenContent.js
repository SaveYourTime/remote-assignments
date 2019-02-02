import React, { Component } from 'react';
import Content from '../components/Content';
import Pic1 from '../img/jay-wennington-2065-unsplash.jpg';
import Pic2 from '../img/erik-odiin-539947-unsplash.jpg';
import Pic3 from '../img/nikola-ancevski-531651-unsplash.jpg';
import Pic4 from '../img/john-matychuk-393455-unsplash.jpg';

const pics = [
  {
    src: Pic1,
    title: "Restaurants & Shops"
  },
  {
    src: Pic2,
    title: "Facilities and Services"
  },
  {
    src: Pic3,
    title: "Weather"
  },
  {
    src: Pic4,
    title: "Parking Lot"
  }
];

class HiddenContent extends Component {
  render() {
    return (
      <Content pics={pics} />
    );
  }
}

export default HiddenContent;
