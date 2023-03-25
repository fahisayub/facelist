import React, { useEffect } from "react";
import { Button, Container, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../store/authReducer/auth.actions";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
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
      dispatch(loginApi(form));
    } else {
      alert("invalid username or password");
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, isAuth]);

  return (
    <div>
      <Container     mt='100px'
>
        <Input
          type={"text"}
          name="username"
          placeholder="Username"
          onChange={onChangeHandler}
        />
        <Input
          type={"password"}
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
        />
        <Button colorScheme={"blue"} onClick={onLoginHandler}>
          Login
        </Button>
      </Container>
    </div>
  );
};

export default LoginPage;
