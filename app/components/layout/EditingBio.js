import React from 'react'
import {
    Editable,
    EditableTextarea,
    EditablePreview,
    Flex,
    Input,
    IconButton,
    ButtonGroup,
    useEditableControls,
    useColorModeValue
  } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from 'react-icons/fa6';
import { useRemoteData } from '../hooks/useRemoteData'


export default function EditingBio() {
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  
      return isEditing ? (
        <ButtonGroup size='sm' variant={'ghost'}>
          <IconButton icon={<FaCheck />} {...getSubmitButtonProps()} />
          <IconButton icon={<FaXmark />} {...getCancelButtonProps()} />
        </ButtonGroup>
      ) : (
        <Flex>
          <IconButton size='sm' variant={'ghost'} icon={<EditIcon />} {...getEditButtonProps()} />
        </Flex>
      )
    }
  
    return (
      <Editable
        color={useColorModeValue('gray', 'gray.400')}
        fontWeight={'light'}
        defaultValue='Ajoute une biographie personnalisée sur ton profil !'
        isPreviewFocusable={false}
      >
        <EditablePreview />
        <Input as={EditableTextarea} />
        <EditableControls />
      </Editable>
    )
  }