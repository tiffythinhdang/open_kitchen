import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleActiveReviewStar = this.toggleActiveReviewStar.bind(this);
  }

  displayReviewStars() {
    const stars = [1, 2, 3, 4, 5];
    return stars.map(star =>
      <i 
        key={star}
        id={`star${star}`}
        className="review-star" 
        onClick={this.toggleActiveReviewStar}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
      </i>
    )
  }

  getAllStarsFromCurrStar(star){
    let parentNode = star.parentNode;
    return Array.from(parentNode.childNodes);
  }

  getPrevStarIdsFromCurrStar(star) {
    let currentStarNum = parseInt(star.id[4]);
    let prevStarNums = []
    for (let i = 1; i <= currentStarNum; i++) {
      prevStarNums.push(i);
    }
    let prevStarIds = prevStarNums.map(num => `star${num}`);
    return prevStarIds;
  }

  handleMouseEnter(e) {
    let childStars = this.getAllStarsFromCurrStar(e.target);
    let prevStarIds = this.getPrevStarIdsFromCurrStar(e.target); 
    let selectedStars = childStars.filter(star => prevStarIds.includes(star.id));
    selectedStars.forEach(star => star.classList.add("active"));
  }

  handleMouseLeave(e) {
    if ( Array.from(e.target.classList).includes("clicked"))  return;
    let childStars = this.getAllStarsFromCurrStar(e.target);
    let prevStarIds = this.getPrevStarIdsFromCurrStar(e.target); 
    let selectedStars = childStars.filter(star => prevStarIds.includes(star.id) && !Array.from(star.classList).includes("clicked"));
    selectedStars.forEach(star => star.classList.remove("active"));
  }

  toggleActiveReviewStar(e) {
    let currentStarNum = parseInt(e.target.id[4]);

    let childStars = this.getAllStarsFromCurrStar(e.target);
    childStars.forEach(star => {
      star.classList.remove("active");
      star.classList.remove("clicked");
    });

    let prevStarIds = this.getPrevStarIdsFromCurrStar(e.target); 
    let selectedStars = childStars.filter( star => prevStarIds.includes(star.id) );
    selectedStars.forEach(star => {
      star.classList.add("active");
      star.classList.add("clicked");
    });
    
    this.setState({rating: currentStarNum});
  }

  renderErrors() {
    return (
      <ul className="review errors">
        {
          this.props.errors.map((err, i) => (
            <li key={`error-${i}`}>
              {err}
            </li>
          ))
        }
      </ul>
    )
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(res => {
        this.props.toggleCreateReviewForm()
        this.props.fetchReviews(res.review.kitchenId)
      })
  }

  render() {
    return (
      <div className="review-form-outer-container hidden">
        <div className="review-form container">
          { this.renderErrors() }

          <h3>{this.props.formType}</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="review-form rating">
              { this.displayReviewStars() }
            </div>
            <textarea
              className="form input"
              value={this.state.body}
              onChange={this.handleChange('body')}
              placeholder="Write your comment here"
              wrap="true"
            ></textarea>

            <div className="review-form buttons">
              <button
                type="submit"
                className="medium main button">Submit
            </button>
              <p className="link-container">
                <a
                  className="secondary link"
                  onClick={this.props.toggleCreateReviewForm}
                >Cancel
              </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ReviewForm;
