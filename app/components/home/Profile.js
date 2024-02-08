'use client'
import React, { useState, useEffect } from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Skeleton,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'

export default function Profile() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await fetch('https://siomende.fr/bird/api/utilisateurs/One?id=2');

        if (result.ok === true) {
          const users = await result.json();
          setUsersData(users);
        } else {
          throw new Error('Impossible de contacter le serveur');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // const description = usersData.descriptionU || 'Ajoute une biographie personnalisée sur ton profil !';

  return (
    <Center p={6}>
      <Box
        position="relative"
        w={'full'}
        h={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'xl'}
        rounded={'xl'}
        overflow={'hidden'}>
        <Box
          h={'100px'}
          w={'full'}
          bgColor={useColorModeValue('gray.300', 'gray.600')}
          objectFit="cover"
          alt="#"
        />
        <Flex paddingStart={5} mt={-12}>
          <Avatar
            size={'xl'}
            src={usersData.avatarU}
            borderColor={useColorModeValue('white', 'gray.700')}
            borderWidth={5}
          />
        </Flex>

        <Box p={5}>
          <Stack spacing={0} mb={6}>

            {loading ? (
              <Stack>
                <Skeleton height='28px' maxWidth={'300px'} minWidth={'150px'}/>
                <Skeleton height='17px' maxWidth={'400px'} minWidth={'200px'}/>
                <Divider mt={4} mb={2}/>
                <Skeleton height='17px' maxWidth={'250px'} minWidth={'150px'}/>
                <Skeleton height='17px' maxWidth={'400px'} minWidth={'200px'}/>
              </Stack>
            ) : ( 
              <>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                  {usersData.prenomU} {usersData.nomU}
                </Heading>
                <Text color={useColorModeValue('gray', 'gray.400')} fontWeight={'light'}>@{usersData.identifiantU}</Text>
                <Divider mt={5} mb={2}/>
                <Heading fontSize={'15px'} mb={1}>
                  À propos de moi
                </Heading>
                <Text color={useColorModeValue('gray', 'gray.400')} fontWeight={'light'}>
                  {usersData.descriptionU}
                </Text>
              </>
            )}
          </Stack>
        </Box>
      </Box>
    </Center>
  )
}