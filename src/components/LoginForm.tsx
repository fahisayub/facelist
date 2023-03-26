import React, { useState } from 'react';
import {
    Box,
    Center,
    FormLabel,
    Heading,
    Input,
    useToast,
} from "@chakra-ui/react";
import LoginButton from './LoginButton';
import { useDispatch } from 'react-redux';
import { loginApi } from '../store/authReducer/auth.actions';


export interface UserProps {
    username: string,
    password: string,
}

const LoginForm = () => {
    const [form, setForm] = useState<UserProps>({ username: '', password: '' });
    const dispatch: any = useDispatch();
    const toast: any = useToast();

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        let { name, value }: EventTarget & HTMLInputElement = e.target;
        let payload: UserProps = { ...form, [name]: value };
        console.log(payload);
        setForm(payload);
    };

    const onLoginHandler = () => {
        if (form.username === "foo" && form.password === "bar") {
            dispatch(loginApi(form)).then(() =>
                toast({
                    title: "Login Success.",
                    description: `Welcome ${form.username}, you have successfully logged in`,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                })
            );
        } else {
            toast({
                title: "Login failed",
                description: "Invalid username or password",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        }
    };
    return (
        <Box
            m="auto"
            boxShadow={"lg"}
            borderRadius={"20px"}
            p="20px"
            maxW={['full', "50%"]}
            bgGradient="linear(to-r, orange.100, purple.300)"
        >
            <Heading
                textAlign={"center"}
                p="20px"
                bgClip="text"
                bgGradient="linear(to-r, teal.500, green.500)"
            >
                Login
            </Heading>
            <FormLabel>Username</FormLabel>
            <Input
                type={"text"}
                name="username"
                placeholder="Username (eg:foo)"
                onChange={onChangeHandler}
            />
            <FormLabel>Password</FormLabel>
            <Input
                type={"password"}
                name="password"
                placeholder="Password (eg:bar)"
                onChange={onChangeHandler}
            />
            <Center>
                <LoginButton onClick={onLoginHandler} />
            </Center>
        </Box>
    );
};

export default LoginForm;