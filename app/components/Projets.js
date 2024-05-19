import React from 'react';
import {
    Stack,
    Text,
    Avatar,
    Card,
    CardBody,
    CardFooter,
    SimpleGrid,
    Heading,
    Tag,
    Flex,
    Icon,
    Divider,
    Box,
    Link
} from '@chakra-ui/react';
import {FaCode} from "react-icons/fa6";
import {MdDevicesOther} from "react-icons/md";
import {FaProjectDiagram, FaRegEye} from "react-icons/fa";
import {RiGroupLine} from "react-icons/ri";
import {BsShieldLock} from "react-icons/bs";

const Projet = ({ title, env, tags, imageUrl }) => {
    return (
        <Card
            w={'100%'}
            h={'120px'}
            direction={'row'}
            overflow='hidden'
            variant='outline'
            rounded={'lg'}
        >
            <Stack>
                <CardBody mt={-1}>
                    <Stack direction={'row'} spacing={4}>
                        <Avatar
                            size='md'
                            objectFit='cover'
                            src={imageUrl}
                            alt='Caffe Latte'
                        />
                        <Stack direction={'column'}>
                            <Text mt={'1px'} color={'gray.500'} fontSize={'xs'} textTransform={'uppercase'}>
                                {env}
                            </Text>
                            <Heading mt={-2} fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                                {title}
                            </Heading>
                        </Stack>
                    </Stack>
                </CardBody>

                <CardFooter mt={-9}>
                    <Stack direction="row" spacing={2} mt={2}>
                        {tags.map(tag => (
                            <Tag size={'sm'} key={tag} color={'gray.500'} bg={'gray.100'} >
                                {tag}
                            </Tag>
                        ))}
                    </Stack>
                </CardFooter>
            </Stack>
        </Card>
    )
}

