import React from 'react';
import Header from './Header';
import './Welcome.css';
import Menuwithicons from './Menuwithicons';
import { Tabs, Tab } from 'carbon-components-react';
function Introduction() {
  return (
    <div>
      <Header />

      <div class="wel_side">
        <Menuwithicons />
      </div>
      <div class="wel-mid">
        <div class="wel_banner">EXO Frontend Tutorial Introduction </div>
        <br />
        <div>
          <Tabs>
            <Tab label="Overview">
              <p class="Markdown-module--paragraph--1xZR9 ">
                The next few pages and sections will walk you through how to
                start creating components and smart components for EXO, covering
                theming as well.
                <br />
                It is worth noting, a level of knowledge of React.js, the
                ApolloClient and hooks is assumed. Please complete some
                tutorials of your choice to upskill on these, if you feel the
                need.
              </p>
              <br />
            </Tab>
            <Tab label="Stack">
              <div>
                <p class="Markdown-module--paragraph--1xZR9 ">
                  This page explains the core technology choices found in the
                  EXO Frontend monorepo
                </p>
                <p class="Markdown-module--paragraph--1xZR9 ">
                  Core Technology Choices
                </p>
                <br />
                <p class="Markdown-module--paragraph--1xZR9 ">
                  1. Lerna
                  <br />
                  2.styled-components
                  <br />
                  3.Functional react components with React hooks
                  <br />
                  4.Micro-frontends
                  <br />
                </p>
                <p class="Markdown-module--paragraph--1xZR9 ">
                  Some recommended reading on concepts
                </p>
                <p class="Markdown-module--paragraph--1xZR9 ">
                  We recommend taking a look at some of these tutorials, if you
                  haven’t done these already:
                </p>
                <p class="Markdown-module--paragraph--1xZR9 ">
                  - React -{' '}
                  <a href="https://teamtreehouse.com/tracks/learn-react">
                    {' '}
                    (https://teamtreehouse.com/tracks/learn-react)
                  </a>{' '}
                  <br />- Webpack -
                  <a href="https://www.sitepoint.com/webpack-beginner-guide/">
                    {' '}
                    (https://www.sitepoint.com/webpack-beginner-guide/)
                  </a>
                  <br />
                  -Styled Components/CSS in JS -
                  <a href="https://www.robinwieruch.de/react-styled-components">
                    {' '}
                    (https://www.robinwieruch.de/react-styled-components)
                  </a>{' '}
                  <br />
                  -IBM Carbon Components -{' '}
                  <a href="https://www.carbondesignsystem.com/tutorial/react/overview/">
                    (https://www.carbondesignsystem.com/tutorial/react/overview/)
                  </a>{' '}
                  <br />
                  -GraphQL
                  <br />- Apollo Client -
                  <a href="https://www.apollographql.com/docs/tutorial/introduction/">
                    {' '}
                    (https://www.apollographql.com/docs/tutorial/introduction/)
                  </a>
                  <br />
                  -Git -
                  <a href="https://www.atlassian.com/git/tutorials/comparing-workflows">
                    {' '}
                    (https://www.atlassian.com/git/tutorials/comparing-workflows)
                  </a>
                  <br />
                  -Cypress -
                  <a href="https://docs.cypress.io/examples/examples/tutorials.html">
                    {' '}
                    (https://docs.cypress.io/examples/examples/tutorials.html)
                  </a>
                  <br />
                  -React Router -
                  <a href="https://www.codingame.com/playgrounds/6517/react-router-tutorial">
                    (https://www.codingame.com/playgrounds/6517/react-router-tutorial)
                  </a>
                </p>
              </div>
            </Tab>
            <Tab label="Monorepo Structure">
              <p class="Markdown-module--paragraph--1xZR9 ">
                This page explains the frontend monorepo structure
              </p>
              <p class="Markdown-module--paragraph--1xZR9 ">
                Codebase Structure
              </p>
              <ul class="list-style">
                <code>-generator/</code> - generators to scaffold new components
                and apps <br />
                <code>-packages/ </code>
              </ul>
              <br />
              <ul class="list-style">
                <li style={{ align: 'left' }}>
                  <code>apps/ </code>- these are apps pulling together a number
                  of features{' '}
                </li>
              </ul>
              <ul>
                {' '}
                <li style={{ align: 'left' }}>
                  {' '}
                  <code>automotive-commerce/</code> - commerce solution for the
                  automotive industry
                </li>
                <li>
                  <code>b2c-commerce/ </code>- standard B2C commerce storefront
                </li>
              </ul>
              <ul>
                common/
                <li>
                  <p>
                    <code>app-shell/</code> - micro-frontend support{' '}
                  </p>
                </li>
                <li>
                  {' '}
                  <code>server/</code> - server-side code for SSR and CSR
                </li>
                <li>
                  <code>utils/</code> - GraphQL utilities
                </li>
              </ul>
              <ul>
                {' '}
                <code>components/</code> - presentational React components
                <li>
                  <code>automotive/</code> - automotive specific components
                </li>
                <li>
                  {' '}
                  <code>commerce/</code> - commerce components
                </li>
              </ul>
              <ul>
                <code>features/</code>
              </ul>
              <li>
                <code>automotive-content/</code>
              </li>
              <li>
                {' '}
                <code>content-app/</code>
              </li>
              <ul>
                {' '}
                <code>automotive-catalog/</code>
                <li>
                  {' '}
                  <code>catalog-api/</code>
                </li>
                <li>
                  <code> catalog-app/</code>
                </li>
              </ul>
              <ul>
                {' '}
                <code>catalog/</code>
                <li>
                  <code>catalog-api/</code>
                </li>
                <li>
                  <code>catalog-app/</code>
                </li>
              </ul>
              <ul>
                <code>content/</code>
                <li>
                  <code>content-app/</code>
                </li>
              </ul>
              <ul>
                {' '}
                <code>profile /</code>
                <li>
                  {' '}
                  <code>profile-app/</code>
                </li>
                <li>
                  {' '}
                  <code>profile-api/</code>
                </li>
              </ul>
              <ul>
                <code>cart/</code>
                <li>
                  <code>cart-api/</code>
                </li>
                <li>
                  <code>cart-app/</code>
                </li>
              </ul>
              <ul>
                <code>themes/</code>
                <li>
                  <code>automotive-theme/</code>
                </li>
                <li>
                  <code>default-theme/</code>
                </li>
              </ul>
              <ul>
                <code>store /</code>
                <li>
                  {' '}
                  <code>store-api/</code>
                </li>
              </ul>
              <p class="Markdown-module--paragraph--1xZR9 ">Generation</p>

              <p class="Markdown-module--paragraph--1xZR9 ">
                We currently have two generators for the different types of
                packages the monorepo (and one for forms). The first two can be
                accessed by running:
                <br />
                npm run generate
                <br />
                at the root level.
                <br />
                This will allow you to create a component (covered in the
                “Component”) tutorial on this site, or an app. You can choose to
                create the app with either aem integration, or without.
              </p>
            </Tab>
            <Tab label="Environment Vars">
              <p class="Markdown-module--paragraph--1xZR9 ">
                This page explains the frontend environment variables
                <br />
                Given the size of the app, there are a number of environment
                variables, some specific to each commerce engine, and some
                common. They are explained below:
                <br />
                All variabls are explained with a comment on top, and then the
                name, and inline example beneath.
                <br />{' '}
              </p>
              <p class="Markdown-module--paragraph--1xZR9 ">
                B2C Commerce App
                <br />
                Common for all implementations
              </p>
              <p class="Markdown-module--paragraph--1xZR9 ">
                #######################
                <br />
                #<br />
                # Common
                <br />
                #<br />
                #######################
                <br />
                PORT=3300
                <br />
                # Allow SSR to be run on different port to enable simultaneous
                testing
                <br />
                SSR_PORT=3210
                <br />
                # Enabling this will speed up repeated builds, but may have
                unforeseen side-effects
                <br />
                # EXPERIMENTAL_BUILD_CACHE=true
                <br />
                # Enable Compression on the node server, may not be desired in
                some cases
                <br />
                # NODE_CACHING=true
                <br />
                # Enable to prevent sensitive queries in SSR, useful for B2B
                context where queries may need user details to return correct
                details
                <br />
                SKIP_SSR_QUERIES=true
                <br />
                #######################
                <br />
                #<br />
                # GRAPHQL
                <br />
                #<br />
                #######################
                <br />
                # Endpoint of GraphQL Server
                <br />
                GRAPHQL_ENDPOINT=http://localhost:4002/graphql
                <br />
                # Enable to use Apollo Client Batching functionality
                <br />
                GRAPHQL_BATCH=false
                <br />
                #######################
                <br />
                #<br />
                # Theming
                <br />
                #<br />
                #######################
                <br />
                # The theme you wish the app to use, which can be a file path,
                or a git reference, as below
                <br />
                THEME=git+ssh://git@github.ibm.com:ixliberty/ixl-frontend-theme-commerce-ninthfloor.git
                <br />
                # Include additional themes to swap between in demo mode (comma
                separated)
                <br />
                ADDITIONAL_THEMES=git+ssh://git@github.ibm.com:ixliberty/ixl-frontend-theme-commerce-ninthfloor.git,git+ssh://git@github.ibm.com:ixliberty/ixl-frontend-theme-commerce-demo.git
                <br />
                #######################
                <br />
                #<br />
                # PDP
                <br />
                #<br />
                #########################
                <br />
                # If you need to override the varient name, you can use this
                variable
                <br />
                # VARIANT_PRODUCT_NAME="derivative"
                <br />
                #######################
                <br />
                #<br />
                # Nav
                <br />
                #<br />
                #########################
                <br />
                # This determines whether the menu uses the top categories of
                the commerce engine, or whether it uses static data based on the
                nav key
                <br />
                USE_CATEGORIES_FOR_NAVIGATION=true
                <br />
                # This key is used if static data is required for the header
                <br />
                NAV_KEY=automotive
                <br />
                #######################
                <br />
                #<br />
                # CMS Config
                <br />
                #<br />
                #######################
                <br />
                # Path to CMS config to use for integration
                <br />
                CMS_CONFIG=packages/features/content/aem/adapter/lib/AemConfiguration.js
                <br />
                #######################
                <br />
                #<br />
                # Demo Mode
                <br />
                #<br />
                #######################
                <br />
                # Include these to be presented with a list of demo examples to
                swap between in the format (NAME, GRAPHQL_ENDPOINT,
                USE_CATEGORIES_FOR_NAVIGATION, NAV_KEY)
                <br />
                #SWAP_1=sap-demo,https://localhost:4003/graphql,false,demo
                <br />
                #SWAP_2=hcl-usa,https://localhost:4004/graphql,true,automotive
                <br />
                #######################
                <br />
                #<br />
                # Images
                <br />
                #<br />
                #######################
                <br />
                # Placeholder if product image cannot be found
                <br />
                PRODUCT_PLACEHOLDER=/static/images/ixl-b2b/default.jpg
                <br />
                # Extension for static images, if using
                <br />
                IMAGE_EXTENSION=.jpg
                <br />
                #######################
                <br />
                #<br />
                # Tag Manager
                <br />
                #<br />
                #######################
                <br />
                # Google Tag Manager ID
                <br />
                GTMID=********
                <br />
                #######################
                <br />
                #<br />
                # Payments
                <br />
                #<br />
                #######################
                <br />
                # Key for Stripe Integration
                <br />
                STRIPE_PUBLISHABLE_KEY=*****
                <br />
                Specific for AEM Integration, if enabled above
                <br />
                #######################
                <br />
                #<br />
                # AEM Config
                <br />
                #<br />
                #######################
                <br />
                #AEM_ROOT_PATH=/content/carbon-commerce-ssr/en/react
                <br />
                #AEM_APP=carbon-commerce-ssr
                <br />
                #PROXY_FROM=/content/carbon-commerce-ssr
                <br />
                #PROXY_TO=http://localhost:4502
                <br />
                #PROXY_TO=********
                <br />
                Specific for CDN Integration
                <br />
                #######################
                <br />
                #<br />
                # CDN Config
                <br />
                #<br />
                #######################
                <br />
                # The URL of your CDN Endpoint
                <br />
                CDN_URL=https://res.cloudinary.com/di20gbxq3/poc-demo
                <br />
                Specific for SAP Hybris Integration
                <br />
                #######################
                <br />
                #<br />
                # SAP Hybris Config
                <br />
                #<br />
                #######################
                <br />
                CLIENT=ixl-b2b
                <br />
                HYBRIS_LOGIN_URL=*****
                <br />
                AUTH=hybris
                <br />
                CLIENT_SECRET=secret
                <br />
                CLIENT_ID=ixaccelerator
                <br />
                BASE_PRODUCT_TYPE=itemtype:Product
                <br />
              </p>
            </Tab>
          </Tabs>
        </div>
        <div class="wel-main" />
      </div>
    </div>
  );
}
export default Introduction;
