import React from 'react';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.logIn(this.state)
      .then(user => this.props.history.push('/'))
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
        <h1>Log In</h1>
        {this.renderErrors()}
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
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
            placeholder="Password"
          />

          <button type="submit">Log In</button>
          <p><Link to={'/'}>Cancel</Link></p>
          <p>
            <a>New to OpenKitchen? </a>
            <Link to={'/signup'}>Create an Account</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default LogInForm;