import React from "react"
import { Box, Text, Link } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link href="/">
        <Text className="logo" fontSize="lg" fontWeight="bold">
          Bird
        </Text>
      </Link>
    </Box>
  )
}