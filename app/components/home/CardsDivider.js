'use client'
import React from 'react'
import { Divider, Box, AbsoluteCenter, useColorModeValue } from '@chakra-ui/react'

const CardsDivider = () => {
  return (
    <>
        <Box position={'relative'} padding={'10'}>
            <Divider />
            <AbsoluteCenter bg={useColorModeValue('white', 'gray.800')} px={'4'} color={useColorModeValue('blackAlpha.600', 'gray.300')} >
                Partagé avec moi
            </AbsoluteCenter>
        </Box>
    </>
  )
}

export default CardsDivider