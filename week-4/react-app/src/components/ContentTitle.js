import React, { Component } from 'react';

class ContentTitle extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="row-title">
        <h2>{title}</h2>
      </div>
    );
  }
}

export default ContentTitle;
