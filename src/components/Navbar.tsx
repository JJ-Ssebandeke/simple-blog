import { Flex, HStack, Button, Box} from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FcBusinessman } from 'react-icons/fc'

interface displayInfo{
     toggle: Dispatch<SetStateAction<boolean>>;
}

const Navbar = (props: displayInfo): JSX.Element => {
  const {toggle } = props;
  return <>
          <Flex as="header" position="fixed" w="100%" h="7.5vh"
           backgroundColor="rgba(255, 
           255, 255, 0.8)" backdropFilter="saturate(180%) blur(5px)" bg="#CBD5E0" boxShadow="0 4px 6px -1px rgb(0 0 0 / 10%)"
           justifyContent="center">
             <HStack spacing={20}>
             <Box w="auto" h="auto" >
                 <FcBusinessman size="25px"></FcBusinessman> 
             </Box>
             <Flex>
                <HStack spacing={10}>
                  <Button colorScheme='gray' size='md' variant='ghost' onClick={() => toggle(true)}>
                    About
                  </Button>
                  <Button colorScheme='gray' size='md' variant='ghost' onClick={() => toggle(false)}>
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
