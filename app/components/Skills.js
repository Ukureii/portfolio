'use client'
import React from 'react'
import {Box, SimpleGrid, Icon, Text, Stack, Flex, Link} from '@chakra-ui/react'
import { FaProjectDiagram, FaRegEye } from "react-icons/fa";
import { FaCode, FaArrowRight } from "react-icons/fa6";
import { MdDevicesOther } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { LuRocket } from "react-icons/lu";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'rgba(34,139,230)'}
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
        <Stack direction={'row'} mb={6} justifyContent={'space-between'}>
            <Text fontWeight={600} fontSize={{ base: 'xl', sm: '4xl', lg: '5xl' }}>
                II. Compétences
            </Text>
        </Stack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FaCode} w={10} h={10} />}
          title={'Gérer le patrimoine informatique'}
          text={
            'Identifier les ressources numériques, utiliser les référentiels, gérer les habilitations, ' +
            'assurer la continuité, gérer les sauvegardes et vérifier le respect des règles d’utilisation.'
          }
        />
        <Feature
          icon={<Icon as={FaProjectDiagram} mb={'-1'} w={9} h={9} />}
          title={'Traiter les demandes d’assistance et d’évolution'}
          text={
            'Collecter, suivre et orienter des demandes, traiter les demandes concernant les services réseau, système et applicatifs.'
          }
        />
        <Feature
          icon={<Icon as={MdDevicesOther} w={10} h={10} />}
          title={'Développer la présence en ligne de l’organisation'}
          text={
            'Valoriser l\'image sur les médias numériques, référencer et mesurer la visibilité des services en ligne, ' +
            'et améliorer un site Web.'
          }
        />
        <Feature
            icon={<Icon as={RiGroupLine} w={10} h={10} />}
            title={'Travailler en mode projet'}
            text={
              'Analyser les objectifs et l’organisation d’un projet, ' +
              'planifier les activités et évaluer les indicateurs de suivi en analysant les écarts.'
            }
        />
        <Feature
            icon={<Icon as={LuRocket} w={10} h={10} />}
            title={'Mise à disposition d\'un service informatique'}
            text={
              'Réaliser les tests d’intégration et d’acceptation, ' +
              'déployer un service et accompagner les utilisateurs dans sa mise en place.'
            }
        />
        <Feature
            icon={<Icon as={FaRegEye} w={10} h={10} />}
            title={'Organiser son développement professionnel'}
            text={
              'Mettre en place son environnement d’apprentissage personnel, utiliser des outils et stratégies de veille, ' +
              'gérer son identité professionnelle et développer son projet professionnel.'
            }
        />
      </SimpleGrid>
    </Box>
  )
}