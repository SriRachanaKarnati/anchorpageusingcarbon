import React from 'react';
import Header from './Header';
import './Welcome.css';
import Menuwithicons from './Menuwithicons';
function Startinganewproject() {
  return (
    <div>
      <Header />

      <div class="wel_side">
        <Menuwithicons />
      </div>
      <div class="wel-mid">
        <div class="wel_banner">Starting a new Project</div>
        <div class="wel-main">
          <div class="Markdown-module--paragraph--1xZR9 ">
            <div class="Main-module--padded--1EKjR ">
              <p>
                So you’re starting a new project? Well, that’s great! We’ve got
                all the tools ready to use so you can hit the ground running.
                <br />
                Depending on your project needs, you may need different
                components or packages. We’ve made it super easy to get started
                by putting all our code into monorepos that you can fork and use
                as the basis for your project.
                <br />
                The benefit of doing this is:
                <br />
              </p>
              <li class="Markdown-module--list-item--32ShB">
                {' '}
                Easy access to all components
              </li>
              <br />
              <li class="Markdown-module--list-item--32ShB">
                {' '}
                Ease of sharing and reusing components, stories
              </li>
              <br />
              <li class="Markdown-module--list-item--32ShB">
                Ease of sharing and reusing components, stories
              </li>
              <br />
              <li class="Markdown-module--list-item--32ShB">
                Highly improved communication between developers and designers…
                …as well as clients!
              </li>
              <br />
              <li class="Markdown-module--list-item--32ShB">
                {' '}
                Improved code quality
              </li>
              <br />
              <li class="Markdown-module--list-item--32ShB">
                {' '}
                Smart debugging
              </li>
              <br />
              <li class="Markdown-module--list-item--32ShB">
                {' '}
                Better documentation
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Startinganewproject;
