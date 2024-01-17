'use client'

import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope, faBars } from '@fortawesome/free-solid-svg-icons'
import MenuDeroulant from './MenuDeroulant'

const data = {
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Carte de Léa',
  isPublic: true,
  lastModif: '',
}

function Carte() {
  return (
    <>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
          <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="sm"
          position="relative"
          transition="box-shadow 0.3s ease"
          zIndex={1}
            _hover={{ 
            boxShadow: 'xl',
          }}
          >
            <Box position="absolute" top={2} right={2} zIndex={2}>
              <MenuDeroulant />
            </Box>
            

            <Image src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" h='200px' w='300px' zIndex={1} />

            <Box p="4" fontSize={18}>
              <Flex justifyContent="space-between" alignContent="center">
                <Box>
                {data.name}
                </Box>
                <Box>
                  {data.isPublic && (
                    <Tooltip hasArrow label='Cette carte est publique' borderRadius={5}>
                      <FontAwesomeIcon icon={faEarthEurope}></FontAwesomeIcon>
                    </Tooltip>
                  )}
                </Box>
              </Flex>
            </Box>
          </Box>
      </Flex>
    </>
  )
}

export default Carte