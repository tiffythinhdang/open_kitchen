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
import ProfileContainer from './dashboard/profile_container';
import MyReservationsContainer from './dashboard/my_reservations_container';
import MySavedKitchens from './dashboard/my_saved_kitchens';
import NoMatch from './nomatch/no_match';

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
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/search" component={SearchContainer} />
        <Route path="/kitchens/:kitchenId" component={KitchenShowContainer} />
        <Route exact path="/reservations/new" component={CreateReservationFormContainer} />
        <Route path="/reservations/:reservationId" component={ReservationShowContainer} />

        <Route path="/my/profile" component={ProfileContainer} />
        <Route path="/my/reservations" component={MyReservationsContainer} />
        <Route path="/my/favorites" component={MySavedKitchens} />
        <Route component={NoMatch} />
      </Switch>
    </Scroll>
    <Footer />
  </HashRouter>
);

export default App;