import React, { useEffect, useState } from 'react';
import { Flex, Box, Image, useColorModeValue, Tooltip, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

function CartesGrid() {
  const [cartesData, setCartesData] = useState([]);

  useEffect(() => {
    async function fetchCartes() {
      try {
        const result = await fetch('https://siomende.fr/bird/api/cartes/All');

        if (result.ok === true) {
          const cartes = await result.json();
          setCartesData(cartes);
        } else {
          throw new Error('Impossible de contacter le serveur');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchCartes();
  }, []); // Cette dépendance vide signifie que le code s'exécute une seule fois après le rendu initial

  return (
    <>
      <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'} maxWidth={'100vw'} marginBottom={-5}>
        <Box
          display={'grid'}
          gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={6}
          maxW={'100%'}
          mx={'auto'}
          padding={'10'}
          overflowX={'hidden'}
        >
          {cartesData.map((card, index) => (
            <MesCartes key={index} data={card} />
          ))}
        </Box>
      </Flex>
    </>
  );
}

function MesCartes({ data }) {
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
        src={'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}
        alt={`Carte de ${data.libelleC}`}
        roundedTop={'lg'}
        maxW={'300px'}
        maxH={'200px'}
        width={'100%'}
        height={'100%'}
        objectFit={'cover'}
      />

      <Box p={'1em'} fontSize={{ base: '1rem', md: '1.2rem' }}>
        <Flex justifyContent={'space-between'} alignContent={'center'}>
          <Text>{data.libelleC}</Text>
          <Box>
            {data.estPublique == 1 && (
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
