'use client'
import React from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FaCode } from "react-icons/fa6";
import { FaProjectDiagram, FaRegEye } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { BsShieldLock } from "react-icons/bs";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'rgba(34,139,230,0.84)'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.500'}>{text}</Text>
    </Stack>
  )
}

export default function SimpleThreeColumns() {
  return (
    <Box px={{ base: 10, md: 20}} pt={20} mb={12}>
        <Text fontWeight={600} mb={6} fontSize={{ base: 'xl', sm: '4xl', lg: '5xl' }}>
            II. Compétences
        </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FaCode} w={10} h={10} />}
          title={'Gérer le patrimoine informatique'}
          text={
            'Développement de sites web en HTML, CSS, PHP, CodeIgniter, JavaScript, React et Next.js'
          }
        />
        <Feature
          icon={<Icon as={FaProjectDiagram} mb={'-1'} w={10} h={10} />}
          title={'Traiter les demandes d’assistance et d’évolution'}
          text={
            'Gestion de projet en méthode agile. Utilisation de Trello et GitHub'
          }
        />
        <Feature
          icon={<Icon as={MdDevicesOther} w={10} h={10} />}
          title={'Développer la présence en ligne de l’organisation'}
          text={
            'Développement d\'applications mobiles avec Android Studio en Java'
          }
        />
          <Feature
              icon={<Icon as={RiGroupLine} w={10} h={10} />}
              title={'Travailler en mode projet'}
              text={
                  'Travail en équipe sur des projets de développement web et mobile'
              }
          />
          <Feature
              icon={<Icon as={BsShieldLock} mb={'-1'} w={10} h={10} />}
              title={'Mise à disposition d\'un service informatique'}
              text={
                  'Sécurisation d\'application web et mobiles avec des outils comme OWASP ZAP'
              }
          />
          <Feature
              icon={<Icon as={FaRegEye} w={10} h={10} />}
              title={'Organiser son développement professionnel'}
              text={
                  'Réalisation d\'une veille technologique sur les nouvelles technologies et les montres connectées.'
              }
          />
      </SimpleGrid>
    </Box>
  )
}