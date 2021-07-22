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
                Work to know and release stress
            </Button>
            </Center>
         

        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">                
          Work to know and release stress
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Center>
            <Image src={question3} boxSize="50%"/>
          </Center>
          
          <List spacing={3} style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListItem>
                  Why don't you start from today?
                </ListItem>
              
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                  Write down the stress on a piece of paper (PC is OK)

                  <br />* Recognizing that you are feeling stress can also help reduce stress
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Sleep 30 minutes more
                  <br />* Lack of sleep makes you more susceptible to stress damage than usual.
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Make your own time for 30 minutes and try what you want to do
                <br />* What you want to do, not what you have to do
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                5 minutes walk
                <br />* Ideal is a park with greenery ◎
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Try to buy something with a soothing scent
                <br />* I like myself! Please choose what you like
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Try to get away from what you feel stressed
                <br />* For example, if human relationships are stressful, try reducing the time involved.
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                  Talk to a psychosomatic medicine department, mental clinic, etc.
                  <br />* It is also important to get the help of an expert
                </ListItem>

                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>

                <ListIcon as={BiBeenHere} 
               color=  "green.500" />
                 Real Voice
               </ListItem>

                <Text>
                Even under the same circumstances, some people do not become adjustment disorders. There are various reasons, such as differences in stress release methods, ways of thinking about things, and differences in the original stress tolerance (ability to withstand stress). 
                <br />
                What do you feel stressed about? What are the trends in how you perceive things? Is stress tolerance high? Low? Knowing these is the first step. The key to surviving a stressful era is to know your own tendencies and characteristics without judging whether they are good or bad.
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