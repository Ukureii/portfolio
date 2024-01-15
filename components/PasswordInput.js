import { InputGroup, InputRightElement, Input, Button } from '@chakra-ui/react'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup>
        <Input
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

export default PasswordInput