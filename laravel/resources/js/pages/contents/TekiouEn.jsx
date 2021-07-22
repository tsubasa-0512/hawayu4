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

  const TekiouEn = () =>{
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();

    const onClickToMypage = () =>{
      history.push('/user/home')
    }

    const onClickToWorkEn = () =>{
        history.push('/contents/en/tekiou/work')
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
                 About Adjustment disorder
            </Button>
            </Center>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">
          <Badge colorScheme="purple" mr="0.5rem">Adjustment disorder</Badge>
          <Badge colorScheme="green" mr="0.5rem">Tips</Badge>
            About Adjustment disorder
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
   
          <Center>
            <Image src={question3} boxSize="50%"/>
          </Center>
          <List spacing={3}>
                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListIcon as={BiBeenHere} color="green.500" />
                What is Adjustment disorder

                </ListItem>
                <Text>
                Certain situations and events can be very stressful for the person and cause mood and behavioral symptoms. Specific situations and events include relationships troubles, moving, marriage, department changes, job changes, childcare and long-term care. It is easy to happen when there are many changes. It is relatively common and can happen to anyone. Adjustment disorder is sometimes referred to as "depression" or "depression", but adjustment disorder is different from depression.
                 </Text>

                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListIcon as={BiBeenHere} 
               color=  "green.500" />
                Difference between depression and adjustment disorder
               </ListItem>

                <Text>
                ・ Depression: The clear cause is unknown, and it is difficult to improve the condition even if you move away from what seems to be a source of stress. You can't enjoy anything while you're onset. It is said that there is something wrong with the brain, and medicines for depression are effective.
Adjustment disorder: There is a clear source of stress, and symptoms tend to recover when the stress source is separated. It's relatively enjoyable to have fun while you're onset. It is important to stay away from stress sources, as medications for depression are less effective. If you have a sleep disorder, you can also take sleeping pills.
<br /><br />
Of course, it cannot be said unconditionally because some people with adjustment disorders may have depression.
                </Text>

                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListIcon as={BiBeenHere} 
               color=  "green.500" />
                  Do you have any of these symptoms?
               </ListItem>

               <Text>
                 ・ Headache ・ Abdominal pain ・ Dull body ・ Tears are abnormally fragile than usual ・ Palpitations
                ・ Decreased motivation ・ Decreased concentration ・ Increased mistakes
                ・ I can't sleep, I have awakening halfway ・ I feel depressed ・ I have dizziness or light-headedness
                ・ Clearly know when these symptoms started (know the source of stress)
                  <br /><br />
                If the above symptoms persist for more than a month, consult a specialist. There is a possibility of physical abnormalities such as headaches and abdominal pains, so it is important to first check for any abnormalities in the body itself.

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

  export default TekiouEn;