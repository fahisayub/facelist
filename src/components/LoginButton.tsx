import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';

const LoginButton = ({ onClick }:ButtonProps) => {
    return (
        <Button
            colorScheme="green"
            _hover={{
                bgGradient: "linear(to-r, teal.500, green.500)",
            }}
            onClick={onClick}
            m="20px"
            w="full"
            size={"lg"}
        >
            Login
        </Button>
    );
};

export default LoginButton;