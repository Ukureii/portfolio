import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Stack,
  Flex,
  useDisclosure,
  IconButton,
  Text,
  useColorModeValue,
  DrawerFooter,
  Avatar,
  Skeleton,
  Box,
  Heading,
  Divider,
  Button,
} from '@chakra-ui/react';
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

function DrawerProfile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const router = useRouter();
    const handleButtonClick = () => {
        router.push('/profile');
    };
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await fetch('https://siomende.fr/bird/api/utilisateurs/One?id=2');

        if (result.ok === true) {
          const users = await result.json();
          setUsersData(users);
        } else {
          throw new Error('Impossible de contacter le serveur');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Avatar size={'sm'} mt={'4px'} _active={{ transform: 'translateY(2px)' }} onClick={onOpen} src='https://bit.ly/broken-link' />

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader
            bgColor={useColorModeValue('gray.500', 'gray.800')}
            bgSize={'cover'}
            bgPosition={'center'}
            pb={'80px'}
            zIndex={'-1'}>
            <Stack direction={'row'} justify={'space-between'}>
              <Text />
              {/* <IconButton
                size="sm"
                backgroundColor="rgba(255, 255, 255, 0.36)"
                _hover={{ bg: "rgba(255, 255, 255, 0.48)"}}
                _active={{ bg: "rgba(255, 255, 255, 0.64)" }}
                rounded={'full'}
                aria-label='Edit Profile'
                fontSize={18}
                onClick={handleButtonClick}
                icon={<FontAwesomeIcon icon={ faPen } color='white'/>}
              /> */}
            </Stack>
          </DrawerHeader>

          <DrawerBody>
            <Flex justify={'center'} mt={'-14'}>
              <Avatar
                size={'xl'}
                src='https://bit.ly/broken-link'
                borderColor={useColorModeValue('white', 'gray.700')}
                borderWidth={5}
                position={'absolute'}
              />
            </Flex>

            <Box pt={'120px'}>
              <Stack spacing={0} mb={6}>

                {loading ? (
                  <Stack>
                    <Skeleton height='28px' maxWidth={'300px'} minWidth={'150px'}/>
                    <Skeleton height='17px' maxWidth={'400px'} minWidth={'200px'}/>
                  </Stack>
                ) : ( 
                  <>
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                      {usersData.prenomU} {usersData.nomU}
                    </Heading>
                    <Text color={useColorModeValue('gray', 'gray.400')} fontWeight={'light'}>@{usersData.identifiantU}</Text>
                  </>
                )}

                <Divider mt={5} mb={2}/>

                <Heading fontSize={'15px'} mb={1}>
                  À propos de moi
                </Heading>

                {loading ? (
                  <Skeleton height='17px' maxWidth={'400px'} minWidth={'200px'}/>
                ) : ( 
                  <Text color={useColorModeValue('gray', 'gray.400')} fontWeight={'light'}>
                    {usersData.descriptionU}
                  </Text>
                )}
                
              </Stack>

              {/* <Divider mt={6} mb={2}/>

              <Heading fontSize={'15px'} mb={3}>
                Retrouve moi sur
              </Heading>

              <Stack direction={'column'} spacing={2}>
                {chunkedPlatforms.map((chunk, chunkIndex) => (
                  <Stack key={chunkIndex} direction={'row'} spacing={2}>
                    {chunk.map((platform, index) => (
                      <Tag key={index} width={'100%'}>
                        <TagLeftIcon as={platform.icon} />
                        <TagLabel fontWeight={'light'}>{platform.label}</TagLabel>
                      </Tag>
                    ))}
                  </Stack>
                ))}
              </Stack> */}

            </Box> 
          </DrawerBody>

          <DrawerFooter>
            <Button variant={'outline'} rounded={'full'} colorScheme={'red'} size={'sm'}>
              Déconnexion
            </Button>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerProfile;
