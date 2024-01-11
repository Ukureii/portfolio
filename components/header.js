import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react"
import Head from "next/head"

const header = () => {
  return (
    <>
        <Flex p="2rem" direction="column" alignItems="center">
            <Heading as="h1" size="4xl" noOfLines={1} className="title">Stemic mais en mieux</Heading>
            <Text mt="1rem" className="slogan">Tqt, fais confiance.</Text>
        </Flex>
    </>
  )
}

export default header