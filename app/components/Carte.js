import React from 'react';
import { Flex, Box, Image, useColorModeValue, Tooltip, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

const data = [
  {
    imageURL: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Carte de Léa',
    isPublic: true,
  },
  {
    imageURL: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
    ,
    name: 'Etudes sup',
    isPublic: false,
  },
  {
    imageURL: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    name: 'Collège',
    isPublic: true,
  },
  {
    imageURL: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    name: "Je m'amuse",
    isPublic: false,
  },
  {
    imageURL: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Test',
    isPublic: false,
  },
  {
    imageURL: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    name: 'Lycée',
    isPublic: false,
  }
];

// présentation des cartes
function CartesGrid() {
  return (
    <>
      <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'} maxWidth={'100vw'} marginBottom={-5}>
        <SearchBar />
        <Box
          display={'grid'}
          marginTop={'-20px'}
          gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={6}
          maxW={'100%'}
          mx={'auto'}
          padding={'10'}
          overflowX={'hidden'}
        >
        {data.map((card, index) => (
          <Carte key={index} data={card} />
        ))}
        </Box>
      </Flex>
    </>
  );
}

// apparence globale des cartes
function Carte({ data }) {

  return (
    <Box
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      borderWidth={'px'}
      backgroundColor={useColorModeValue('white', 'gray.900')}
      height={{ base: '258px', md: '270px' }}
      rounded={'lg'}
      shadow={'sm'}
      transition={'box-shadow 0.3s ease, transform 0.3s ease'}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
      }}
    >
      <Image
        src={data.imageURL}
        alt={`Picture of ${data.name}`}
        roundedTop={'lg'}
        maxW={'300px'}
        maxH={'200px'}
        width={'100%'}
        height={'100%'}
        objectFit={'cover'}
      />

      <Box p={'1em'} fontSize={{ base: '1rem', md: '1.2rem' }}>

        <Flex justifyContent={'space-between'} alignContent={'center'}>
          <Text>
            {data.name}
          </Text>
          <Box>
            {data.isPublic && (
              <Tooltip hasArrow label={'Cette carte est publique'} borderRadius={'5'}>
                <FontAwesomeIcon icon={faEarthEurope} />
              </Tooltip>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default CartesGrid;