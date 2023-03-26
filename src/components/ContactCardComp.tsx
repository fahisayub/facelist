import { Avatar, Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";


type NameProp = {
  first: string,
  last: string,
  title: string
}
type LocationProp = {
  city: string, state: string, country: string
}
type PictureProp = {
  large: string, medium: string, thumbnail: string
}
export interface ContactProp {
  email: string,
  phone: string,
  uuid: string,
  name: NameProp,
  picture: PictureProp,
  location: LocationProp
}
interface Props {
  contact: ContactProp;
}

const ContactCardComp = ({ contact }: Props) => {
  return (
    <Center
      p="20px"
      boxShadow={"base"}
      borderRadius={"10px"}
      m="10px"
      display={['block', 'flex']}
      justifyContent={"space-between"}
      textAlign={['center', "left"]}
      bgGradient="linear(to-r, orange.100, purple.300)"
    key={contact.uuid}
    >
      <Avatar size={['md', 'lg', 'lg', 'xl', "xl"]}
        src={contact.picture.large} />
      <Box w={['100%', "40%"]}>
        <Heading size={["sm", "md"]}>
          {contact.name.title +
            ", " +
            contact.name.first +
            " " +
            contact.name.last}
        </Heading>
        <Text>{contact.email}</Text>
        <Text>Phone:{contact.phone}</Text>
      </Box>
      <Box w={['100%', "30%"]}>
        <Heading size={"sm"}>
          {contact.location.country},{contact.location.state},
          {contact.location.city}
        </Heading>
      </Box>
    </Center>
  );
};

export default ContactCardComp;
