'use client'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Tag,
  TagLeftIcon,
  TagLabel,
  IconButton,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FaTiktok, FaTwitch, FaSnapchatGhost, FaDiscord, FaFacebookF, FaSteam, FaXbox, FaPlaystation, FaBattleNet } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const socialMediaPlatforms = [
  { icon: GrInstagram, label: 'Instagram' },
  { icon: FaTiktok, label: 'Tik Tok' },
  { icon: FaTwitch, label: 'Twitch' },
  { icon: FaXTwitter, label: 'X Twitter' },
  { icon: FaDiscord, label: 'Discord' },
  { icon: FaSnapchatGhost, label: 'Snapchat' },
  { icon: FaFacebookF, label: 'FaceBook' },
  { icon: FaSteam, label: 'Steam' },
  { icon: FaXbox, label: 'Xbox' },
  { icon: FaPlaystation, label: 'PlayStation' },
  { icon: FaBattleNet, label: 'Battle Net' },
];

const chunkedPlatforms = socialMediaPlatforms.reduce((result, item, index) => {
  const chunkIndex = Math.floor(index / 2);

  if (!result[chunkIndex]) {
    result[chunkIndex] = [];
  }

  result[chunkIndex].push(item);
  return result;
}, []);

export default function SocialProfileWithImage() {
  return (
    <Center py={6}>
      <Box
        position="relative"
        maxW={'420px'}
        minW={'260px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'xl'}
        overflow={'hidden'}>
        <Image
          h={'110px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit="cover"
          alt="#"
        />
        <Box position="absolute" top={2} right={2} zIndex={2}>
          <IconButton
            size="sm"
            colorScheme='whiteAlpha'
            rounded={'full'}
            aria-label='Edit Profile'
            fontSize={18}
            icon={<FontAwesomeIcon icon={ faPen } />}
          />
        </Box>
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src='https://bit.ly/broken-link'
            css={{
              border: '4px solid white',
            }}
          />
        </Flex>

        <Box p={5}>
          <Stack spacing={0} mb={6}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              John Doe
            </Heading>
            <Text color={'gray'} fontWeight='light'>@choisi_ton_pseudo</Text>

            <Divider mt={5} mb={2}/>

            <Heading fontSize={'15px'} mb={1}>
              À propos de moi
            </Heading>
            <Text color={'gray'} fontWeight='light'>
              Ajoute une biographie personnalisée sur ton profil !
            </Text>
          </Stack>

          <Divider mt={6} mb={2}/>

          <Heading fontSize={'15px'} mb={2}>
              Retrouve moi sur
          </Heading>

          <Stack direction="column" spacing={2}>
            {chunkedPlatforms.map((chunk, chunkIndex) => (
              <Stack key={chunkIndex} direction="row" spacing={2}>
                {chunk.map((platform, index) => (
                  <Tag key={index} width="49%">
                    <TagLeftIcon as={platform.icon} />
                    <TagLabel>{platform.label}</TagLabel>
                  </Tag>
                ))}
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
    </Center>
  )
}