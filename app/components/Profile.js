'use client'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  IconButton,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export default function SocialProfileWithImage() {
  return (
    <Center py={6}>
      <Box
        position="relative"
        maxW={'420px'}
        minW={'260px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'xl'}
        overflow={'hidden'}>
        <Image
          h={'110px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit="cover"
          alt="#"
        />
        <Box position="absolute" top={2} right={2} zIndex={2}>
          <IconButton
            size="sm"
            backgroundColor="rgba(255, 255, 255, 0.36)"
            _hover={{ bg: "rgba(255, 255, 255, 0.48)"}}
            _active={{ bg: "rgba(255, 255, 255, 0.64)" }}
            rounded={'full'}
            aria-label='Edit Profile'
            fontSize={18}
            icon={<FontAwesomeIcon icon={ faPen } color='white'/>}
          />
        </Box>
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src='https://bit.ly/broken-link'
            borderColor={useColorModeValue('white', 'gray.700')}
            borderWidth={5}
          />
        </Flex>

        <Box p={5}>
          <Stack spacing={0} mb={6}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              John Doe
            </Heading>
            <Text color={useColorModeValue('gray', 'gray.400')} fontWeight={'light'}>@choisi_ton_pseudo</Text>

            <Divider mt={5} mb={2}/>

            <Heading fontSize={'15px'} mb={1}>
              À propos de moi
            </Heading>
            <Text color={useColorModeValue('gray', 'gray.400')} fontWeight={'light'}>
              Ajoute une biographie personnalisée sur ton profil !
            </Text>
          </Stack>

        </Box>
      </Box>
    </Center>
  )
}