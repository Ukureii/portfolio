import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Flex,
    Avatar,
    Box,
    Heading,
    Center,
    Text,
    Image
} from '@chakra-ui/react';

const projets = [
    { name: 'Dōmori - 動守り', type: 'Mobile', desc: 'Une application permettant la garde d’animaux entre particuliers facilitant la mise en relation entre les propriétaires d’animaux de compagnie cherchant des solutions de garde temporaires', img: '/pic.jpg' },
    { name: 'Bird', type: 'Web', desc: 'Bird’s description', img: '/bird.png' },
    { name: 'SeiMate', type: 'Web', desc: 'SeiMate’s description', img: '/pic.jpg' },
    { name: 'CobolCloud', type: 'Web', desc: 'CLD’s description', img: '/pic.jpg' },
];

const ProjetPage = () => {
    return (
        <>
            <Center h={'200px'}>
                <Text fontSize='6xl' lineHeight={1} fontWeight="bold" textAlign="left">
                    Projets
                </Text>
            </Center>
            <Box
                display={'grid'}
                gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }}
                gap={6}
                maxW={'100%'}
                mx={'auto'}
                padding={'10'}
                overflowX={'hidden'}
            >
                {projets.map((projet, index) => (
                    <MesProjets key={index} name={projet.name} type={projet.type} desc={projet.desc} img={projet.img} />
                ))}
            </Box>
        </>
    );
}

function MesProjets({ name, type, desc, img }) {
    return (
        <Card rounded={'xl'} boxShadow={'xl'} bg={'white'}>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={name} src='https://bit.ly/sage-adeb' />

                        <Box>
                            <Heading size='sm'>{name}</Heading>
                            <Text>{type}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>{desc}</Text>
            </CardBody>
            <Image
                objectFit='cover'
                height={'350px'}
                src={img}
                alt='Chakra UI'
                roundedBottom={'xl'}
            />
        </Card>
    );
}

export default ProjetPage;
