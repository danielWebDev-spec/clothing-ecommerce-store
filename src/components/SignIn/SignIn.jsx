import React from 'react';

import FormInput from '../FormInput/FormInput';

import './SignIn.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    // Methods
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name] : value
        })

    }

    render(){
        // Default State(s)
        const { email, password } = this.state;
        // Methods
        const { handleSubmit, handleChange } = this;

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email' 
                        value={email}
                        handleChange={handleChange}
                        label='email' 
                        required 
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />

                    <input type="submit" value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;