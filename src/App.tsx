import React from 'react';
import { Flex, Heading, Box, Container, HStack, Button, Text } from '@chakra-ui/react';
import './App.css';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  return (
    <>
    <Navbar />
    <Flex w="100%" h="92.5vh" > 
       <Container mt={20}>
         <Heading>About</Heading>
          <Text>
            After school, I studied Media and Communications for Digital Business in Aachen, Germany. 
            It was at that time, where I found my passion for Design, Technology and being an Entrepreneur. 
            In my free time, I always liked to follow my curiosity, learn new things and explore the far corners of the internet. 
            In my evenings I like to read books, write articles, code things, play tennis, cook and spend time with my favorite people in life.
          </Text>
          <Flex direction="column">
            <Heading>Projects</Heading>
            <Text>NFT IoT PlatForm</Text>
            <Text>Auction Platform</Text>
            <Text>Lending Application</Text>
          </Flex>
          
       </Container>

    </Flex>
      
    </>
  );
}

export default App;
