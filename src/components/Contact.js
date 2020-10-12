import React from 'react';
import Header from './Header';
import './Welcome.css';
import Menuwithicons from './Menuwithicons';
function Contact() {
  return (
    <div>
      <Header />

      <div class="wel_side">
        <Menuwithicons />
      </div>
      <div class="wel-mid">
        <div class="wel_banner">Contact</div>
        <div class="wel-main">
          <p class="Markdown-module--paragraph--1xZR9 ">
            To know more about the current assets,please contact Ashwini
            Natarajan (anataraj@in.ibm.com)
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
