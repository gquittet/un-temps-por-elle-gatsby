import { Center, Box } from '@chakra-ui/react';
import React from 'react';
import { ResponsiveMenu } from './responsive-menu';

const menuData = [
  { 'name': 'Accueil', 'link': '/#accueil' },
  { 'name': 'Nos soins', 'link': '/#nos-soins' },
  { 'name': 'Tarifs', 'link': '/#tarifs' },
  { 'name': 'Contact', 'link': '/#contact' },
];


export function Header({ ...props }) {
  return (
    <Center paddingTop="3rem" bg="white">
      <Box
        as="header"
        top="3rem"
        {...props}
      >
        <ResponsiveMenu data={menuData}/>
      </Box>
    </Center>
  );
}
