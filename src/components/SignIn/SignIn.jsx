import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try{
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({
              email: '',
              password: ''
          });
        } catch(error){
          console.log(error);
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name] : value
        })

    }

    render(){
        
        const { email, password } = this.state;
      
        const { handleSubmit, handleChange } = this;

        return (
          <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
              <FormInput
                name="email"
                type="email"
                value={email}
                handleChange={handleChange}
                label="email"
                required
              />
              <FormInput
                name="password"
                type="password"
                value={password}
                handleChange={handleChange}
                label="password"
                required
              />

              <div className="buttons">
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton isGoogleSignin onClick={signInWithGoogle}>
                  Sign in with Google
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;