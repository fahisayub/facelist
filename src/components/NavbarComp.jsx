import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "../store/authReducer/auth.actions";

const NavbarComp = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.authReducer);
  const logoutHandler = () => {
    dispatch(logoutApi());
  };

  return (
    <Flex
      bgGradient="linear(to-r, orange.100, purple.300)"
      color={"white"}
      size={"md"}
      p="10px"
      justifyContent={"space-between"}
      pos="fixed"
      w="full"
      top="0px"
    >
      <Heading>Facelist</Heading>
      {isAuth ? (
        <Button colorScheme="red" onClick={logoutHandler}>
          Logout
        </Button>
      ) : null}
    </Flex>
  );
};

export default NavbarComp;
