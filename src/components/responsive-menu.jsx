import React from 'react';
import { Link } from './link.jsx';


export function ResponsiveMenu({ data }) {
  return <>
    {data.map(({ name, link }) => (
      <Link
        key={link}
        to={link}
        px={4}
      >
        {name}
      </Link>
    ))}
    { /*
    <Box display={{ md: 'none', sm: 'flex' }}>
      <Menu isLazy id="navbar-menu">
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          aria-label="Menu"
        />
        <MenuList>
          {data.map(({ name, link }) => (
            <GatsbyLink to={link}>
              <MenuItem as={Link}>{name}</MenuItem>
            </GatsbyLink>
          ))}
        </MenuList>
      </Menu>
    </Box>
      */}
  </>;
}
