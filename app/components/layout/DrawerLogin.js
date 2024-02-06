import React from 'react';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash, faClose } from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  IconButton,
  Link,
  Text,
  useColorModeValue,
  DrawerFooter
} from '@chakra-ui/react';


const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://votre-api.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Échec de l'authentification");
    }

    const { token } = await response.json();
    document.cookie = `token=${token}; path=/`;
    router.push("/protected");
  } catch (error) {
    console.error(error);
  }
};

function DrawerLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) throw new Error("Login failed");

      const { token } = await response.json();
      document.cookie = `token=${token}; path=/`;
      router.push("/protected");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <IconButton fontSize='18px' variant={'ghost'} size={'md'} aria-label={'Done'} onClick={onOpen} >
        <FontAwesomeIcon icon={faUser} />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Stack direction={'row'} justify={'space-between'}>
              <Text>
                Se connecter
              </Text>
              <IconButton variant={'ghost'} size={'sm'} onClick={onClose}>
                <FontAwesomeIcon icon={faClose} />
              </IconButton>
            </Stack>
          </DrawerHeader>

          <DrawerBody mt={'25px'}>
            <form
              id={'login-form'}
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin(e);
              }}
            >
              <Input
                isRequired
                focusBorderColor={'red.200'}
                name={'username'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={'Identifiant'}
                mb={'2'}
              />
              <InputGroup>
              <Input
                  isRequired
                  focusBorderColor={'red.200'}
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={'Mot de passe'}
                />
                <InputRightElement>
                  <Button variant={'ghost'} size={'sm'} mr={'1'} onClick={handleClick}>
                    {show ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <div style={{ textAlign: 'right', marginRight: '2px', marginBottom: '30px'}}>
                <Link as='sub'>Mot de passe oublié</Link>
              </div>
              <Button
                type={'submit'}
                size={'sm'}
                width={'full'}
                form={'login-form'}
                rounded={'full'}
                colorScheme={'red'}
                bg={useColorModeValue('red.300', 'red.200')}
                _hover={{ bg: useColorModeValue('red.400', 'red.300') }}
                _active={{ bg: useColorModeValue('red.500', 'red.400') }}>
                Connexion
              </Button>
            </form>
          </DrawerBody>
          <DrawerFooter >
            <Stack direction={'column'} fontWeight={'light'} fontSize={'14px'} color={useColorModeValue('gray', 'gray.300') }>
              <Text >
                Les comptes utilisateurs sont générés par l'établissement.
              </Text>
              <Text mt={2}>
                Si vous êtes scolarisé au collège<br />André-CHAMSON de Meyrueis
                et que vous n'avez pas encore de compte, veuillez contacter votre établissement afin d'obtenir
                des informations sur la procédure de création de compte.
              </Text>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerLogin;