const Projets = () => {
    return (
        <>
            <Stack direction={'row'} px={20} py={8} mb={6} justifyContent={'space-between'}>
                <Text fontWeight={600} pb={1} fontSize={{ base: 'xl', sm: '4xl', lg: '5xl' }}>
                    Mes projets
                </Text>
                <Link href="/">
                    <Box
                        background={'white'}
                        visibility={{base: 'hidden', md: 'visible'}}
                        variant={'outline'}
                        rounded={'lg'}
                        h={{base: 8, md: 12}}
                        mt={{base: 0, md: 1, lg: 3}}
                        borderWidth={1}
                        borderColor="gray.200"
                        className="card"
                        px={{base: 1, md: 4}}
                    >
                        <Flex align="center" justify="space-between" h="full">
                            <Text fontWeight={400} color={'gray.600'} fontSize={{ base: 'sm', sm: 'xl', lg: '2xl' }}>
                                Retour
                            </Text>
                        </Flex>
                    </Box>
                </Link>
            </Stack>

            <Stack px={20}>
                <Stack direction={'row'}>
                    <Flex
                        w={8}
                        h={8}
                        align={'center'}
                        justify={'center'}
                        color={'rgba(34,139,230,0.84)'}
                        rounded={'full'}
                        bg={'gray.100'}
                        mb={1}>
                        <Icon as={FaCode} w={5} h={5} />
                    </Flex>
                    <Text fontWeight={600} fontSize={'2xl'} ms={1} mt={'-2px'}>Gérer le patrimoine informatique</Text>
                </Stack>
                <Text mt={-1} color={'gray.500'}>Développement de sites web en HTML, CSS, PHP, CodeIgniter, JavaScript, React et Next.js</Text>
            </Stack>

            <SimpleGrid px={20} pt={5} pb={20} spacing={4} columns={{ base: 1, md: 2, lg: 3 }}>
                <Projet
                    title={'Bird'}
                    env={'Web'}
                    tags={['JavaScript', 'NextJS', 'Travail de groupe' ]}
                    imageUrl={'/bird.png'}
                />
                <Projet
                    title={'CLD Keys'}
                    env={'Web'}
                    tags={['PHP', 'Bootstrap', 'MySQL']}
                    imageUrl={'/cobolcloud.png'}
                />
                <Projet
                    title={'Dōmori'}
                    env={'Mobile'}
                    tags={['Java', 'Android Studio', 'MySQL']}
                    imageUrl={'/doomori.png'}
                />
                <Projet
                    title={'Dōmori API'}
                    env={'API'}
                    tags={['PHP', 'CodeIgniter4', 'MySQL']}
                    imageUrl={'/doomori.png'}
                />
                <Projet
                    title={'Nexus'}
                    env={'Web'}
                    tags={['JavaScript', 'NextJS', 'MySQL']}
                    imageUrl={'/nexus.png'}
                />
                <Projet
                    title={'Nexus API'}
                    env={'API'}
                    tags={['PHP', 'CodeIgniter4', 'MySQL']}
                    imageUrl={'/nexus.png'}
                />
            </SimpleGrid>

            <Stack px={20}>
                <Divider mb={2} />
                <Stack direction={'row'}>
                    <Flex
                        w={8}
                        h={8}
                        align={'center'}
                        justify={'center'}
                        color={'rgba(34,139,230,0.84)'}
                        rounded={'full'}
                        bg={'gray.100'}
                        mb={1}>
                        <Icon as={FaProjectDiagram} mb={'-1'} w={5} h={5} />
                    </Flex>
                    <Text fontWeight={600} fontSize={'2xl'} ms={1} mt={'-2px'}>Traiter les demandes d’assistance et d’évolution</Text>
                </Stack>
                <Text mt={-2} color={'gray.500'}>Gestion de projet en méthode agile. Utilisation de Trello et GitHub</Text>
            </Stack>

            <SimpleGrid px={20} pt={5} pb={20} spacing={4} columns={{ base: 1, md: 2, lg: 3 }}>
                <Projet
                    title={'Bird'}
                    env={'Web'}
                    tags={['JavaScript', 'NextJS', 'Travail de groupe' ]}
                    imageUrl={'/bird.png'}
                />
                <Projet
                    title={'CLD Keys'}
                    env={'Web'}
                    tags={['PHP', 'Bootstrap', 'MySQL']}
                    imageUrl={'/cobolcloud.png'}
                />
                <Projet
                    title={'Dōmori'}
                    env={'Mobile'}
                    tags={['Java', 'Android Studio', 'MySQL']}
                    imageUrl={'/doomori.png'}
                />
                <Projet
                    title={'Nexus'}
                    env={'Web'}
                    tags={['PHP', 'CodeIgniter4', 'MySQL']}
                    imageUrl={'/nexus.png'}
                />
            </SimpleGrid>

            <Stack px={20}>
                <Divider mb={2} />
                <Stack direction={'row'}>
                    <Flex
                        w={8}
                        h={8}
                        align={'center'}
                        justify={'center'}
                        color={'rgba(34,139,230,0.84)'}
                        rounded={'full'}
                        bg={'gray.100'}
                        mb={1}>
                        <Icon as={MdDevicesOther} w={5} h={5} />
                    </Flex>
                    <Text fontWeight={600} fontSize={'2xl'} ms={1} mt={'-2px'}>Développer la présence en ligne de l’organisation</Text>
                </Stack>
                <Text mt={-2} color={'gray.500'}>Développement d'applications mobiles avec Android Studio en Java</Text>
            </Stack>

            <SimpleGrid px={20} pt={5} pb={20} spacing={4} columns={{ base: 1, md: 2, lg: 3 }}>
                <Projet
                    title={'Bird'}
                    env={'Web'}
                    tags={['JavaScript', 'NextJS', 'Travail de groupe' ]}
                    imageUrl={'/bird.png'}
                />
                <Projet
                    title={'Dōmori'}
                    env={'Mobile'}
                    tags={['Java', 'Android Studio', 'MySQL']}
                    imageUrl={'/doomori.png'}
                />
                <Projet
                    title={'Nexus'}
                    env={'Web'}
                    tags={['JavaScript', 'NextJS', 'MySQL']}
                    imageUrl={'/nexus.png'}
                />
            </SimpleGrid>

            <Stack px={20}>
                <Divider mb={2} />
                <Stack direction={'row'}>
                    <Flex
                        w={8}
                        h={8}
                        align={'center'}
                        justify={'center'}
                        color={'rgba(34,139,230,0.84)'}
                        rounded={'full'}
                        bg={'gray.100'}
                        mb={1}>
                        <Icon as={RiGroupLine} w={5} h={5} />
                    </Flex>
                    <Text fontWeight={600} fontSize={'2xl'} ms={1} mt={'-2px'}>Travailler en mode projet</Text>
                </Stack>
                <Text mt={-2} color={'gray.500'}>Travail en équipe sur des projets de développement web et mobile</Text>
            </Stack>

            <SimpleGrid px={20} pt={5} pb={20} spacing={4} columns={{ base: 1, md: 2, lg: 3 }}>
                <Projet
                    title={'Bird'}
                    env={'Web'}
                    tags={['JavaScript', 'NextJS', 'Travail de groupe' ]}
                    imageUrl={'/bird.png'}
                />
                <Projet
                    title={'CLD Keys'}
                    env={'Web'}
                    tags={['PHP', 'Bootstrap', 'MySQL']}
                    imageUrl={'/cobolcloud.png'}
                />
                <Projet
                    title={'Dōmori'}
                    env={'Mobile'}
                    tags={['Java', 'Android Studio', 'MySQL']}
                    imageUrl={'/doomori.png'}
                />
                <Projet
                    title={'Nexus'}
                    env={'Web'}
                    tags={['PHP', 'CodeIgniter4', 'MySQL']}
                    imageUrl={'/nexus.png'}
                />
                <Projet
                    title={'Portfolio'}
                    env={'Web'}
                    tags={['JavaScript', 'NextJS' ]}
                    imageUrl={'/portfolio.png'}
                />
            </SimpleGrid>

            <Stack px={20}>
                <Divider mb={2} />
                <Stack direction={'row'}>
                    <Flex
                        w={8}
                        h={8}
                        align={'center'}
                        justify={'center'}
                        color={'rgba(34,139,230,0.84)'}
                        rounded={'full'}
                        bg={'gray.100'}
                        mb={1}>
                        <Icon as={BsShieldLock} mt={'-1px'} w={5} h={5} />
                    </Flex>
                    <Text fontWeight={600} fontSize={'2xl'} ms={1} mt={'-2px'}>Mise à disposition d'un service informatique</Text>
                </Stack>
                <Text mt={-2} color={'gray.500'}>Sécurisation d'application web et mobiles avec des outils comme OWASP ZAP</Text>
            </Stack>

            <SimpleGrid px={20} pt={5} pb={20} spacing={4} columns={{ base: 1, md: 2, lg: 3 }}>
                <Projet
                    title={'CLD Keys'}
                    env={'Web'}
                    tags={['PHP', 'Bootstrap', 'MySQL']}
                    imageUrl={'/cobolcloud.png'}
                />
                <Projet
                    title={'Dōmori'}
                    env={'Mobile'}
                    tags={['Java', 'Android Studio', 'MySQL']}
                    imageUrl={'/doomori.png'}
                />
                <Projet
                    title={'Nexus'}
                    env={'Web'}
                    tags={['PHP', 'CodeIgniter4', 'MySQL']}
                    imageUrl={'/nexus.png'}
                />
            </SimpleGrid>

            <Stack px={20}>
                <Divider mb={2} />
                <Stack direction={'row'}>
                    <Flex
                        w={8}
                        h={8}
                        align={'center'}
                        justify={'center'}
                        color={'rgba(34,139,230,0.84)'}
                        rounded={'full'}
                        bg={'gray.100'}
                        mb={1}>
                        <Icon as={FaRegEye} w={5} h={5} />
                    </Flex>
                    <Text fontWeight={600} fontSize={'2xl'} ms={1} mt={'-2px'}>Organiser son développement professionnel</Text>
                </Stack>
                <Text mt={-2} color={'gray.500'}>Réalisation d'une veille technologique sur les nouvelles technologies et les montres connectées.</Text>
            </Stack>

            <SimpleGrid px={20} pt={5} pb={20} spacing={4} columns={{ base: 1, md: 2, lg: 3 }}>
                <Projet
                    title={'Auto Formation'}
                    env={'Recherche'}
                    tags={['JavaScript', 'COBOL', 'Framework']}
                    imageUrl={'/work.png'}
                />
                <Projet
                    title={'LinkedIn'}
                    env={'Réseau social'}
                    tags={['Réseau', 'Identité professionnelle']}
                    imageUrl={'/linkedin.png'}
                />
                <Projet
                    title={'Portfolio'}
                    env={'Web'}
                    tags={['JavaScript', 'NextJS' ]}
                    imageUrl={'/portfolio.png'}
                />
                <Projet
                    title={'Veille Technologique'}
                    env={'Recherche'}
                    tags={['Java', 'Android Studio', 'MySQL']}
                    imageUrl={'/doomori.png'}
                />
            </SimpleGrid>
        </>
    );
};

export default Projets;