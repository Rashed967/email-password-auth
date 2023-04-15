import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
        console.log(email)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(e.target.email.value)
        console.log(e.target.password.value)
    }
    return (
        <div>
            <h3>Register</h3>
            <form onSubmit={submitHandler}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' />
                <br />
                <input onBlur={handlePassword} type="password" name="password" id="password" />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default Register;