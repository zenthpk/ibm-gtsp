import React from 'react';
import './App.css';
import Header from './header.js';
import Homebody from './homebody.js';
import Aboutbody from './aboutbody.js';
import Contactbody from './contactbody.js';
import Post1 from './post1.js';
import Post2 from './post2.js';
import Post3 from './post3.js';
import Post4 from './post4.js';
import Post5 from './post5.js';
import Footer from './footer.js';

class App extends React.Component {
  constructor(props) {
      super(props)
      // here's the special sauce: window.location.pathname gives you the path of the current url outside of the domain.
      // For example, if your current url is "localhost:3000/page2", window.location.pathname will equal "/page2"
      this.state = {'currentPage':  window.location.pathname }
  }
  render() {
  console.log(this.state.currentPage)
  return (
    <div className="App">
      <Header></Header>
      {(this.state.currentPage==="/" || this.state.currentPage==="/home.html") && (<Homebody/>)}
      {this.state.currentPage==="/about.html" && (<Aboutbody/>)}
      {this.state.currentPage==="/contact.html" && (<Contactbody/>)}
      {this.state.currentPage==="/8ExperimentsinMotivation.html" && (<Post1/>)}
      {this.state.currentPage==="/AMindfulShiftofFocus.html" && (<Post2/>)}
      {this.state.currentPage==="/HowtoDevelopanAwesomeSenseofDirection.html" && (<Post3/>)}
      {this.state.currentPage==="/TrainingtobeaGoodWriter.html" && (<Post4/>)}
      {this.state.currentPage==="/WhatProductivitySystemsWon'tSolve.html" && (<Post5/>)}
      <Footer></Footer>
    </div>
  );
}
}

export default App;
