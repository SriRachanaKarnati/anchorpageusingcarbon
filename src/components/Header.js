// ------------------------------------------------
// PLEASE DO NOT EDIT. FORK IF YOU NEED TO MODIFY.
// ------------------------------------------------

import React from 'react';
//import { render } from "react-dom";
import {
  Header,
  HeaderName,
} from 'carbon-components-react/lib/components/UIShell';

import './style.css';

const App = () => (
  <div className="container">
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        UI Garage Assets
      </HeaderName>
    </Header>
  </div>
);
export default App;
//render(<App />, document.getElementById("root"));
