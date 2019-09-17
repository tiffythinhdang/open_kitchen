import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import TopBar from './top_bar/top_bar';
import ModalContainer from './modal/modal_container';
import Footer from './footer/footer';
import SearchContainer from './filters/search_container';
import KitchenShowContainer from './kitchens/kitchen_show_container';
import CreateReservationFormContainer from './reservations/create_reservation_form_container';
import ReservationShowContainer from './reservations/reservation_show_container';

const App = () => (
  <div>
    <ModalContainer />
    <TopBar />
    <Route path="/search" component={SearchContainer} />
    <Route path="/kitchens/:kitchenId" component={KitchenShowContainer} />

    <Switch>
      <Route exact path="/reservations/new" component={CreateReservationFormContainer} />
      <Route path="/reservations/:reservationId" component={ReservationShowContainer} />
    </Switch>

    <Footer />
  </div>
);

export default App;