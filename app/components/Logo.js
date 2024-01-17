import React from "react"
import { Box, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons"

export default function Logo(props) {
  return (
    <Box {...props}>
        <Tag size='lg' borderRadius='full'>
          <TagLeftIcon>
            <FontAwesomeIcon icon={faFeatherPointed} ></FontAwesomeIcon>
          </TagLeftIcon>
          <TagLabel className="logo" fontSize="lg" fontWeight="bold">Bird</TagLabel>
        </Tag>
    </Box>
  )
}