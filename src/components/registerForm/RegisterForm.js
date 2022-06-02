import React from "react";
import {Button, Form, Input} from "antd";


const RegisterForm = ({email, setEmail, password, setPassword, name, setName, surname, setSurname, register}) => {

    const onFinish = () => {
        console.log('Success')
    };

    const onFinishFailed = () => {
        console.log('Failed');
    };

    return (
        <Form
            method="post"
            className="registerForm"
            name="register"
            labelCol={{md: {span: 4, offset: 4}, xs: {span: 24, offset: 0}, sm: {span: 4, offset: 4}}}
            wrapperCol={{span: 8}}

            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{required: true, message: 'Please input your name!'}]}
            >
                <Input value={name}
                       onChange={e => setName(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Surname"
                name="surname"
                rules={[{required: true, message: 'Please input your surname!'}]}
            >
                <Input value={surname}
                       onChange={e => setSurname(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{required: true, message: 'Please input your email!'}]}
            >
                <Input value={email}
                       onChange={e => setEmail(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Form.Item>

            <Form.Item wrapperCol={{md: {span: 4, offset: 8}, xs: {span: 24, offset: 0}, sm: {span: 4, offset: 4}}}>
                <Button type="submit" htmlType="submit" onClick={register}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm
