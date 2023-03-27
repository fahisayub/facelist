import { Button, useToast } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginApi } from '../store/authReducer/auth.actions';
import { UserProps } from './LoginForm';


type formProp={form:UserProps}

const LoginButton = ({form}:formProp) => {
    const dispatch: any = useDispatch();
    const toast: any = useToast();


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
        <Button
            colorScheme="green"
            _hover={{
                bgGradient: "linear(to-r, teal.500, green.500)",
            }}
            onClick={()=>onLoginHandler()}
            m="20px"
            w="full"
            size={"lg"}
            data-cy='login-button'
        >
            Login
        </Button>
    );
};

export default LoginButton;