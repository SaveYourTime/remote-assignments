import React from 'react';
import Card from '../components/Card';

function Content(props) {
  const { pics } = props;
  const cards = pics.map((pic, index) => <Card key={index} src={pic.src} title={pic.title} />);
  
  return (
    <div className="row">{cards}</div>
  );
}

export default Content;