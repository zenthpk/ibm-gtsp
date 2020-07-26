import React from 'react';

function homebody() {
  return (
    <React.Fragment>
    <div className="ml-5 mr-5 mt-5">
      <div className="attention-catcher ml-5">
        <p>Hey there,</p>
        <p>BearCub!</p>
      </div>
      <div className="attention-catcher-body font-italic ml-5 mt-5">
        <p>&nbsp;Need food for thought?</p>
      </div>
    </div>

    <div className="animated flash infinite slower">
        <a href="#home-articles" className="active-link"><p className="text-center mt-4" ><span>&#8594; </span> Yes, please!</p></a>
    </div>

    <div className="page" id="home-articles">
      <div className="ml-5 mr-5 mb-5">
        <p className="spacer">•</p>
        <h2>Posts</h2>
        <div className="card">
          <div className="card-body">
            8 Experiments in Motivation |&nbsp;
            <a className="read-link" href="./8ExperimentsinMotivation.html">Read</a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            A Mindful Shift of Focus |&nbsp;
            <a className="read-link" href="./AMindfulShiftofFocus.html">Read</a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            How to Develop an Awesome Sense of Direction |&nbsp;
            <a className="read-link" href="./HowtoDevelopanAwesomeSenseofDirection.html">Read</a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            Training to be a Good Writer |&nbsp;
            <a className="read-link" href="./TrainingtobeaGoodWriter.html">Read</a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            What Productivity Systems Won't Solve |&nbsp;
            <a className="read-link" href="./WhatProductivitySystemsWon'tSolve.html">Read</a>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}

export default homebody;
