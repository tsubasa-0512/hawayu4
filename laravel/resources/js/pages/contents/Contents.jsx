import React, { useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';
import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    Heading,
    Container,Select,Image,Center,Modal,ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Text
  } from "@chakra-ui/react"
import { ArrowRightIcon,ArrowBackIcon } from '@chakra-ui/icons'

  const Contents = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()

    return(
        <ChakraProvider>
    
            <Button onClick={onOpen} bg="yellow.100" color="gray" size="lg" shadow="lg"
            w="80vw" h="30vw">
                知る・学ぶ・実践する
            </Button>

        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>睡眠について</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
                <li>良質な睡眠とは？</li>
                <li>・良い眠りのためにおすすめの方法5選</li>
            </ul>
          </ModalBody>

          <ModalFooter>
            <Button bg="gray" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button bg="#FFE3D3" mr={3} >
              相談する
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </ChakraProvider>
    )
  }

  export default Contents;