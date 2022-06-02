import React, {useState} from 'react';
import 'antd/dist/antd.min.css';
import Header from "../../../components/header/Header";
import './login.css'
import LoginForm from "../../../components/loginForm/LoginForm";
import {login} from "../../../http/userAPI";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        const response = await login(email, password)
        // setEmail("")
        // setPassword("")
        console.log(response)
    }

    return (
        <>
            <Header/>
            <div className="container">
                <LoginForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    signIn={signIn}
                />
            </div>
        </>
    );
};

export default Login;
