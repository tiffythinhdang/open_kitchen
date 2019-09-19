// import React from 'react';
// import { Link } from 'react-router-dom';

// class MySavedKitchenIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { kitchenId, kitchenName, rating, imageUrl, cuisine, cost } = this.props.kitchen;
//     return (
//       <div className="saved-kitchen-index item">
//         <Link target="_blank" to={`/kitchens/${kitchenId}`}>
//           <div className="kitchen-img">
//             <img src={imageUrl} alt="" />
//           </div>
//         </Link>

//         <div className="saved-item main-content">
//           <div className="saved-item info">
//             <Link target="_blank" to={`/kitchens/${kitchenId}`}>
//               <div className="kitchen-name">{kitchenName}</div>
//             </Link>
//             <div className="kit-rating">{rating}</div>
//             <div className="kit-cusine">{cuisine}</div>
//             <div className="kit-cost">{cost}</div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default MySavedKitchenIndexItem;