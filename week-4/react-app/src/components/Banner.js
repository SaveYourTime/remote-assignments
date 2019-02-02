import React, { Component } from 'react';

class Banner extends Component {
  render() {
    const { headline, tagline, onClick } = this.props;
    
    return (
      <div className="banner" onClick={onClick}>
        <h1 className="headline">{headline}</h1>
        <span className="tagline">{tagline}</span>
      </div>
    );
  }
}

export default Banner;
