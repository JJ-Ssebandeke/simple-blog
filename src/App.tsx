import React from 'react';
import { Flex, Container,} from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import { useState} from 'react'
import { newTracker, enableActivityTracking, trackPageView } from '@snowplow/browser-tracker';
import { LinkClickTrackingPlugin, enableLinkClickTracking } from '@snowplow/browser-plugin-link-click-tracking';


newTracker('sp', 'http://localhost:9090', {
      appId: 'my-app-id',
      plugins: [ LinkClickTrackingPlugin() ],
  });
  
enableActivityTracking({
    minimumVisitLength: 30,
    heartbeatDelay: 10
  });
  
trackPageView();
enableLinkClickTracking();

function App(): JSX.Element {
  
  const [toggleContent,setToggleContent] = useState<boolean>(true);

  return (
    <>
    <Navbar toggle={setToggleContent} />
    <Flex w="100%" h="92.5vh" > 
       <Container mt={20} pl="10">
         {
          toggleContent ? <About /> : < Projects />
         }       
       </Container>

    </Flex>
      
    </>
  );
}

export default App;
