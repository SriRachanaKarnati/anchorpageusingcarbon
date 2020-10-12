import React from 'react';
import Header from './Header';
import './Welcome.css';
import Menuwithicons from './Menuwithicons';
import { ClickableTile } from 'carbon-components-react';

function Developerprereading() {
  return (
    <div>
      <Header />

      <div class="wel_side">
        <Menuwithicons />
      </div>
      <div class="wel-mid">
        <div class="wel_banner">Recommended pre-reading and activities</div>
        <div class="wel-main">
          <div class="Markdown-module--paragraph--1xZR9 ">
            <div class="Main-module--padded--1EKjR ">
              <p>
                This section includes a number of recommended resources to help
                you get started with React, Carbon and GraphQL
              </p>
              <br />
              <strong>Introduction</strong>
              <br />

              <p>
                They are arranged roughly in a left - right order of which one
                should be completed first, but it is also entirely possible to
                accquire this knowledge from other means, so please don’t feel
                like you have to complete all of them. Thanks to the large
                amount of content, there is a step learning curve from the first
                to the last piece of pre-reading, so please don’t be too hard on
                yourself 😄 If you are having problems with any of the Udemy
                courses, please ensure you have a business license, and contact
                Jonathan Bales if not, or for further support:
                jonathan.p.bales@us.ibm.com
              </p>
              <strong>Common</strong>
              <div class="bxcntr">
                <div class="inbox">
                  <strong>Javascript</strong>
                  <br />
                  <ClickableTile
                    href="https://www.udemy.com/course/javascript-for-beginners-with-examples/"
                    target="_blank"
                    Javascript>
                    {' '}
                    Beginners introduction to Javascript
                  </ClickableTile>
                </div>
                <div class="inbox">
                  <strong>NPM</strong>
                  <br />
                  <ClickableTile
                    href="https://github.com/foundersandcoders/npm-introduction"
                    target="_blank">
                    Node Package Manager
                  </ClickableTile>
                </div>
                <div class="inbox">
                  <strong>GIT</strong>
                  <br />
                  <ClickableTile
                    href="https://www.atlassian.com/git/tutorials/comparing-workflows"
                    target="_blank">
                    GIT Workflows and Terminology
                  </ClickableTile>
                </div>
              </div>
              <div class="bxcntr">
                <div class="inbox">
                  <strong>Git</strong>
                  <br />
                  <ClickableTile
                    href="https://learngitbranching.js.org/"
                    target="_blank">
                    Practising Git Commands
                  </ClickableTile>
                </div>
                <div />
                <div class="inbox">
                  <strong>React</strong>
                  <br />
                  <ClickableTile
                    href="https://www.udemy.com/course/react-js-and-redux-mastering-web-apps/"
                    target="_blank">
                    React Introduction
                  </ClickableTile>
                </div>
                <div class="inbox">
                  <strong>React,GraphQL and Carbon</strong>
                  <br />
                  <ClickableTile
                    href="https://www.carbondesignsystem.com/developing/react-tutorial/overview/"
                    target="_blank">
                    IBM Carbon and Angular, React,Vue(Badge available!)
                  </ClickableTile>
                </div>
              </div>
              <div class="bxcntr">
                <div class="inbox">
                  <strong>Full Stack</strong>
                  <br />
                  <ClickableTile
                    href="https://www.apollographql.com/docs/tutorial/introduction/"
                    target="_blank">
                    Graph QL and React Tutorial
                  </ClickableTile>
                </div>
              </div>
              <strong>Front-end</strong>
              <div class="bxcntr">
                <div class="inbox">
                  <strong>Styled Components</strong>
                  <br />
                  <ClickableTile
                    href="https://www.robinwieruch.de/react-styled-components"
                    target="_blank">
                    Styled Component Overview(Just Reading)
                  </ClickableTile>
                </div>
                <div class="inbox">
                  <strong>Testing</strong>
                  <br />
                  <ClickableTile
                    href="https://testingjavascript.com/"
                    target="_blank">
                    Kent Dodd:Testing Javascript overview(just reading)
                  </ClickableTile>
                </div>
              </div>
              <strong>Adapter</strong>
              <div class="bxcntr">
                <div class="inbox">
                  <strong>Graph QL</strong>
                  <br />
                  <ClickableTile
                    href="https://www.apollographql.com/docs/apollo-server/getting-started/"
                    target="_blank">
                    Apollo Server Tutorial
                  </ClickableTile>
                </div>
                <div class="inbox">
                  <strong>React,GraphQL</strong>
                  <br />
                  <ClickableTile
                    href="https://hasura.io/learn/graphql/react/introduction/"
                    target="_blank">
                    Graph QL and React Tutorial-a bit more theory!
                  </ClickableTile>
                </div>
              </div>
              <strong>IBM Cloud, Red Hat, Docker…Kubernetes!</strong>
              <div class="bxcntr">
                <div class="inbox">
                  <strong>Cloud</strong>
                  <br />
                  <ClickableTile
                    href="https://developer.ibm.com/depmodels/cloud/articles/cl-cloudintro/"
                    target="_blank">
                    IBM cloud Fundamentals and Theory
                  </ClickableTile>
                </div>
                <div class="inbox">
                  <strong>Cloud</strong>
                  <br />
                  <ClickableTile
                    href="https://w3.ibm.com/w3publisher/dsa-digital-skills-academy/modules/cloud"
                    target="_blank">
                    DSA Introduction to cloud slides and exercise
                  </ClickableTile>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Developerprereading;
