import React from 'react'
import { Avatar, Stack, AvatarBadge, AvatarGroup } from '@chakra-ui/react'


const UserIcon = ({ showBadge }) => {
  return (
    <>
        <Stack direction={'row'} spacing={'2'}>
            <Avatar size={'sm'} name={'Dan Abrahmov'} src={'https://bit.ly/dan-abramov'} >
                {showBadge ? <AvatarBadge boxSize={'1.25em'} bg={'green.500'} /> : null}
            </Avatar>
            <Avatar size={'sm'} name={'Kola Tioluwani'} src={'https://bit.ly/tioluwani-kolawole'} />
            <Avatar size={'sm'} name={'Kent Dodds'} src={'https://bit.ly/kent-c-dodds'} />
            <Avatar size={'sm'} name={'Ryan Florence'} src={'https://bit.ly/ryan-florence'} />
            <Avatar size={'sm'} name={'Prosper Otemuyiwa'} src={'https://bit.ly/prosper-baba'} />
            <Avatar size={'sm'} name={'Christian Nwamba'} src={'https://bit.ly/code-beast'} />
            <Avatar size={'sm'} name={'Segun Adebayo'} src={'https://bit.ly/sage-adebayo'} />
        </Stack>
    </>
  )
}

export default UserIcon