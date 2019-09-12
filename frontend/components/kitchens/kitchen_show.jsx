import React from 'react';

class KitchenShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAKitchen(this.props.match.params.kitchenId)
  }

  render() {
    return (
      <div className="kitchen-show container">
        <header className="kitchen-show header">
          <img src="https://www.bakefromscratch.com/wp-content/uploads/2017/09/Unknown-3.jpeg" alt="temp_img"/>
        </header>

        <ul className="kitchen-show nav">
          <li>Overview</li>
          <li>Photos</li>
          <li>Menu</li>
          <li>Reviews</li>
        </ul>

        <div className="kitchen-show main-content">
  
        </div>

        <div>
          {/* Search Component */}
        </div>

      </div>
    )
  }
}

export default KitchenShow;