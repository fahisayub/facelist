import {  Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ContactCardComp = ({contact}) => {
    return (
        <Flex p='20px' boxShadow={'base'} borderRadius={'10px'} m='10px' >
         <Text>{contact.name.first+' '+contact.name.last}</Text>
        </Flex>
    );
};

export default ContactCardComp;