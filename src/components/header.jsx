import { Flex } from '@chakra-ui/react';
import React from 'react';
import { ResponsiveMenu } from './responsive-menu';

const menuData = [
  { 'name': 'Accueil', 'link': '/#accueil' },
  { 'name': 'Nos soins', 'link': '/#nos-soins' },
  { 'name': 'Tarifs', 'link': '/#tarifs' },
  { 'name': 'Contact', 'link': '/#contact' },
];


export function Header() {
  return (
    <header
      style={{ paddingTop: '3rem' }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
      >
        <ResponsiveMenu data={menuData}/>
      </Flex>
    </header>
  );
}
