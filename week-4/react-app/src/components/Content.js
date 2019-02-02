import React, { Component } from 'react';
import Card from '../components/Card';

class Content extends Component {
  render() {
    const { pics } = this.props;

    return (
      <div className="row">
        {pics.map((pic, index) => {
          const { src, title } = pic;
          return (
            <Card key={index} src={src} title={title} />
          )
        })}
      </div>
    );
  }
}

export default Content;
