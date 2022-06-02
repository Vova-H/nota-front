import React, {useState} from 'react';
import 'antd/dist/antd.min.css';
import RegisterForm from "../../../components/registerForm/RegisterForm";
import Header from "../../../components/header/Header";
import {registration} from "../../../http/userAPI";
import './register.css'


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const register = async () => {
        await registration(name, surname, email, password);
        // setEmail("")
        // setPassword("")
        // setName("")
        // setSurname("")
    }
    return (
        <>
            <Header/>
            <div className="container">
                <RegisterForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    name={name}
                    setName={setName}
                    surname={surname}
                    setSurname={setSurname}
                    register={register}
                />
            </div>
        </>
    );
};

export default Register;
