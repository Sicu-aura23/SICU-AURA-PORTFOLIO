'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"


const baseStyle = {
  // select the indicator part
 
}

const stepperTheme = {
  baseStyle,
}

const theme = extendTheme({
  bg: '#0F182B',
  components: {
    Stepper: stepperTheme,
  },
  
})

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}