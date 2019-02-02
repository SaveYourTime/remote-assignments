import React, { Component } from 'react';

class ShowMoreButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <section className="row-footer">
        <button className="ui button show-more-button" onClick={onClick}>Call to Action</button>
      </section>
    );
  }
}

export default ShowMoreButton;
