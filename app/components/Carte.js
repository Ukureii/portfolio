'use client'
import React, { useState } from 'react';
import { Flex, Box, Image, useColorModeValue, Tooltip, Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import MenuDeroulant from './MenuDeroulant';

const data = [
  {
    imageURL: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Carte de Léa',
    isPublic: true,
  },
  {
    imageURL: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
    ,
    name: 'Etudes sup',
    isPublic: false,
  },
  {
    imageURL: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    name: 'Collège',
    isPublic: true,
  },
  {
    imageURL: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    name: "Je m'amuse",
    isPublic: false,
  },
  {
    imageURL: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'Test',
    isPublic: false,
  },
  {
    imageURL: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    name: 'Lycée',
    isPublic: false,
  }
];

function CartesGrid() {
  return (
    <Flex alignItems="center" justifyContent="center" maxWidth="100vw">
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={6}
        maxW="100%"
        mx="auto"
        padding="60px"
        overflowX="hidden"
      >
        {data.map((card, index) => (
          <Carte key={index} data={card} />
        ))}
      </Box>
    </Flex>
  );
}

function Carte({ data }) {
  const [editableValue, setEditableValue] = useState(data.name);
  const [isEditing, setIsEditing] = useState(false);

  const handleRename = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (value) => {
    setEditableValue(value);
    setIsEditing(false);
  };

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      borderWidth="1px"
      rounded="lg"
      shadow="sm"
      position="relative"
      transition="box-shadow 0.3s ease"
      _hover={{
        boxShadow: 'xl',
      }}
    >
      <Box position="absolute" top={2} right={2} zIndex={2}>
        <MenuDeroulant onRenameClick={handleRename} />
      </Box>

      <Image
        src={data.imageURL}
        alt={`Picture of ${data.name}`}
        roundedTop="lg"
        maxW="300px"
        maxH="200px"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={1}
      />

      <Box p="4" fontSize={18}>
        <Flex justifyContent="space-between" alignContent="center">
          <Box>
            <Editable
              defaultValue={editableValue}
              onChange={(value) => handleTitleChange(value)}
              isEditing={isEditing}
              width={200}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
          <Box mt={1}>
            {data.isPublic && (
              <Tooltip hasArrow label="Cette carte est publique" borderRadius={5}>
                <FontAwesomeIcon icon={faEarthEurope} />
              </Tooltip>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default CartesGrid;