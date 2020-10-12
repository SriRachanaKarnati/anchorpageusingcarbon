import React from 'react';
import Header from './Header';
import './Welcome.css';
import Menuwithicons from './Menuwithicons';
function Showcase() {
  return (
    <div>
      <Header />

      <div class="wel_side">
        <Menuwithicons />
      </div>
      <div class="wel-mid">
        <div class="wel_banner">iX Experience Orchestrator</div>
        <div class="wel-main">
          <strong>Welcome to the IBM UI Garage Assets ‘showcase’ page.</strong>
          <br />
          <br />
          <div class="Markdown-module--paragraph--1xZR9 ">
            <div class="Main-module--padded--1EKjR ">
              <p>
                Here you will find examples of some of the projects that have
                been built using these assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Showcase;
