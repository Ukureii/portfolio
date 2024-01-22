import React from "react"
import { Box, Tag, TagRightIcon, TagLabel, useColorModeValue } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons"

export default function Logo(props) {
  return (
    <Box {...props}>
        <Tag size='lg' borderRadius='full' variant="ghost" color={useColorModeValue('red.400')}>
          <TagLabel className="logo" fontSize="lg" fontWeight="bold">Bird</TagLabel>
          <TagRightIcon>
            <FontAwesomeIcon icon={faFeatherPointed}></FontAwesomeIcon>
          </TagRightIcon>
        </Tag>
    </Box>
  )
}