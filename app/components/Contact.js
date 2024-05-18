import React from 'react';
import {Stack, Text, Divider, Icon, Flex, Link} from "@chakra-ui/react";
import {Fragment} from "react";
import { FaLinkedinIn, FaGithub, FaPhoneFlip, FaEnvelope, FaIdCardClip } from "react-icons/fa6";

const contactOptions = [
    {
        label: 'LinkedIn',
        value: 'Ambre LAURENT',
        link: 'https://www.linkedin.com/in/ambre-laurent-847129257/',
        icon: FaLinkedinIn
    },
    {
        label: 'Github',
        value: 'Ambre LRNT',
        link: 'https://github.com/Ukureii',
        icon: FaGithub
    },
    {
        label: 'Adresse mail',
        value: 'laurent.ambre@hotmail.fr',
        link: 'mailto:laurent.ambre@hotmail.fr',
        icon: FaEnvelope
    },
    {
        label: 'Téléphone',
        value: '06 32 76 29 88',
        link: 'tel:0632762988',
        icon: FaPhoneFlip
    },
    {
        label: 'Curriculum vitæ',
        value: 'Télécharger en format PDF',
        link: '/cv_ambre_laurent.pdf',
        icon: FaIdCardClip
    }
];

export default function Contact() {
    return (
        <>
            <Stack p={20} >
                <Text fontWeight={600} mb={6} fontSize={{ base: 'xl', sm: '4xl', lg: '5xl' }}>
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
                                <Link href={option.link} isExternal>
                                    <Icon className={'btnIcon'} as={option.icon} w={10} h={10} color={'#228be6'}/>
                                </Link>
                                <Text mt={-1} fontSize="lg" fontWeight="semibold">
                                    {option.label}
                                </Text>
                                <Text mt={-2} color={'gray'} fontSize="md" textAlign="center">
                                    {option.value}
                                </Text>
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