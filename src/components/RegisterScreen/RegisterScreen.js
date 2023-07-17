//Os códigos comentados são outra opção para a troca do componente a ser visualizado (lembrando que isto é uma SPA - Single Page Application)
/*
import React, { useState } from 'react';
import LoginScreen from "../LoginScreen/LoginScreen"
import Home from '../Home/Home';
*/
import './RegisterScreen.css'
import { newUser } from '../Model/users';
import { Link } from 'react-router-dom';


const RegisterScreen = () => {

    /*
    const [showLogin, setShowLogin] = useState(false);
    const [showHome, setShowHome] = useState(false);

    //button to return to Register Screen
    const handleLogin = () => {
        setShowLogin(true);
    }

    if (showLogin) {
        return <LoginScreen />;
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
        <div className='RegisterScreen'>
            <h1>Cadastro</h1>
            <input type='text' placeholder='First Name' maxLength='10' required id='name'></input> <br></br>
            <input type='text' placeholder='UserName' maxLength='10' required id='username'></input> <br></br>
            <input type='password' placeholder='Password' maxLength='10' required id='password'></input> <br></br>
            <button type="button" onClick={newUser}>Register</button> <br></br>
            {/*<span className="span-changeScreen" onClick={handleLogin}>Já possui cadastro? Clique aqui</span> <br/>
            <span className="span-changeScreen" onClick={handleHome}>Retornar para Home</span>*/}
            <Link className="link-changeScreen" to={"/login"}>Já possui cadastro? Clique aqui</Link> <br/>
            <Link className="link-changeScreen" to={"/home"}>Retornar para Home</Link>
        </div>
    )
}

export default RegisterScreen