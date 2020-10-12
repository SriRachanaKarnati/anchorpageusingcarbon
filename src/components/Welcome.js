import React from 'react';
import Header from './Header';
import './Welcome.css';
import Menuwithicons from './Menuwithicons';
function Welcome() {
  return (
    <div>
      <div>
        {' '}
        <Header />{' '}
      </div>

      <div class="wel_side">
        <Menuwithicons />
      </div>
      <div class="wel-mid">
        <div class="wel_banner">iX Experience Orchestrator</div>
        <div class="wel-main">
          <strong>
            Welcome to the iX Experience Orchestrator ‘Welcome’ page.
          </strong>
          <br />
          <div class="bx-row">
            <div class="Main-module--padded--1EKjR ">
              <p class="Markdown-module--paragraph--1xZR9 ">
                Here you will find resources for developers, designers,
                architects and sellers - or anybody else looking for information
                on iX Experience Orchestrator.
              </p>
              <br />
              <strong> What is IBM UI Garage Assets?</strong>
              <br />
              <p class="Markdown-module--paragraph--1xZR9 ">
                IBM UI Garage Assets are mainly libraries built on Angular
                ,React and Vue in the form of storybooks. This has been created
                keeping in mind having the Industry Specific
                Components/Libraries.These libraries can be installed as npm
                package in your current application .Also we have some
                functionalities based on NodeJS which can be utilized as is.
              </p>
              <br />
              <br />
              <p class="Markdown-module--paragraph--1xZR9 ">
                Together, they enable you to rapidly combine the capabilities of
                all platforms and technologies, create every digital experience
                and business process, and scale up to any size of digital
                ecosystem.
              </p>
              <br />
              <br />
              <p class="Markdown-module--paragraph--1xZR9 ">
                Enables simplified backend integrations, even for complex large
                legacy systems.
              </p>
              <br />
              <p class="Markdown-module--paragraph--1xZR9 ">
                Storybook is a framework that has quickly been adopted as a
                standard platform to develop and demo projects, while seamlessly
                maintaining a living and interactive style guide.
              </p>
              <br />
              <strong>How IBM UI Garage Assets helps learners</strong>
              <br />
              <p class="Markdown-module--paragraph--1xZR9 ">
                Beyond yourself and your team, IBM UI Garage Assets can be a
                huge help to new developers and beginners. Just like when
                onboarding new team members, these assets provides a consistent
                platform to demo components, familiarize yourself with a
                codebase, and interact with community projects.
              </p>
              <p class="Markdown-module--paragraph--1xZR9 ">
                Just like CodeSandbox and Codepen, these story books can be a
                playground to work with complex tooling without diving into
                build requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
