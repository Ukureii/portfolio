'use client'

import {
  Flex,
  Box,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

const data = {
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Carte de Léa',
}

function Carte() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="sm"
        position="relative"
        transition="box-shadow 0.3s ease"
        
        _hover={{ 
        boxShadow: 'xl',
        }}
        >
            <Image src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" />

            <Box p="4">
            <Flex justifyContent="space-between" alignContent="center">
                <Box
                fontSize="2xl"
                as="h4"
                lineHeight="tight"
                isTruncated
                >
                {data.name}
                </Box>
            </Flex>
            </Box>
        </Box>
    </Flex>
  )
}

export default Carte