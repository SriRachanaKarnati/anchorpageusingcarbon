import React from 'react';
import Header from './Header';
import './Welcome.css';
import Menuwithicons from './Menuwithicons';
import { Tabs, Tab, CopyButton } from 'carbon-components-react';
function Components() {
  return (
    <div>
      <Header />

      <div class="wel_side">
        <Menuwithicons />
      </div>
      <div class="wel-mid">
        <div class="wel_banner">EXO Frontend Component Tutorial </div>
        <br />
        <div>
          <Tabs>
            <Tab label="Overview">
              <p class="Markdown-module--paragraph--1xZR9 ">
                This page introduces our component tutorial.
              </p>
              <br />
              <strong>Overview</strong>
              <br />
              <p class="Markdown-module--paragraph--1xZR9 ">
                We have, broadly speaking, two different types of components in
                EXO: presentational and smart. Presentational components do what
                they say on the tin, taking care of the presentation of data,
                images or other content. They are the outmost layer of a
                component and are styled, themed, and commonly snapshot testsed.
                <br />
                This section of the tutorial looks at an example of an EXO
                presentation component, and explains the theory behind creating
                your own component.{' '}
              </p>
              <strong>Where do I find the component packages?</strong>
              <p class="Markdown-module--paragraph--1xZR9 ">
                If we refer back to the monorepo structure in the introduction
                section, you can see that under the ./packages/ directory, we
                have a directory /components. In here are the components.
                <br />
                They are split currently into 4 areas: core (components that are
                likely to be used on any app), commerce (a collection of
                components for use in commerce apps), content (richer
                components, centered more on authored content) and automotive
                (components for, you guessed it, an automotive app).
                <br />
                The storybook (which you can find at the bottom of the left hand
                nav) follows this same grouping, making it easy to find a
                component before you use it.
              </p>
              <br />
              <strong>The anatomy of a component</strong>
              <p class="Markdown-module--paragraph--1xZR9 ">
                Each component in these packages is it’s own directory with a
                number of files. Why, you ask? Surely a component is just a
                piece of jsx and that’s that? Not quite!
                <br />
                It’s important to take the time to explain each of the files.{' '}
                <br />
                ../MyEXOComponent/MyEXOComponent.js:
                <br />
                This is the “main” file of the component. Here the component is
                defined, exported and where the jsx of the component lives. All
                of the EXO components of this type are written as functional
                react components (if you aren’t familiar with this, it’s
                definitely something worth reading up on).
                <br />
                ../MyEXOComponent/MyEXOComponent.stories.js:
                <br />
                This registers the component’s stories (see the pattern?), using
                the latest Storybook V6 format. This is explained and
                tutorialized here:{' '}
                <a href="https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/">
                  https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/
                </a>
                <br />
                ../MyEXOComponent/MyEXOComponent.styles.js:
                <br />
                This is where all the styles for the component are defined, and
                all exported. We used styled-components, a form of CSS in JS, to
                provide our styling, and this again is documented and
                tutorialised here:
                https://styled-components.com/docs/basics#getting-started in
                excellent documentation that even has live editor support!
                <br />
                If you need to swat up on CSS in general, there are some
                excellent tutorials on Udemy, or free ones on popular sites such
                as W3Schools. <br /> The motivation behind seperating these into
                a seperate file is basically to ensure that the component itself
                remains as clean as possible, and it also aids debugging, where
                you can see at the top of the component file we do this:
                <br />
                import * as S from './MyEXOComponent.styles';
                <br />
                This then allows us to use one of the styled elements like this:
                Hey world!. All presentational components should already use
                this structure, but we are working on others:
                <a href="https://github.ibm.com/ixliberty/ixl-frontend/issues/936">
                  {' '}
                  https://github.ibm.com/ixliberty/ixl-frontend/issues/936.
                </a>{' '}
                If you see any, or want to fix any, please do!
                <br />
                ../MyEXOComponent/MyEXOComponent.test.js:
                <br />
                Ah the test file, similarly helpfully named! We use React
                Testing Library and Jest to test our components (both of which
                come with extensive documentation and tutorials) and the most
                common style of test you will see for a presentational component
                is:
                <br />
                <br />
                This is what is known as a snapshot test, and will fail if
                anything has changed in the render component. This not the best
                way to test a component explicitly, as most components also have
                an element of functionality.
                <br />
                If you think about a button, as well as testing that it renders
                correctly, you will also want to teset that when you click on
                it, the click function is called (this is a simplistic example,
                but hopefully helps illustrate the point).
                <br />
                Therefore, we are continuing to work on improving test coverage,
                but the vast majority of the components, particularly those that
                are presentational, should already be at least snapshot tested.
                For more information on this, please seeing the “Testing”
                section in “Additonal Topics” which goes into a lot more detail.
                <br />
                ../MyEXOComponent/MyEXOComponent.theme.js:
                <br />
                The theme file is perhaps the most ambigious file. This is
                imported into the ../MyEXOComponent/MyEXOComponent.styles.js
                file, like this: import theme from './MyEXOComponent.theme';.{' '}
                <br />
                This allows a value for a CSS property to be pulled from a
                theme, if it is overridden or otherwise - slightly complicated
                right? So let’s dive in. <br />
                Consider…
                <br />
                ../MyEXOComponent/MyEXOComponent.styles.js:
                <br />
                import styled from 'styled-components';
                <br />
                import theme from './MyEXOComponent.theme';
                <br />
                export const ColoredDiv = styled('div')`
                <br />
                cursor: pointer;
                <br />
                `;
                <br />
                ../MyEXOComponent/MyEXOComponent.theme.js: <br />
                <br />
                Or not so much…when the color appears to be something called…
                interactive01 - and that’s not a shade of paint you can pick up
                from your local DIY store!
                <br />
                What exactly is interactive01, or ui01 for that matter? Well,
                they are variables taken from the EXO theme, provided by a
                global ThemeProvider, building on top of the ThemeProvider from
                styled-components. It is worth reading up on this if you are not
                already famailar.
                <br />
                Now, you might be thinking, “that’s great, but why don’t we just
                do something like:” <br />
                ../MyEXOComponent/MyEXOComponent.styles.js:
                <br />
                import styled from 'styled-components';
                <br />
                import theme from './MyEXOComponent.theme';
                <br />
                export const ColoredDiv = styled('div')`
                <br />
                background-color: ${props => props.theme.ui01};<br />
                color: ${props => props.theme.interactive01};<br />
                cursor: pointer;
                <br />
                `; “and ditch the theme file altogether?” - and that’s a good
                thing to be thinking because it means you’ve understood the
                ThemeProvider concept!
                <br />
                But, as the comment included in the example
                ../MyEXOComponent/MyEXOComponent.theme.js above suggests, the
                theme file is critical for overriding. It means that when you
                create a theme (as covered in the “Themeing” section of this
                tutorial) in your base file you can can override on a component
                by component basis. <br />
                So although our MyEXOComponent (catchy!) above will default to
                ui01 or interactive01 for those properties, we can go and
                override for one specific theme, for example making sure you get
                just the right shade of blue, when creating an IBM theme! <br />
                Please do read up on the “Themeing” section of this tutorial to
                understand more about how this works.
                <br />
                ../MyEXOComponent/__snapshots__/**:
                <br />
                The snapshots directory is worth just mentioning off of the back
                of the test file we discussed earlier. This prints the result of
                the snapshot, which jest can use to compare against a new
                snapshot.
                <br />A quick explaination of the theory behind this, is here:
                <a href="https://jestjs.io/docs/en/snapshot-testing">
                  {' '}
                  https://jestjs.io/docs/en/snapshot-testing
                </a>
              </p>
            </Tab>
            <Tab label="Component Walkthrough">
              <p class="Markdown-module--paragraph--1xZR9 ">
                This page walks through a component, a fairly simple one, but
                adds a real life touch to the previous explanation
                <br />
              </p>
              <strong>Overview</strong>
              <p class="Markdown-module--paragraph--1xZR9 ">
                The idea behind this walkthrough of two of our components, is
                that it will show that the principles outlined in the page
                before are being followed, and so you can see it all in action!
                Let’s go…
                <br />
                packages/components/core/src/Subscribe
                <br />
                This component is in the footer, the subscrible text box, with
                attached button. Here is the component in Storybook:
                <a href="https://storybook-route-exo-dev.uki-commerce-clus-382893-ed73e322e3ea12289f5ccd3b2effe14c-0000.eu-gb.containers.appdomain.cloud/?path=/story/core-subscribe—normal">
                  {' '}
                  https://storybook-route-exo-dev.uki-commerce-clus-382893-ed73e322e3ea12289f5ccd3b2effe14c-0000.eu-gb.containers.appdomain.cloud/?path=/story/core-subscribe—normal
                </a>
                And in action: <br />
                <br />
                Subscribe Component
                <br />
                The remit of this component is to do nothing other than render
                the TextInput and Button from carbon-components and style them.
                It will also accept a prop for onSubmit, and save the email to
                state to allow submission.
                <br />
                Hopefully that makes sense? <br />
                It is also worth noting here the use carbon-components. This is
                one of the IBM component libraries, and it utilised extensively
                in EXO. It is highly recommended that you familiarise yourself
                with carbon-components before reading these tutorials, and also
                worth completing the carbon-components, React and GraphQL
                tutorial.
                <br />
                Okay so let’s take a look, and do our line by line walkthrough:
                <br />
                packages/components/core/src/Subscribe/Subscribe.js:
                <br />
                /* Licensed Materials - Property of IBM
                <br />
                694906H
                <br />
                (c) Copyright IBM Corp. 2020 All Rights Reserved
                <br />
                US Government Users Restricted Rights - Use, duplication or
                disclosure restricted
                <br />
                by GSA ADP Schedule Contract with IBM Corp.
                <br />
                */
                <br />
                You’ve probably noticed the above appearing on all of our files.
                This is requirement of the licensing of EXO, and should be
                automatically created when you add a new file.
                <br />
                import React, useState from 'react'; import PropTypes from
                'prop-types'; import TextInput, Button from
                'carbon-components-react'; import * as S from
                './Subscribe.styles';
                <br />
                Our import statements are quite self explanatory: we see the
                standard React and PropTypes imports, and also the
                Subscribe.styles import we would expect to see. <br />
                We also see the TextInput and Button imported from
                carbon-components-react, as talked about above. To see exactly
                what these components are, take a look here:{' '}
                <a href="https://react.carbondesignsystem.com/?path=/story/*">
                  https://react.carbondesignsystem.com/?path=/story/*
                </a>
                <br />
                Above, is the main body of the component. This has the useState
                hook used for the email (worth reading up on this if you are not
                familiar with this, but it is standard notation for a functional
                component).
                <br />
                There is then the defintion of a handleSubmit function, which
                further down is passed to the button. <br />
                Within the return statement, there is: S.Subscribe, TextInput
                and Button.
                <br />
                TextInput and Button are both passed props inline with their
                functionality from Carbon, and we can look at the S.Subscribe
                when we look into the styles file.{' '}
              </p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
export default Components;
