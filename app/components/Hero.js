'use client'
import {
  chakra,
  Container,
  Stack,
  Flex,
  Icon,
  Link,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <Container maxW={'7xl'} mt={{ lg: '-40px' }} mb={{ sm: '20px', md: '40px', lg: '40px' }}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1}
            fontWeight={600}
			    >
            <Text
              as={'span'}
              position={'relative'}
              className='logo'
              fontSize={{ base: 'md', sm: 'md', lg: 'xl' }}
            >
              Portefolio
            </Text>
            <br />
            <Text as={'span'} color={'black'} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              Ambre LAURENT
            </Text>
          </Heading>
          <Text color={'gray.500'} mb={6}>
            Étudiante en BTS SIO au lycée Émile Peytavin, je suis passionnée par le développement web et mobile.
            Je suis constamment en quête de nouvelles technologies et de défis stimulants dans le domaine de l'informatique.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Link href={'#contact'}>
              <Button
                h={12}
                px={5}
                bg={"blue.400"}
                color={"white"}
                bgGradient="linear(to-br, #228be6,#15aabf)"
                _hover={{ bgGradient: 'linear(to-br, #228be6,#15aabf)', opacity: 0.85, transition: '300ms ease' }}
                variant="solid"
                size="lg"
                rounded="full"
                fontWeight="bold"
                href={'/contact'}
                mb={{ base: 2, sm: 0 }}
              >
                <chakra.span>Me contacter</chakra.span>
              </Button>
            </Link>
            <Flex
              border="1px solid"
              borderColor="blackAlpha.500"
              justifyContent="center"
              p={3}
              px={4}
              lineHeight={1.18}
              rounded="full"
              boxShadow="md"
              fontWeight="bold"
              alignItems="center"
              rel="noopener noreferrer"
            >
              <Icon as={FaGithub} h={4} w={4} mr={'4px'} />
              <chakra.span as={Link} href={'https://github.com/Ukureii'} target={"_blank"} ml={1}>Github</chakra.span>
            </Flex>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'full'}
            rounded={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/workspace.png'}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}
