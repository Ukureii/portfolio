'use client'
import React from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, List, ListItem } from '@chakra-ui/react'
import { FaProjectDiagram } from "react-icons/fa";
import { FaCode, FaJava, FaPhp } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { TbBrandNextjs, TbBrandMysql, TbBrandMongodb, TbBrandHtml5,TbBrandVercel } from "react-icons/tb";
import { DiCodeigniter, DiJavascript1 } from "react-icons/di";
import { MdOutlineFilterFrames } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { LuDatabase } from "react-icons/lu";

const skills = {
    'langages': [
        { icon: <Icon as={TbBrandHtml5} w={5} h={5} />, text: 'HTML / CSS' },
        { icon: <Icon as={FaJava} w={5} h={5} />, text: 'Java' },
        { icon: <Icon as={FaPhp} w={5} h={5} />, text: 'PHP' },
        { icon: <Icon as={DiJavascript1} w={5} h={5} />, text: 'JavaScript' }
    ],
    'frameworks': [
        { icon: <Icon as={DiCodeigniter} w={5} h={5} />, text: 'CodeIgniter' },
        { icon: <Icon as={TbBrandNextjs} w={5} h={5} />, text: 'NextJS' },
        { icon: <Icon as={SiTailwindcss} w={5} h={5} />, text: 'Tailwind' },
        { icon: <Icon as={RiBootstrapLine} w={5} h={5} />, text: 'Bootstrap' }
    ],
    'bdd': [
        { icon: <Icon as={TbBrandMysql} w={5} h={5} />, text: 'MySQL' },
        { icon: <Icon as={TbBrandMongodb} w={5} h={5} />, text: 'MongoDB' }
    ],
    'outils': [
        { icon: <Icon as={AiOutlineGithub} w={5} h={5} />, text: 'GitHub / Git' },
        { icon: <Icon as={TbBrandVercel} w={5} h={5} />, text: 'Vercel' }
    ]
};

const Feature = ({ title, icon, children }) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'rgba(34,139,230)'}
                rounded={'full'}
                bg={'gray.100'}>
                {icon}
            </Flex>
            <Text fontWeight={600} fontSize={22} mb={2}>{title}</Text>
            {children}
        </Stack>
    )
}

export default function Skills() {
    return (
        <Box px={{ base: 10, md: 20 }} pt={20}>
            <Stack direction={'row'} mb={6} justifyContent={'space-between'}>
                <Text fontWeight={600} fontSize={{ base: 'xl', sm: '4xl', lg: '5xl' }}>
                    I. Compétences
                </Text>
            </Stack>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 4 }} justifyItems={{base: "left", md: "center"}} spacing={5}>
                <Feature
                    icon={<Icon as={FaCode} w={10} h={10} />}
                    title={'Langages'}>
                    <List spacing={3}>
                        {skills['langages'].map((skill, idx) => (
                            <ListItem key={idx}>
                                <Flex align="center">
                                    {skill.icon}
                                    <Text ml={2}>{skill.text}</Text>
                                </Flex>
                            </ListItem>
                        ))}
                    </List>
                </Feature>
                <Feature
                    icon={<Icon as={MdOutlineFilterFrames} w={9} h={9} />}
                    title={'Frameworks'}>
                    <List spacing={3}>
                        {skills['frameworks'].map((skill, idx) => (
                            <ListItem key={idx}>
                                <Flex align="center">
                                    {skill.icon}
                                    <Text ml={2}>{skill.text}</Text>
                                </Flex>
                            </ListItem>
                        ))}
                    </List>
                </Feature>
                <Feature
                    icon={<Icon as={LuDatabase} w={10} h={10} />}
                    title={'Bases de données'}>
                    <List spacing={3}>
                        {skills['bdd'].map((skill, idx) => (
                            <ListItem key={idx}>
                                <Flex align="center">
                                    {skill.icon}
                                    <Text ml={2}>{skill.text}</Text>
                                </Flex>
                            </ListItem>
                        ))}
                    </List>
                </Feature>
                <Feature
                    icon={<Icon as={VscTools} w={10} h={10} />}
                    title={'Outils'}>
                    <List spacing={3}>
                        {skills['outils'].map((skill, idx) => (
                            <ListItem key={idx}>
                                <Flex align="center">
                                    {skill.icon}
                                    <Text ml={2}>{skill.text}</Text>
                                </Flex>
                            </ListItem>
                        ))}
                    </List>
                </Feature>
            </SimpleGrid>
        </Box>
    )
}
