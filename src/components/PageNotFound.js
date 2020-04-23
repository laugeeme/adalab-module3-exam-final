/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <React.Fragment>
      <div> 404 Page not found </div>
      <Link to="/">Back</Link>
    </React.Fragment>
  );
};

export default PageNotFound;
