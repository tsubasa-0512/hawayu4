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

  const WorkSleepEn = () =>{
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();

    const onClickToMypage = () =>{
      history.push('/user/home')
    }

    return(
        <ChakraProvider>
                <ButtonGroup mt="0.5rem" ml="0.5rem" size="sm" isAttached variant="outline" onClick ={()=>history.goBack()}>
                    <IconButton aria-label="back" icon={<ArrowBackIcon />} />
                    <Button mr="-px">back</Button>  
                </ButtonGroup>
           <Center mt={'2rem'}>
            <Button onClick={onOpen} bg="yellow.100" color="gray" size="sm" shadow="lg"
            w="40vw" h="10vw">
                Lifestyle improvement work
            </Button>
            </Center>

          {/* onOpenがかぶるので、後でcomponent読み込みにするかも */}
            <Center mt={'2rem'}>
            <Button onClick={onOpen} bg="yellow.100" color="gray" size="sm" shadow="lg"
            w="40vw" h="10vw">
                Autonomic nerve improvement work
            </Button>
            </Center>
         

        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">                
             Lifestyle improvement work
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Center>
            <Image src={question3} boxSize="50%"/>
          </Center>
          
          <List spacing={3} style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListItem>
                  Why don't you start from tonight?
                </ListItem>
              
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Do not watch PC / smartphone / TV 1 hour before going to bed
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Incorporate a simple stretch one hour before going to bed instead of watching a smartphone or TV
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Take a bath 90 minutes before going to bed (15 minutes in a 40 degree bath)
                * If it is difficult to take a bath, you can use a footbath.
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Brush your teeth 30 minutes to 1 hour before going to bed
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                When you wake up in the morning, you will be exposed to the sun (good awakening promotes good sleep)
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Make time to move as much as possible during the day
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Avoid caffeine (green tea, black tea, coffee) after the evening
                </ListItem>

                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>

                <ListIcon as={BiBeenHere} 
               color=  "green.500" />
                 Real Voice
               </ListItem>

                <Text>
                People who cannot physically get enough sleep due to a lot of work should also be careful. Initially, you are often tired and can sleep quickly, but if you sleep for a short period of time, your sleep quality may gradually decline. It may be difficult to adjust the amount of work in the actual field, but it is recommended that you consult with your boss or others so that you can get enough sleep as soon as possible.
                </Text>

         </List>

          </ModalBody>

          <ModalFooter>
            <Button bg="gray" mr={3} onClick={onClose}>
              close
            </Button>
            <Button bg="#FFE3D3" mr={3} onClick={onClickToMypage}>
              mypage
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </ChakraProvider>
    )
  }

  export default WorkSleepEn;