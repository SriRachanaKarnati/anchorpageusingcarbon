import React from 'react';
import Header from './Header';
import './Welcome.css';
import Menuwithicons from './Menuwithicons';
function Whoswho() {
  return (
    <div>
      <Header />

      <div class="wel_side">
        <Menuwithicons />
      </div>
      <div class="wel-mid">
        <div class="wel_banner">EXO Who's who</div>
        <div class="wel-main">
          <strong>
            Welcome to the iX Experience Orchestrator ‘Who's who’ page.
          </strong>
          <br />
          <h3>
            This page introduces some of the people working on EXO (not
            exhaustive!)
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Whoswho;
