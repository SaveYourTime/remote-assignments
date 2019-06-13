import React from 'react';

function ShowMoreButton(props) {
  const { onClick } = props;

  return (
    <section className="row-footer">
      <button className="ui button show-more-button" onClick={onClick}>Call to Action</button>
    </section>
  );
}

export default ShowMoreButton;