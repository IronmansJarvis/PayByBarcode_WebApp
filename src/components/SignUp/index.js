import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import "./index.css";
const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  BuisnessName: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const {  email, passwordOne} = this.state;


    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne )
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.CHECKOUT);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  


  render() {

    const {
      first_name,
      last_name,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      first_name === '' ||
      last_name === '';

    return (
      <div className="signup">
      <form onSubmit={this.onSubmit}>
      <h4>First Name:</h4>
        <input
          name="first name"
          value={first_name}
          onChange={this.onChange}
          type="text"
          placeholder="First Name"
        />
        <h4>Last Name:</h4>

        <input
        name="LastName"
        value={last_name}
        onChange={this.onChange}
        type="text"
        placeholder="Last Name"
      />
      <h4>Email:</h4>

        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <h4>Password:</h4>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <h4>Retype Password:</h4>
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <h7 style={{margin:'3%'}}>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </h7>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
