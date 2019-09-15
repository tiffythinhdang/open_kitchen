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
import Footer from './footer/footer';
import SearchContainer from './filters/search_container';
import KitchenShowContainer from './kitchens/kitchen_show_container';

const App = () => (
  <div>
    <ModalContainer />
    <TopBar />
    <Route path="/search" component={SearchContainer} />
    <Route path="/kitchens/:kitchenId" component={KitchenShowContainer} />
    <Footer />
  </div>
);

export default App;