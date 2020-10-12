//import cx from 'classnames';

//import { Search20, Notification20, AppSwitcher20 } from '@carbon/icons-react';

//import { action } from '@storybook/addon-actions';

import React from 'react';
//import { withReadme } from 'storybook-readme';
//import readme from './README.md';
//import HeaderContainer from './HeaderContainer';
import {
  //Content,
  //Header,
  //HeaderMenuButton,
  //HeaderName,
  //HeaderNavigation,
  //HeaderMenu,
  //HeaderMenuItem,
  //HeaderGlobalBar,
  //HeaderGlobalAction,
  //HeaderPanel,
  //HeaderSideNavItems,
  //SkipToContent,
  SideNav,
  // Temporarily comment these out until they are needed again
  // SideNavHeader,
  // SideNavDetails,
  // SideNavSwitcher,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  //Switcher,
  //SwitcherItem,
} from 'carbon-components-react';

class Menu extends React.Component {
  render() {
    return (
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation">
        <SideNavItems>
          <SideNavMenu title="L0 menu">
            <SideNavMenuItem href="https://www.udemy.com/course/javascript-for-beginners-with-examples/">
              L0 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="https://www.udemy.com/course/javascript-for-beginners-with-examples/">
              L0 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="https://www.udemy.com/course/javascript-for-beginners-with-examples/">
              L0 menu item
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="L0 menu" isActive={true}>
            <SideNavMenuItem href="https://www.udemy.com/course/javascript-for-beginners-with-examples/">
              L0 menu item
            </SideNavMenuItem>
            <SideNavMenuItem
              aria-current="page"
              href="https://www.udemy.com/course/javascript-for-beginners-with-examples/">
              L0 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="https://www.udemy.com/course/javascript-for-beginners-with-examples/">
              L0 menu item
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="L0 menu">
            <SideNavMenuItem href="https://www.udemy.com/course/javascript-for-beginners-with-examples/">
              L0 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="https://www.udemy.com/course/javascript-for-beginners-with-examples/">
              L0 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="https://www.udemy.com/course/javascript-for-beginners-with-examples/">
              L0 menu item
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink href="https://www.udemy.com/course/javascript-for-beginners-with-examples/">
            L0 link
          </SideNavLink>
          <SideNavLink href="https://www.udemy.com/course/javascript-for-beginners-with-examples/">
            L0 link
          </SideNavLink>
        </SideNavItems>
      </SideNav>
    );
  }
}
export default Menu;
// FixedSideNav.storyName = 'Fixed SideNav';
