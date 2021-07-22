import React, { useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';
import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    Heading,
    Container,Select,Image,Center,Modal,ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Text,
    List,ListItem,ListIcon
  } from "@chakra-ui/react"
import { ArrowRightIcon,ArrowBackIcon } from '@chakra-ui/icons'
import { MdCheckCircle } from "react-icons/md";
import { BiBeenHere } from "react-icons/bi";

import question3 from '../hawayu/question3.png';

  const SleepEn = () =>{
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();

    const onClickToMypage = () =>{
      history.push('/user/home')
    }

    const onClickToWorkEn = () =>{
        history.push('/contents/en/sleep/work')
        // alert("work")
      }
  

    return(
        <ChakraProvider>
                {/* <ButtonGroup mt="0.5rem" ml="0.5rem" size="sm" isAttached variant="outline" onClick ={()=>history.goBack()}>
                    <IconButton aria-label="back" icon={<ArrowBackIcon />} />
                    <Button mr="-px">戻る</Button>  
                </ButtonGroup> */}
           <Center mt={'2rem'}>
            <Button onClick={onOpen} bg="yellow.100" color="gray" size="sm" shadow="lg"
            w="40vw" h="10vw">
                 About insomnia
            </Button>
            </Center>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">
          <Badge colorScheme="purple" mr="0.5rem">Sleeping</Badge>
          <Badge colorScheme="green" mr="0.5rem">Tips</Badge>
            About insomnia
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
   
          <Center>
            <Image src={question3} boxSize="50%"/>
          </Center>
          <List spacing={3}>
                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListIcon as={BiBeenHere} color="green.500" />
                What is insomnia?
                </ListItem>
                <Text>
                Sleep troubles (difficulty falling asleep, waking up in the middle, waking up early in the morning, not getting a deep sleep) continued for more than a month, such as tiredness during the day, decreased motivation, and decreased concentration. It's going to be out of order.
Even if you don't get tired during the day, if you have sleep problems, you should take early measures.
It will be good.
                 </Text>

                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListIcon as={BiBeenHere} 
               color=  "green.500" />
                 What is the cause?
               </ListItem>

                <Text>
                It may be caused by poor sleep quality due to physical illness, stress / mental illness, or disturbance of daily life. Examples of physical causes include hay fever, asthma, pollakiuria, eczema, and restlegless syndrome. If the cause is the body, you must first approach the cause of the body. On the other hand, for stress, mental illness, and disturbances in daily life, try the following work.
                </Text>


         </List>
      

          </ModalBody>

          <ModalFooter>
            <Button bg="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button bg="#FFE3D3" mr={3} onClick={onClickToWorkEn} >
              Try your work!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
       
      </ChakraProvider>
    )
  }

  export default SleepEn;