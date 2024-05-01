import React from "react"
import { Box, Tag, TagLabel, Link } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link href={'/'}>
        <Tag size={'lg'} borderRadius={'full'} variant={'ghost'}>
          <TagLabel className={'logo'} fontSize={'2xl'} fontWeight={'bold'}>Portfolio</TagLabel>
        </Tag>
      </Link>
    </Box>
  )
}