import React from 'react';

function header() {
  return (
    <header className="page-header">
      <div className="row mt-4 ml-5 mr-5">
        <h1 className="col-1">BearsBlog</h1>
        <p className="col-11 nav-bar-header"><a className="active-link" href="./home.html">Home</a>
        <a>&nbsp;&nbsp;</a>
        <a href="./about.html" className="active-link">About</a>
        <a>&nbsp;&nbsp;</a>
        <a href="./contact.html" className="active-link">Contact</a></p>
      </div>
    </header>
  );
}

export default header;
