import { Flex, HStack, Button, Box, Image} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FaRegUser } from 'react-icons/fa'

const Navbar = () => {
  return <>
          <Flex as="header" position="fixed" w="100%" h="7.5vh"
           backgroundColor="rgba(255, 
           255, 255, 0.8)" backdropFilter="saturate(180%) blur(5px)" bg="#CBD5E0" boxShadow="0 4px 6px -1px rgb(0 0 0 / 10%)"
           justifyContent="center">
             <HStack spacing={20}>
             <Box w="auto" h="auto" >
                 <FaRegUser size="25px"></FaRegUser> 
             </Box>
             <Flex>
                <HStack spacing={10}>
                  <Button colorScheme='gray' size='md' variant='ghost'>
                    About
                  </Button>
                  <Button colorScheme='gray' size='md' variant='ghost'>
                    Projects
                  </Button>
               </HStack>
            </Flex>
            <ColorModeSwitcher />
        </HStack>
    </Flex>
  
  </>;
};

export default Navbar;
