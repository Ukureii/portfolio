'use client'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <ChakraProvider>
            <NavBar />
            {children}
        </ChakraProvider>
        </body>
        </html>
    )
}
