import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleActiveReviewStar = this.toggleActiveReviewStar.bind(this);
  }

  displayReviewStars() {
    const stars = [1, 2, 3, 4, 5];
    return stars.map(star =>
      <i 
        key={star}
        className="review-star" 
        onClick={this.toggleActiveReviewStar}>
      </i>
    )
  }

  toggleActiveReviewStar(e) {
    if ( e.target.classList.contains("active") ) {
      e.target.classList.remove("active");
      const newRating = this.state.rating - 1;
      this.setState({ rating: newRating })
    } else {
      e.target.classList.add("active");
      const newRating = this.state.rating + 1;
      this.setState({ rating: newRating })
    }

    // e.target.classList.toggle("active");
    // let rating = document.getElementsByClassName('review-star active');
    // rating = rating.length;
    // this.setState({ rating: rating });
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