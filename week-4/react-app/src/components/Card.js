import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { src, title } = this.props;
    
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
}

export default Card;
