import React from 'react';
import { Text, Heading, LinkBox, Stack, LinkOverlay,  } from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi'


interface projectInfo {
  title: string
  desc: string
  link: string
}

const PojectCard = (props: projectInfo): JSX.Element => {
  const {title, desc, link} = props;
  return (
    <LinkBox p={5} shadow='md' borderWidth='1px' boxShadow="lg">
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4} mb={2}>{desc}</Text>
      <LinkOverlay href={link} color="teal.400" isExternal >
        <FiGithub  size='25px' />
     </LinkOverlay>
    </LinkBox>
  )
}


const Projects = (): JSX.Element => {
  return <>
        <Stack spacing={8}>
          <PojectCard
            title='NFT IoT Platform'
            desc='This project is an implementation of a smart device management system, which uses non-fungible tokens (NFTs) to track the ownership of physical smart devices'
            link="https://github.com/JJ-Ssebandeke/NFT-IoT-Platform"
          />
          <PojectCard
            title='Auction Platform'
            desc='This project is a decentralized auction platform for both fungible (ER-20) and non-fungible Assets (ERC-721'
            link='https://github.com/JJ-Ssebandeke/Lending-application'
         />
         <PojectCard
            title='Lending Application'
            desc='This project is a basic DeFi application similar to compound which allows users to stake ETH and subsequently receive an interest-bearing token the platform'
            link="https://github.com/JJ-Ssebandeke/Auction-application"
          />
        </Stack>

  </>;
};

export default Projects;
