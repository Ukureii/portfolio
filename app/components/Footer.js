'use client'
import {
    Box,
    Text,
    Flex,
    Link,
    useColorModeValue,
    Stack,
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
                </Stack>
                <Stack justify="center" mt={5} direction="row" spacing={3}>
                    <Link href="https://github.com/Ukureii" isExternal>
                        <button className={'btn'}><FaGithub fontSize={18} /></button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ambre-laurent-847129257/" isExternal>
                        <button className={'btn'}><FaLinkedin fontSize={18} /></button>
                    </Link>
                </Stack>
            </Box>
        </Box>
    )
}