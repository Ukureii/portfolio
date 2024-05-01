import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image, Tag,
} from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const data = [
  { id: 1, title: "Dōmori", env: 'Mobile', description : 'Application de garde d’animaux de compagnie entre particuliers.', tags: ['Java', 'Android Studio', 'MySQL'], imageUrl: '/test.png' },
  { id: 2, title: "Bird", env: 'Web', description : 'Site pour cartographier ses projets d\'orientation scolaire et professionnelle.', tags: ['JavaScript', 'NextJS', 'Travail de groupe' ], imageUrl: '/bird.png' },
  { id: 3, title: "Nexus", env: 'Web', description : 'Site de mise en relation pour joueurs de jeux vidéo de même niveau.', tags: ['JavaScript', 'NextJS', 'MySQL'], imageUrl: '/nexus.png' },
  { id: 4, title: "Portfolio", env: 'Web', description : 'Portefolio numérique conçu pour présenter mes projets et compétences.', tags: ['JavaScript', 'NextJS' ], imageUrl: '/portfolio.png' },
  { id: 5, title: "CLD Keys", env: 'Web', description : 'Plateforme de génération de clés SSH pour les clients de CobolCloud.', tags: ['PHP', 'Bootstrap', 'MySQL'], imageUrl: '/cobolcloud.png' }
];

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

  const scrollPrev = useCallback(() => {
    if(emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if(emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
      <div className={"slides"}>
      <Text fontWeight={600} pt={16} ps={20} fontSize={{ base: 'xl', sm: '4xl', lg: '5xl' }}>
        I. Projets
      </Text>
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map(item => (
            <div key={item.id} className="embla__slide">
              <Center py={12}>
                <Box
                  role={'group'}
                  p={6}
                  width={'330px'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}
                >
                  <Box
                    rounded={'lg'}
                    mt={-8}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 2,
                      left: 0,
                      backgroundImage: `url(${item.imageUrl})`,
                      filter: 'blur(10px)',
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(18px)',
                      },
                    }}>
                    <Image
                      rounded={'lg'}
                      height={230}
                      width={282}
                      objectFit={'cover'}
                      src={item.imageUrl}
                      alt="#"
                    />
                  </Box>
                  <Stack pt={10} align={'start'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                      {item.env}
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                      {item.title}
                    </Heading>
                    <Text color={'gray.500'} fontSize={'sm'} textAlign={"start"}>
                      {item.description}
                    </Text>
                    <Stack direction="row" spacing={2} mt={2}>
                      {item.tags.map(tag => (
                          <Tag size={'sm'} key={tag} color={'gray.500'} bg={'gray.100'} >
                            {tag}
                          </Tag>
                      ))}
                    </Stack>
                  </Stack>
                </Box>
              </Center>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__buttons">
        <button className='embla__prev' onClick={scrollPrev}><FaAngleLeft size={28}/></button>
        <button className='embla__next' onClick={scrollNext}><FaAngleRight size={28} /></button>
      </div>
    </div>
      </div>
  )
}
