import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Divider,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Drawing from './Drawing';
import Logo from './Logo';

const navLinks = [
  { name: 'Profil', path: '/about' },
  { name: 'Mes Cartes', path: '/cartes' }
];

const NavLink = (props) => {
  const { children, path } = props;
  return (
    <Button
      as="a"
      size={'sm'}
      variant={'ghost'}
      href={path}>
      {children}
    </Button>
  );
};

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <header>
        <Box className='nav' px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              variant={'ghost'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize={21} />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Logo />
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {navLinks.map(({ name, path }) => (
                  <NavLink key={name} path={path}>{name}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Stack direction={'row'} spacing={5}>
              <Button size={'sm'} fontSize='18px' variant={'ghost'} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Drawing/>
            </Stack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {navLinks.map(({ name, path }) => (
                  <NavLink key={name} path={path}>{name}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
        <Divider orientation='horizontal' borderWidth="1sp"/>
      </header>
    </>
  );
}
