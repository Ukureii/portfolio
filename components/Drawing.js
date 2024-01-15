import React from 'react';
import PasswordInput from './PasswordInput';
import { Link } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

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
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <form
              id='my-form'
              onSubmit={(e) => {
                e.preventDefault()
                console.log('submitted')
              }}
            >
              <Input name='nickname' placeholder='Identifiant' mb='2' />
              <PasswordInput />
            </form>

            <div style={{ textAlign: 'right', marginRight: '2px'}}>
                <Link as='sub'>Mot de passe oublié ?</Link>
            </div>
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button  type='submit' form='my-form' colorScheme='orange'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Drawing;
