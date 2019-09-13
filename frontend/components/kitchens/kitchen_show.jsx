import React from 'react';

import KitchenBasicInfo from './kitchen_basic_info';

class KitchenShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAKitchen(this.props.match.params.kitchenId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.kitchenId !== this.props.match.params.kitchenId) {
      this.props.fetchAKitchen(this.props.match.params.kitchenId)
    }
  }

  render() {
    if (!this.props.kitchen) return null;
    return (
      <div className="kitchen-show container">
        <header className="kitchen-show header">
          <img src="https://www.bakefromscratch.com/wp-content/uploads/2017/09/Unknown-3.jpeg" alt="temp_img"/>
        </header>

        <div className="kitchen-show nav-container">
          <div className="kitchen-show nav">
            <a className="kitchen-show-nav item active" href="#overview">Overview</a>
            <a className="kitchen-show-nav item" href="#photos">Photos</a>
            <a className="kitchen-show-nav item" href="menus">Menu</a>
            <a className="kitchen-show-nav item" href="reviews">Reviews</a>
          </div>
          <div className="slider-bar"></div>
        </div>

        <div className="kitchen-show main-content">
          <h1>{this.props.kitchen.name}</h1>
         
          <KitchenBasicInfo kitchen={this.props.kitchen}/>

          <div className="kitchen-show description">
            <h3>Overview</h3>
            <p>{this.props.kitchen.description}</p>
          </div>

          <div className="kitchen-show description">
            <h3>Menu</h3>
            <p>{this.props.kitchen.menu}</p>
          </div>

          <div className="kitchen-show host-infor">
            <h3>About the host</h3>
            <p>{this.props.kitchen.hostInfor}</p>
          </div>

          <div className="kitchen-show photos">
            <h3>Photos</h3>
            {/* S3 goes hereeeeeeeeee */}
          </div>

          <div className="kitchen-show reviews">
            <h3>Reviews</h3>
            {/* React Component */}
          </div>



        </div>

        <div>
          {/* Search Component */}
        </div>

      </div>
    )
  }
}

export default KitchenShow;