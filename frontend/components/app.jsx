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
import SearchPage from './search_page';
import KitchenShowContainer from './kitchens/kitchen_show_container';

const App = () => (
  <div>
    <ModalContainer />
    <TopBar />
    <Route path="/search" component={SearchPage} />
    <Route path="/kitchens/:kitchenId" component={KitchenShowContainer} />
    <Footer />
  </div>
);

export default App;