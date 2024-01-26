import React from "react"
import { Box, Tag, TagRightIcon, TagLabel, Link, useColorModeValue } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link href={'/'}>
        <Tag size={'lg'} borderRadius={'full'} variant={'ghost'} color={useColorModeValue('red.400', 'red.300')}>
          <TagLabel className={'logo'} fontSize={'2xl'} fontWeight={'bold'}>Bird</TagLabel>
          <TagRightIcon fontSize={'xl'}>
            <FontAwesomeIcon icon={faFeatherPointed}></FontAwesomeIcon>
          </TagRightIcon>
        </Tag>
      </Link>
    </Box>
  )
}