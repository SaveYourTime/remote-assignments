import React, { Component } from 'react';
import ContentTitle from '../components/ContentTitle';
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

class MainContent extends Component {
  render() {
    return (
      <div>
        <ContentTitle title="旅客服務專區" />
        <Content className="content" pics={pics} />
      </div>
    );
  }
}

export default MainContent;
