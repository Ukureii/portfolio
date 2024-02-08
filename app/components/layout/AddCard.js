import { Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { AddIcon } from '@chakra-ui/icons'

const AddCard = () => {
  return (
    <Flex direction={'row'}>
        <IconButton icon={<AddIcon/>} rounded={'full'}></IconButton>
        <Text p={2}>
            Mon parcours d'orientation
        </Text>
    </Flex>
  )
}

export default AddCard