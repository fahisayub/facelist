import React, { useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../store/authReducer/auth.actions";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const { isAuth } = useSelector((state) => state.authReducer);
  let from = location?.state?.from || "/";

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    let payload = { ...form, [name]: value };
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

  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, isAuth]);

  return (
    <Container pt="100px" maxW="full" h="100vh">
      <Box
        m="auto"
        boxShadow={"lg"}
        borderRadius={"20px"}
        p="20px"
        maxW={['full',"50%"]}
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
          <Button
            colorScheme="green"
            _hover={{
              bgGradient: "linear(to-r, teal.500, green.500)",
            }}
            onClick={onLoginHandler}
            p="20px"
            m="20px"
            w="full"
            size={"lg"}
          >
            Login
          </Button>
        </Center>
      </Box>
    </Container>
  );
};

export default LoginPage;
