import React from 'react';

function Banner(props) {
  const { headline, tagline, onClick } = props;

  return (
    <div className="banner" onClick={onClick}>
      <h1 className="headline">{headline}</h1>
      <span className="tagline">{tagline}</span>
    </div>
  );
}

export default Banner;