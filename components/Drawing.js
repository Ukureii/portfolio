import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  IconButton,
  Divider,
  Link,
} from '@chakra-ui/react';

function emailRegex(input) {
  let regex = '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i';
  return regex.test(input);
}

function PasswordInput() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup>
      <Input
        isRequired
        focusBorderColor='red.200'
        type={show ? 'text' : 'password'}
        placeholder='Mot de passe'
      />
      <InputRightElement>
        <Button variant='ghost' size='sm' mr='1' onClick={handleClick}>
          {show ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

function Drawing() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton variant='ghost' size="sm" aria-label='Done' fontSize='18px' onClick={onOpen} >
        <FontAwesomeIcon icon={faUser} style={{ paddingBottom: '2px' }} />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            Se connecter
          </DrawerHeader>

          <DrawerBody>
            <form
              id='login-form'
              onSubmit={(e) => {
                e.preventDefault()
                console.log('submitted')
              }}
            >
              <Input isRequired focusBorderColor='red.200' name='nickname' placeholder='Identifiant' mb='2' />
              <PasswordInput />
              <div style={{ textAlign: 'right', marginRight: '2px', marginBottom: '20px'}}>
                <Link as='sub'>Mot de passe oublié</Link>
              </div>
              <Button type='submit' size='sm' width='full' form='login-form' colorScheme='orange'>Connexion</Button>
            </form>

            <Divider mt="60px" mb="12px"/>

            <div>
              Pas encore de compte ?
            </div>

            <form
              id='insc-form'
              onSubmit={(e) => {
                e.preventDefault()
                console.log('submitted')
              }}
            >
              <Input isRequired focusBorderColor='red.200' name='nickname' placeholder='Identifiant' mt='20px' mb='2' />
              <Input isRequired focusBorderColor='red.200' name='mail' placeholder='Adresse e-mail' mb='2' />
              <PasswordInput />
              <Button type='submit' size='sm' width='full' form='insc-form' colorScheme='orange' marginTop='20px'>Créer mon compte</Button>
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' size='sm' mr={3} onClick={onClose}>
              Annuler
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Drawing;
