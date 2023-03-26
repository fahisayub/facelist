import React from "react";
import { Button, Flex, Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "../store/authReducer/auth.actions";

const NavbarComp = () => {
  const dispatch:any = useDispatch();
  const { isAuth } = useSelector<unknown,any>((state:any) => state.authReducer);
  const logoutHandler = () => {
    dispatch(logoutApi());
  };

  return (
    <Flex
      bgGradient="linear(to-r, orange.100, purple.300)"
      color={"white"}
      p="10px"
      justifyContent={"space-between"}
      pos="fixed"
      w="full"
      top="0px"
      zIndex={'1'}
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
