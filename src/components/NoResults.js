import React from 'react';

const NoResults = (props) => {
  return (
    <div className="noResults-container">
      There are no results for: "{props.inputValue}"
    </div>
  );
};

export default NoResults;
