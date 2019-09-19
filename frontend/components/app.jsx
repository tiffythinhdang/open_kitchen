import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  withRouter,
  HashRouter,
  BrowserRouter as Router
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import TopBar from './top_bar/top_bar';
import ModalContainer from './modal/modal_container';
import Footer from './footer/footer';
import SearchContainer from './filters/search_container';
import KitchenShowContainer from './kitchens/kitchen_show_container';
import CreateReservationFormContainer from './reservations/create_reservation_form_container';
import ReservationShowContainer from './reservations/reservation_show_container';
import Splash from './splash/splash';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const Scroll = withRouter(ScrollToTop);


const App = () => (
  <HashRouter>
    <ModalContainer />
    <TopBar />
    <Scroll>
      <Route exact path="/" component={Splash} />
      <Route path="/search" component={SearchContainer} />
      <Route path="/kitchens/:kitchenId" component={KitchenShowContainer} />

      <Switch>
        <Route exact path="/reservations/new" component={CreateReservationFormContainer} />
        <Route path="/reservations/:reservationId" component={ReservationShowContainer} />
      </Switch>
    </Scroll>
    <Footer />
  </HashRouter>
);

export default App;