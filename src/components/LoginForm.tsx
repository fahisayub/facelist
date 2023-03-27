import React, { useState } from 'react';
import {
    Box,
    Center,
    FormLabel,
    Heading,
    Input,
} from "@chakra-ui/react";
import LoginButton from './LoginButton';



export interface UserProps {
    username: string,
    password: string,
}

const LoginForm = () => {
    const [form, setForm] = useState<UserProps>({ username: '', password: '' });
    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        let { name, value }: EventTarget & HTMLInputElement = e.target;
        let payload: UserProps = { ...form, [name]: value };
        console.log(payload);
        setForm(payload);
    };

   
    return (
        <Box
            m="auto"
            boxShadow={"lg"}
            borderRadius={"20px"}
            p="20px"
            maxW={['full', "50%"]}
            bgGradient="linear(to-r, orange.100, purple.300)"
            data-cy='login-form'
        >
            <Heading
                textAlign={"center"}
                p="20px"
                bgClip="text"
                bgGradient="linear(to-r, teal.500, green.500)"
                data-cy='login-heading'
            >
                Login
            </Heading>
            <FormLabel>Username</FormLabel>
            <Input
                type={"text"}
                name="username"
                placeholder="Username (eg:foo)"
                onChange={onChangeHandler}
                data-cy='username-input'
            />
            <FormLabel>Password</FormLabel>
            <Input
                type={"password"}
                name="password"
                placeholder="Password (eg:bar)"
                onChange={onChangeHandler}
                data-cy='password-input'
            />
            <Center>
                <LoginButton  form={form} />
            </Center>
        </Box>
    );
};

export default LoginForm;