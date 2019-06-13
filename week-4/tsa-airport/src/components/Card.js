import React from 'react';

function Card(props) {
  const { src, title } = props;

  return (
    <div className="col">
      <div className="card">
        <img src={src} alt="" className="card-img" />
        <div className="card-content">
          <h3 className="card-header">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;