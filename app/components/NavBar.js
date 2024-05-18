import {
  Box,
  Button,
  HStack,
  Center,
} from '@chakra-ui/react';

const navLinks = [
  { name: 'Accueil', path: '#' },
  { name: 'Projets', path: '#projets' },
  { name: 'Compétences', path: '#competences' },
  { name: 'Contact', path: '#contact' }
];

const NavLink = (props) => {
  const { children, path } = props;
  return (
    <Button
      as="a"
      _hover={{ bg: "rgba(34, 139, 230, 0.05)"}}
      _active={{ bg: "rgba(34, 139, 230, 0.1)"}}
      rounded={'full'}
      fontWeight={'normal'}
      variant={'ghost'}
      href={path}>
      {children}
    </Button>
  );
};

export default function NavBar() {

  return (
    <>
      <header>
        <Box className={'nav'} justifyContent={'center'}>
          <Center h={20}>
            <HStack as={'nav'} display={{ base: 'flex', md: 'flex' }}>
              {navLinks.map(({ name, path }) => (
                <NavLink key={name} path={path} >{name}</NavLink>
              ))}
            </HStack>
          </Center>
        </Box>
      </header>
    </>
  );
}
