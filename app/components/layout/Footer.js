'use client'

import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import Logo from './Logo'

export default function Footer() {
  return (
    <Box
      bottom={0}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 6,
            ms: 4,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 6,
            me: 4,
          }}>
          <Logo />
        </Flex>
        <Stack justify={'center'} direction={'row'}>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            Collège André-CHAMSON
          </Text>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            |
          </Text>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            Les cordées de la réussite SOAN
          </Text>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            |
          </Text>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            CARDIE Montpellier
          </Text>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            |
          </Text>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            BTS SIO - Lycée Émile Peytavin
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}