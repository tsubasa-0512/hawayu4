import React, { useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';
import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    Heading,
    Container,Select,Image,Center,Modal,ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Text,
    List,ListItem,ListIcon,Flex
  } from "@chakra-ui/react"
import { ArrowRightIcon,ArrowBackIcon } from '@chakra-ui/icons'
import { MdCheckCircle } from "react-icons/md";
import { BiBeenHere } from "react-icons/bi";

import question3 from '../hawayu/question3.png';
import Sleep from './Sleep';
import SleepEn from './SleepEn';
import TekiouEn from './TekiouEn';

  const ContentsListEn = () =>{
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();

    const onClickToMypage = () =>{
      history.push('/user/home')
    }

    const  onClickToJp = () =>{
      history.push('/contents/list')
    }
 

    return(
        <ChakraProvider>

                  <ButtonGroup mt="0.5rem" ml="0.5rem" size="sm" isAttached variant="outline" onClick ={()=>history.goBack()}>
                    <IconButton aria-label="back" icon={<ArrowBackIcon />} />
                    <Button mr="-px">back</Button>  
                   </ButtonGroup>

                   <Button ml="0.5rem" onClick={onClickToJp}>Japanese</Button>
  

           <Center mt={'2rem'}>
             <SleepEn />
           </Center>

           <Center mt={'2rem'}>
             <TekiouEn />
           </Center>
      </ChakraProvider>
    )
  }

  export default ContentsListEn;