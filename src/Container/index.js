import React from 'react';

const Container = ({ children }) => (
  <div className="container">
    <div className="card animated fadeIn">
      <div className="card-body">
        <div id="card-content-wrapper">{children}</div>
      </div>
    </div>
  </div>
);

export default Container;
