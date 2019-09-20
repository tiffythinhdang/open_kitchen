import React from 'react';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logInDemo = this.logInDemo.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  logInDemo(e) {
    if (e.target.id === "demo-login") {
      let user = {
        email: "demo_user@gmail.com",
        password: "123456"
      }
      this.props.logIn(user)
        .then(user => {
          this.props.closeModal();
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state)
      .then(user => {
        this.props.closeModal();
      }
    )
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
      <div className="log-in modal-alert container">
        <h1>Log In</h1>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input
            id="email-input"
            type="email"
            className="form input"
            value={this.state.email}
            onChange={this.handleChange('email')}
            placeholder="Email"
          />

          <input
            id="password-input"
            type="password"
            className="form input"
            value={this.state.password}
            onChange={this.handleChange('password')}
            placeholder="Password"
          />

          <button 
            type="submit"
            className="large main button">Log In
          </button>
          <button 
            id="demo-login"
            onClick={this.logInDemo}
            className="large secondary button">As Demo User
          </button>
          <p className="link-container">
            <a 
              className="secondary link" 
              onClick={this.props.closeModal}
              >Cancel
            </a>
          </p>
          <p className="link-container">
            <a>New to OpenKitchen?</a>
            &nbsp;
            <a 
              className='main link'
              onClick={ () =>this.props.openModal('showSignUp') }
              >Create an Account
            </a>
          </p>
        </form>
      </div>
    )
  }
}

export default LogInForm;