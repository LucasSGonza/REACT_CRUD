import React, { useState } from 'react';
import LoginScreen from "../LoginScreen/LoginScreen"
import './RegisterScreen.css'
import { newContact } from '../Model/contacts';

const RegisterScreen = () => {

    const [showLogin, setShowLogin] = useState(false);

     //button to return to Register Screen
    const handleLogin = () => {
        setShowLogin(true);
    }

    if (showLogin) {
        return <LoginScreen />;
    }

    return (
        <div className='RegisterScreen'>
            <h1>Cadastro</h1>
            <input type='text' placeholder='First Name' maxlength='10' required id='name'></input> <br></br>
            <input type='text' placeholder='UserName' maxlength='10' required id='username'></input> <br></br>
            <input type='text' placeholder='Password' maxlength='10' required id='password'></input> <br></br>
            <button type="button" onClick={newContact}>Register</button> <br></br>
            <span className="span-changeScreen" onClick={handleLogin}>Já possui cadastro? Clique aqui</span>
        </div>
    )
}

export default RegisterScreen