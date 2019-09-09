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
        .then(user => this.props.history.push('/'))
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
    <div>
        <h1>Sign Up</h1>
        { this.renderErrors() }
        <form className="login-in-form" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.first_name}
            onChange={this.handleChange('first_name')}
            placeholder="First Name"
          />
            
          <input 
            type="text"
            value={this.state.last_name}
            onChange={this.handleChange('last_name')}
            placeholder="Last Name"
          />

          <input 
            type="email"
            value={this.state.email}
            onChange={this.handleChange('email')}
            placeholder="Email"
          />

          <input 
            type="password"
            value={this.state.password}
            onChange={this.handleChange('password')}
            placeholder="Password * at least 6 characters"
          />

          <input 
            type="password"
            value={this.state.confirm_password}
            onChange={this.handleChange('confirm_password')}
            placeholder="Confirm Password"
          />

          <button type="submit">Sign Up</button>
          <p><Link to={'/'}>Cancel</Link></p>
          <p>
            <a>Already has an account? </a>
            <Link to={'/login'}>Log In</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default SignUpForm;