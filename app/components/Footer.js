'use client'
import {
    Box,
    Text,
    Flex,
    Link,
    useColorModeValue,
    Stack,
    IconButton
} from '@chakra-ui/react'
import Logo from './Logo'
import { FaLinkedin, FaGithub } from "react-icons/fa6";

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
                        © 2024 Ambre LAURENT
                    </Text>
                    <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                        -
                    </Text>
                    <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                        Tous droits réservés
                    </Text>
                </Stack>
                <Stack justify={'center'} mt={5} direction={'row'} spacing={1}>
                    <IconButton variant={'ghost'} isRound={true} icon={<FaGithub />} as={Link} href={'https://github.com/Ukureii'} target={"_blank"} />
                    <IconButton variant={'ghost'} isRound={true} icon={<FaLinkedin />} as={Link} href={'https://fr.linkedin.com/in/ambre-laurent-847129257?trk=people-guest_people_search-card'} target={"_blank"} />
                </Stack>
            </Box>
        </Box>
    )
}