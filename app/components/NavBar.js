import React from 'react';
import {
  Box,
  Button,
  HStack,
  Center,
} from '@chakra-ui/react';

const navLinks = [
  { name: 'Accueil', path: 'accueil' },
  { name: 'Projets', path: 'projects' },
  { name: 'Compétences', path: 'competences' },
  { name: 'Contact', path: 'contact' }
];

const NavLink = (props) => {
  const { children, path } = props;

  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <Button
          onClick={handleClick}
          _hover={{ bg: "rgba(34, 139, 230, 0.05)" }}
          _active={{ bg: "rgba(34, 139, 230, 0.1)" }}
          rounded={'full'}
          fontWeight={'normal'}
          variant={'ghost'}
      >
        {children}
      </Button>
  );
};

export default function NavBar() {
  return (
      <>
        <header>
          <Box className={'nav'} visibility={{ base: 'hidden', md: 'visible' }} justifyContent={'center'}>
            <Center h={20}>
              <HStack as={'nav'} display={{ base: 'flex', md: 'flex' }}>
                {navLinks.map(({ name, path }) => (
                    <NavLink key={name} path={path}>{name}</NavLink>
                ))}
              </HStack>
            </Center>
          </Box>
        </header>
      </>
  );
}
