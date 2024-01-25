import React from 'react'
import { InputGroup, InputLeftElement, Input, Stack, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { FaSliders } from 'react-icons/fa6'

const SearchBar = () => {
  return (
    <>
        <Stack direction={'row'} justify={'space-between'} p={'10px'}>
            <InputGroup size={{ base: 'sm', md: 'md', lg: 'md' }}>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon fontSize={{md: '18px', lg: '18px' }} color='gray' />
                </InputLeftElement>
                <Input focusBorderColor='red.200' width={{ base: '15rem', md: '40rem', lg: '50rem' }} rounded={'full'} type='search' placeholder='Rechercher' />
            </InputGroup>
            <IconButton rounded={'full'} variant={'outline'} size={{ base: 'sm', md: 'md', lg: 'md' }} >
                <FaSliders color={'gray'} />
            </IconButton>
        </Stack>
    </>
  )
}

export default SearchBar