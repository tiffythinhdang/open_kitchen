import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import TopBar from './top_bar/top_bar';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <ModalContainer />
    <TopBar />
  </div>
);

export default App;