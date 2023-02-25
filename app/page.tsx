"use client";

import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import Header from './Header';
import Pricing from './Pricing';
import Features from './Features';

export default function Home() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
  <ChakraProvider>
    <Header/>
    <Pricing/>
    <Features/>
  </ChakraProvider>
  )
}