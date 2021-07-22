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

  const Contents = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()
    const history = useHistory()

    const onClickToWork = () =>{
      history.push("/contents/sleep/work")
    }

    const onClickToContents = () =>{
      history.push("/contents/list")
    }
    return(
        <ChakraProvider>
    
            <Button onClick={onClickToContents} bg="yellow.100" color="gray" size="lg" shadow="lg"
            w="80vw" h="30vw">
                知る・学ぶ・実践する
            </Button>

       
      </ChakraProvider>
    )
  }

  export default Contents;