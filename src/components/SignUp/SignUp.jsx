import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument  } from '../../firebase/firebase.utils';

import './SignUp.styles.scss';

class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event, password, confirmPassword, email, displayName) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
              displayName: "",
              email: "",
              password: "",
              confirmPassword: ""
            });

        }catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value})
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        const { handleSubmit, handleChange} = this;
        return (
          <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form
              className="sign-up-form"
              onSubmit={handleSubmit}
            >
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleChange}
                label="Display Name"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                required
              />
              <CustomButton type="submit">
                  SIGN UP
              </CustomButton>
            
            </form>
          </div>
        );
    }
}

export default SignUp;

