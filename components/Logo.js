import React from "react"
import { Box, Text } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text className="logo" fontSize="lg" fontWeight="bold">
        BetterStemic
      </Text>
    </Box>
  )
}