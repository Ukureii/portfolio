import React from 'react';
import {Stack, Text, Divider, Icon, Flex, Link} from "@chakra-ui/react";
import {Fragment} from "react";
import { FaLinkedinIn, FaGithub, FaPhoneFlip, FaEnvelope, FaIdCardClip } from "react-icons/fa6";

const contactOptions = [
    {
        label: 'Github',
        value: 'Ambre LRNT',
        link: 'https://github.com/Ukureii',
        icon: FaGithub
    },
    {
        label: 'LinkedIn',
        value: 'Ambre LAURENT',
        link: 'https://www.linkedin.com/in/ambre-laurent-847129257/',
        icon: FaLinkedinIn
    },
    {
        label: 'Adresse mail',
        value: 'laurent.ambre72@gmail.com',
        link: 'mailto:laurent.ambre72@gmail.com',
        icon: FaEnvelope
    },
    {
        label: 'Téléphone',
        value: '06 32 76 29 88',
        link: 'tel:0632762988',
        icon: FaPhoneFlip
    },
    {
        label: 'CV',
        value: 'Format PDF',
        link: '/CV_Ambre_LAURENT.pdf',
        icon: FaIdCardClip
    }
];

export default function Contact() {
    return (
        <>
            <Stack px={{ base: 10, md: 20}} mb={"80px"}>
                <Text fontWeight={600} mb={6} pt={"140px"} fontSize={{ base: 'xl', sm: '4xl', lg: '5xl' }}>
                    III. Contact
                </Text>
                <Stack
                    spacing={{ base: 6, md: 6, lg: 0}}
                    direction={{ base: 'column', md: 'column', lg: 'row' }}
                    justifyContent="space-between"
                >
                    {contactOptions.map((option, index) => (
                        <Fragment key={index}>
                            <Stack
                                spacing={3}
                                direction="column"
                                alignItems="center"
                                px={3}
                            >
                                <Icon as={option.icon} w={10} h={10} color={'#228be6'}/>
                                <Text mt={1} fontSize="lg" fontWeight="semibold">
                                    {option.label}
                                </Text>
                                <Link href={option.link} isExternal>
                                    <Text mt={-2} color={'gray'} fontSize="md" textAlign="center">
                                        {option.value}
                                    </Text>
                                </Link>
                            </Stack>
                            {contactOptions.length - 1 !== index && (
                                <Flex d={{ base: 'none', md: 'flex' }}>
                                    <Divider orientation="vertical" />
                                </Flex>
                            )}
                        </Fragment>
                    ))}
                </Stack>
            </Stack>
        </>
    )
}