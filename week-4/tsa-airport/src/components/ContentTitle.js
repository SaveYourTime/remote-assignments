import React from 'react';

function ContentTitle(props) {
  const { title } = props;
  
  return (
    <div className="row-title">
      <h2>{title}</h2>
    </div>
  );
}

export default ContentTitle;