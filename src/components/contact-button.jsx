import { Button, Center } from '@chakra-ui/react';
import React from 'react';


export const ContactButton = ({ icon, colorScheme, uri, text, ...props }) => {
  return <Center {...props}>
    <Button
      w="xs"
      maxW={'md'}
      colorScheme={colorScheme}
      leftIcon={icon}>
      <Center>
        <a
          href={uri}
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      </Center>
    </Button>
  </Center>;
};
