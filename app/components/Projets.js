import {
  Box,
  Center,
  Image,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Tag,
  useColorModeValue
} from '@chakra-ui/react';
import React from "react";

const data = [
  { id: 1, title: "Dōmori", env: 'Mobile', description: 'Application de garde d’animaux de compagnie entre particuliers.', tags: ['Java', 'Android Studio', 'MySQL'], imageUrl: '/doomori.png' },
  { id: 2, title: "Dōmori API", env: 'Web', description: 'API pour l\'application mobile de garde d’animaux Dōmori', tags: ['PHP', 'CodeIgniter4', 'MySQL'], imageUrl: '/doomori.png' },
  { id: 3, title: "Bird", env: 'Web', description: 'Site pour cartographier ses projets d\'orientation scolaire et professionnelle.', tags: ['JavaScript', 'NextJS'], imageUrl: '/bird.png' },
  { id: 4, title: "Nexus", env: 'Web', description: 'Site de mise en relation pour joueurs de jeux vidéo de même niveau.', tags: ['PHP', 'CodeIgniter', 'MySQL'], imageUrl: '/nexus.png' },
  { id: 5, title: "Portfolio", env: 'Web', description: 'Portefolio numérique conçu pour présenter mes projets et compétences.', tags: ['JavaScript', 'NextJS'], imageUrl: '/portfolio.png' },
  { id: 6, title: "CLD Keys", env: 'Web', description: 'Plateforme de génération de clés SSH pour les clients de CobolCloud.', tags: ['PHP', 'Bootstrap', 'MySQL'], imageUrl: '/cobolcloud.png' }
];

export default function ProjectsGrid() {
  return (
      <Box>
        <Text fontWeight={600} pt={"150px"} px={{ base: 10, md: 20}} fontSize={{ base: 'xl', sm: '4xl', lg: '5xl' }}>
          II. Projets
        </Text>
        <Box px={12} >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3}} spacing={4}>
            {data.map((item) => (
                <Center py={12} key={item.id}>
                  <Box
                      role={'group'}
                      p={6}
                      width={{ base: '330px', md: '330px', lg: '330px' }}
                      bg={useColorModeValue('white', 'gray.800')}
                      boxShadow={'xl'}
                      rounded={'lg'}
                      pos={'relative'}
                      zIndex={1}
                  >
                    <Box
                        rounded={'lg'}
                        mt={-8}
                        pos={'relative'}
                        minH={'230px'}
                        _after={{
                          transition: 'all .3s ease',
                          content: '""',
                          w: 'full',
                          h: 'full',
                          pos: 'absolute',
                          top: 2,
                          left: 0,
                          backgroundImage: `url(${item.imageUrl})`,
                          filter: 'blur(10px)',
                          zIndex: -1,
                        }}
                        _groupHover={{
                          _after: {
                            filter: 'blur(18px)',
                          },
                        }}
                    >
                      <Image
                          rounded={'lg'}
                          height={230}
                          width={282}
                          objectFit={'cover'}
                          src={item.imageUrl}
                          alt="#"
                      />
                    </Box>
                    <Stack pt={10} align={'start'}>
                      <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {item.env}
                      </Text>
                      <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {item.title}
                      </Heading>
                      <Text color={'gray.500'} fontSize={'sm'} textAlign={"start"}>
                        {item.description}
                      </Text>
                      <Stack direction="row" spacing={2} mt={2}>
                        {item.tags.map(tag => (
                            <Tag size={'sm'} key={tag} color={'gray.500'} bg={'gray.100'}>
                              {tag}
                            </Tag>
                        ))}
                      </Stack>
                    </Stack>
                  </Box>
                </Center>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
  );
}
