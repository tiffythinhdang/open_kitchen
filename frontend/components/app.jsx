import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import TopBar from './top_bar/top_bar';

const App = () => (
  <div>
    <TopBar />
  </div>
);

export default App;