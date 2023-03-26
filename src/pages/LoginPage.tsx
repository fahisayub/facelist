import * as React from "react";
import { useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";




const LoginPage= () => {

  const { isAuth } = useSelector<any, any>((state: any) => state.authReducer);
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  let from: string = location?.state?.from || "/";

  

  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, isAuth]);

  return (
    <Container pt="100px" maxW="full" h="100vh">
      <LoginForm/>
    </Container>
  );
};

export default LoginPage;
