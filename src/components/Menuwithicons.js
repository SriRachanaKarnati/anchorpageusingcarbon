import React from 'react';
//import { render } from "react-dom";
import {
  Content,
  Header,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react/lib/components/UIShell';
import './Header';
import './style.css';

const StoryContent = () => {
  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <section className="bx--offset-lg-3 bx--col-lg-13">
          <h2
            style={{
              fontWeight: '800',
              margin: '30px 0',
              fontSize: '20px',
            }}
          />
          <p style={{ lineHeight: '20px' }} />
        </section>
      </div>
    </div>
  );

  return <Content id="main-content">{content}</Content>;
};

const Fade16 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    viewBox="0 0 24 24"
    width="16">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

const App = () => (
  <div className="container">
    <>
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={true}
        aria-label="Side navigation">
        <Header />
        <SideNavItems>
          <SideNavMenu title="Getting Started">
            <SideNavMenuItem aria-current="page" href="./Welcome">
              Welcome
            </SideNavMenuItem>
            <SideNavMenuItem href="./Showcase">Showcase</SideNavMenuItem>
            <SideNavMenuItem href="./Startinganewproject">
              Starting a new project
            </SideNavMenuItem>
            <SideNavMenuItem href="./Developerprereading">
              Developer pre reading
            </SideNavMenuItem>
            <SideNavMenuItem href="./Developersetup">
              Developer set up
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="Contributing">
            <SideNavMenuItem href="./Howtocontribute">
              How to contribute
            </SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="./Adaptercodebase">
              Adapter Code Base
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="Contact">
            <SideNavMenuItem aria-current="page" href="./Contact">
              Contact
            </SideNavMenuItem>
          </SideNavMenu>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <SideNavLink
            href="https://github.ibm.com/IBM-Serivces-Essentials-Frameworks/ix-components-angular"
            target="_blank">
            Angular Storybook GIT
            <Fade16 />{' '}
          </SideNavLink>
          <SideNavLink
            href="https://github.ibm.com/IBM-Serivces-Essentials-Frameworks/ess-components"
            target="_blank">
            React Storybook GIT
            <Fade16 />{' '}
          </SideNavLink>
          <SideNavLink
            href="https://github.ibm.com/IBM-Serivces-Essentials-Frameworks/ix-components-vue"
            target="_blank">
            VUE Storybook GIT
            <Fade16 />{' '}
          </SideNavLink>
          <SideNavLink
            href="https://github.ibm.com/IBM-Serivces-Essentials-Frameworks/ess-components-node"
            target="_blank">
            NodeJS Storybook GIT
            <Fade16 />{' '}
          </SideNavLink>
          <SideNavLink
            href="https://www.carbondesignsystem.com/"
            target="_blank">
            Carbon <Fade16 />
          </SideNavLink>
          <SideNavLink
            href="https://launch.boomerangplatform.net/essentials/apps/storybook/ess-components/?path=/docs/welcome--page"
            target="_blank">
            React Storybook
            <Fade16 />{' '}
          </SideNavLink>
          <SideNavLink
            href="https://ix-components-angular.wdc1a.ciocloud.nonprod.intranet.ibm.com/?path=/story/welcome--to-storybook"
            target="_blank">
            Angular Storybook <Fade16 />
          </SideNavLink>
          <SideNavLink
            href="https://ix-components-vue.wdc1a.ciocloud.nonprod.intranet.ibm.com/"
            target="_blank">
            VUE Storybook
            <Fade16 />{' '}
          </SideNavLink>
          <SideNavLink
            href="https://ess-components-node-app.dal1a.ciocloud.nonprod.intranet.ibm.com/api-docs/"
            target="_blank">
            NodeJS Storybook
            <Fade16 />{' '}
          </SideNavLink>
          <SideNavLink
            href="https://ess-graphql-storybook.dal1a.ciocloud.nonprod.intranet.ibm.com/?path=/story/graphql-appliance-customers--all-customers"
            target="_blank">
            GraphQL Storybook
            <Fade16 />{' '}
          </SideNavLink>
        </SideNavItems>
      </SideNav>
      <StoryContent />
    </>
  </div>
);
export default App;
//render(<App />, document.getElementById("root"));
