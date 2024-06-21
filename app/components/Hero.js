'use client'
import {
    chakra,
    Stack,
    Flex,
    Icon,
    Link,
    Text,
    Button,
    Image,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import React from "react";
import Logo from "./Logo";

export default function Hero() {
    const handleContactClick = (e) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Stack px={{ base: 10, md: 20}} pb={'130px'} pt={{base: '0', md: '30px'}}  spacing={6} direction={{ base: 'column', md: 'column', lg: 'row' }} justifyContent={'space-between'}>
            <Stack direction={'column'} justifyContent={'center'} mt={-2}>
                <Logo ms={-3}/>
                <Text fontWeight={600} mt={{ base: '-4', md: '-6' }} fontSize={{ base: 'xl', sm: '4xl', lg: '5xl' }}>
                    Ambre LAURENT
                </Text>
                <Text color={'gray'} fontSize={{ base: 'md', sm: 'md', lg: 'lg' }} mb={1}>
                    Étudiante en bachelor Concepteur Développeur d'Applications, je suis passionnée par le développement web et mobile.
                    Je suis constamment en quête de nouvelles technologies et de défis stimulants dans le domaine de l'informatique.
                </Text>
                <Text color={'gray.500'} fontSize={{ base: 'md', sm: 'md', lg: 'lg' }} mb={6}>
                    En parallèle, je pratique la photographie et la randonnée.
                    <br/>
                    J'aime m'occuper des animaux, explorer la nature et capturer des moments uniques.
                </Text>

                <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                    <Link href={'#contact'}>
                        <Button
                            h={12}
                            px={5}
                            w={'full'}
                            bg={"blue.400"}
                            color={"white"}
                            bgGradient="linear(to-br, #228be6,#15aabf)"
                            _hover={{ bgGradient: 'linear(to-br, #228be6,#15aabf)', opacity: 0.85, transition: '300ms ease' }}
                            _active={{ bgGradient: 'linear(to-br, #228be6,#15aabf)', opacity: 0.75, transition: '300ms ease' }}
                            variant="solid"
                            size="lg"
                            rounded="full"
                            fontWeight="bold"
                            onClick={handleContactClick}
                            mb={{ base: 2, sm: 0 }}
                        >
                            <chakra.span>Me contacter</chakra.span>
                        </Button>
                    </Link>
                    <Flex
                        border="1px solid"
                        borderColor="blackAlpha.500"
                        justifyContent="center"
                        p={3}
                        px={4}
                        lineHeight={1.18}
                        rounded="full"
                        boxShadow="md"
                        fontWeight="bold"
                        alignItems="center"
                        rel="noopener noreferrer"
                    >
                        <Icon as={FaGithub} h={4} w={4} mr={'4px'} />
                        <chakra.span as={Link} href={'https://github.com/Ukureii'} target={"_blank"} ml={1}>Github</chakra.span>
                    </Flex>
                </Stack>
            </Stack>
            <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                mt={{ base: 6, md: 6, lg: 0 }}
                boxSize={{ base: '100%', md: '100%', lg: '50%' }}
                src={'/workspace.png'}
            />
        </Stack>
    )
}
