import { Avatar, Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
const ContactCardComp = ({ contact }) => {
  return (
    <Center
      p="20px"
      boxShadow={"base"}
      borderRadius={"10px"}
      m="10px"
      display={['block','flex']}
      justifyContent={"space-between"}
      textAlign={['center',"left"]}
      bgGradient="linear(to-r, orange.100, purple.300)"

    >
      <Avatar size={['md','lg','lg','xl',"xl"]} src={contact.picture.large} />
      <Box  w={['100%',"40%"]}>
        <Heading size={["sm","md"]}>
          {contact.name.title +
            ", " +
            contact.name.first +
            " " +
            contact.name.last}
        </Heading>
        <Text>{contact.email}</Text>
        <Text>Phone:{contact.phone}</Text>
      </Box>
      <Box  w={['100%',"30%"]}>
        <Heading size={"sm"}>
          {contact.location.country},{contact.location.state},
          {contact.location.city}
        </Heading>
      </Box>
    </Center>
  );
};

export default ContactCardComp;
