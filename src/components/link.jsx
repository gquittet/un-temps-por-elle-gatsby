import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

export function Link({ to, children, ...args }) {
  return <ChakraLink
    as={GatsbyLink}
    to={to}
    _focus={{ outline: 'none' }}
    {...args}
  >
    {children}
  </ChakraLink>;
}
