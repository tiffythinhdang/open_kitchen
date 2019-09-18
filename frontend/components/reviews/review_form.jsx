import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit() {

  }

  render() {
    return (
      <div className="review-form-outer-container hidden">
        <div className="review-form container">
          <h3>Leave a Comment</h3>
          <form onSubmit={this.handleSubmit}>
            <textarea
              className="form input"
              value={this.state.body}
              onChange={this.handleChange('body')}
              placeholder="Write your comment here"
              wrap
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