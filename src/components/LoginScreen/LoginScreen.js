import React, { useState } from 'react';
import RegisterScreen from "../RegisterScreen/RegisterScreen";
import './LoginScreen.css'
import '../Model/contacts'
import { login } from '../Model/contacts';

const LoginScreen = () => {
    const [showRegister, setshowRegister] = useState(false);

    //button to return to Register Screen
    const handleNotRegister = () => {
        setshowRegister(true);
    }

    if (showRegister) {
        return <RegisterScreen />;
    }

    return (
        <div className="LoginScreen">
            <h1>Login</h1>
            <input type='text' placeholder='UserName' maxlength='10' required id='username'></input> <br></br>
            <input type='text' placeholder='Password' maxlength='10' required id='password'></input> <br></br>
            <button type="button" onClick={login}>Login</button> <br></br>
            <span className="span-changeScreen" onClick={handleNotRegister}>Não possui cadastro? Clique aqui</span>
        </div>
    )
}

export default LoginScreen