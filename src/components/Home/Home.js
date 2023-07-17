/*
import { useState } from "react";
import LoginScreen from "../LoginScreen/LoginScreen";
import RegisterScreen from "../RegisterScreen/RegisterScreen";
*/
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    /*
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setshowRegister] = useState(false)

    //button to return to Register Screen
    const handleRegister = () => {
        setshowRegister(true);
    }

    if (showRegister) {
        return <RegisterScreen />;
    }

    //button to return to Login Screen
    const handleLogin = () => {
        setShowLogin(true);
    }

    if (showLogin) {
        return <LoginScreen />;
    }
    */

    return (
        <div className='Home'>
            <h1>Home page</h1>
            {/*<button type="button" onClick={handleRegister}>Register</button> <br></br>
            <button type="button" onClick={handleLogin}>Login</button>*/}
            {/*Tem que estilizar a tag Link para se tornar um 'botao'*/}
        </div>
    )
}

export default Home