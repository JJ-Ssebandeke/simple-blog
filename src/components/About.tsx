import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

const About = (): JSX.Element => {
  return <>
          <Heading>Hey Im, JJ</Heading>
          <Text mt={2}>
            I studied Software and Computer Hardware Engineering, at Coventry University, UK.
            I have proven programming ability especially in Rust, python and TypeScript. Currently I am trying to become a full stack Web3 developer 
            beacuse, I believe the future of the web is decentralized.
          </Text>
          <br />
          <Text>
            In my free time, I love following my curiosity, learn new things and exploring the far corners of the internet. 
            I like to read books, code dope things and produce music.
          </Text>
  </>;
};

export default About;
