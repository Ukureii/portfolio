import React from 'react';
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
  useColorModeValue
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
              <IconButton variant='ghost' size='sm' onClick={onClose}>
                <FontAwesomeIcon icon={faClose} />
              </IconButton>
            </Stack>
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
              <div style={{ textAlign: 'right', marginRight: '2px', marginBottom: '30px'}}>
                <Link as='sub'>Mot de passe oublié</Link>
              </div>
              <Button
                type='submit'
                size='sm'
                width='full'
                form='login-form'
                rounded={'full'}
                colorScheme={'red'}
                bg={useColorModeValue('red.300', 'red.200')}
                _hover={{ bg: useColorModeValue('red.400', 'red.300') }}>
                Connexion
              </Button>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Drawing;
