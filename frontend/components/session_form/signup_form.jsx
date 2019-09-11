import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: ""
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.password !== this.state.confirm_password) {
      alert ("Passwords don't match");
    } else {
      this.props.signUp(this.state)
        .then(user => {
          this.props.closeModal();
          }
        )
    }
  }

  renderErrors() {
    return (
      <ul className="errors">
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

  render() {
    return (
      <div className="sign-up modal-alert container">
        <h1>Sign Up</h1>
        { this.renderErrors() }
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            className="form input"
            value={this.state.first_name}
            onChange={this.handleChange('first_name')}
            placeholder="First Name"
          />
            
          <input 
            type="text"
            className="form input"
            value={this.state.last_name}
            onChange={this.handleChange('last_name')}
            placeholder="Last Name"
          />

          <input 
            type="email"
            className="form input"
            value={this.state.email}
            onChange={this.handleChange('email')}
            placeholder="Email"
          />

          <input 
            type="password"
            className="form input"
            value={this.state.password}
            onChange={this.handleChange('password')}
            placeholder="Password * at least 6 characters"
          />

          <input 
            type="password"
            className="form input"
            value={this.state.confirm_password}
            onChange={this.handleChange('confirm_password')}
            placeholder="Confirm Password"
          />

          <button 
            type="submit"
            className="large main button">Sign Up
          </button>
          <p className="link-container">
            <a
              className="secondary link"
              onClick={this.props.closeModal}
              >Cancel
            </a>
          </p>
          <p className="link-container">
            <a>Already has an account?</a>
            &nbsp;
            <a
              className='main link'
              onClick={() => this.props.openModal('showLogIn')}
            >Log In
            </a>
          </p>
        </form>
      </div>
    )
  }
}

export default SignUpForm;