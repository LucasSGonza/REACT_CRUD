/*
import React, { useState } from 'react';
import RegisterScreen from "../RegisterScreen/RegisterScreen";
import Home from '../Home/Home';
*/
import './LoginScreen.css'
import { login } from '../Model/users';
import { Link } from 'react-router-dom';


const LoginScreen = () => {
    /*
    const [showRegister, setshowRegister] = useState(false);
    const [showHome, setShowHome] = useState(false);

    //button to return to Register Screen
    const handleNotRegister = () => {
        setshowRegister(true);
    }

    if (showRegister) {
        return <RegisterScreen />;
    }


    //button to return to Home Page
    const handleHome = () => {
        setShowHome(true);
    }

    if (showHome) {
        return <Home />;
    }
    */

    return (
        <div className="LoginScreen">
            <h1>Login</h1>
            <input type='text' placeholder='UserName' maxLength='10' id='username'></input> <br></br>
            <input type='password' placeholder='Password' maxLength='10' id='password'></input> <br></br>
            <button type="button" onClick={login}>Login</button> <br></br>
            {/*<span className="span-changeScreen" onClick={handleNotRegister}>Não possui cadastro? Clique aqui</span> <br></br>
            <span className="span-changeScreen" onClick={handleHome}>Retornar para Home</span>*/}
            <Link className="link-changeScreen" to={"/register"}>Não possui cadastro? Clique aqui</Link> <br></br>
            <Link className="link-changeScreen" to={"/home"}>Retornar para Home</Link>
        </div>
    )
}

export default LoginScreen