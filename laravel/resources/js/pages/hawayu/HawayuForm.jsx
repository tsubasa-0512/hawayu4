import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory} from 'react-router-dom';
import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    FormControl,FormLabel,
    Container,Select,Image
  } from "@chakra-ui/react"
import { ArrowRightIcon,ArrowBackIcon } from '@chakra-ui/icons'

import question1 from './question1.png';
import question2 from './question2.png';
import question3 from './question3.png';
import question4 from './question4.png';

const HawayuForm = () =>{
    const history = useHistory();
    return(
        <>
        <ButtonGroup size="sm" isAttached variant="outline" onClick ={()=>history.goBack()}>
            <IconButton aria-label="back" icon={<ArrowBackIcon />} />
            <Button mr="-px">戻る</Button>  
        </ButtonGroup>
            <ChakraProvider>
                <Container maxW="xl" centerContent>
                     <FormLabel>                     
                     <Badge borderRadius="full" px="2" colorScheme="teal">
                           1.
                     </Badge>お食事は問題なく食べられていますか？
                     </FormLabel> 
                     <Box width="30%" height="30%" >
                     <Image
                        objectFit="cover"
                        src={question1}
                    />
                    </Box>
                {/* yes:2点 no：0点 */}
                <Select placeholder="回答を選ぶ">
                    <option value="yes">いつもと変わらず食べている</option>
                    <option value="no">いつもより食欲がない、又はある</option>
                </Select>
                {/* <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                    <Radio value="yes">はい：いつもと変わらず食べている</Radio>
                    <Radio value="no">いいえ：いつもより食欲がない、又はある</Radio>
                    </HStack>
                </RadioGroup> */}
                
                <FormLabel>
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      2.
                 </Badge>お腹や頭の痛みはありますか？
                 </FormLabel>
                <Box width="30%" height="30%">
                     <Image
                        objectFit="cover"
                        src={question2}
                    />
                    </Box>
                {/* yes:2点 no：すべて0点 */}
                <Select placeholder="回答を選ぶ">
                    <option value="yes">特に痛みはない</option>
                    <option value="no1">お腹が痛む</option>
                    <option value="no2">頭が痛む</option>
                    <option value="no3">両方が痛む</option>
                </Select>
                
                {/* <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                    <Radio value="yes">はい：特に痛みはない</Radio>
                    <Radio value="no1">いいえ：お腹が痛む</Radio>
                    <Radio value="no2">いいえ：頭が痛む</Radio>
                    <Radio value="no3">いいえ：両方痛む</Radio>
                    </HStack>
                </RadioGroup> */}

                <FormLabel>
                    
                <Badge borderRadius="full" px="2" colorScheme="teal">
                        3.
                </Badge>
                ここ1週間の睡眠はいかがでしょうか？</FormLabel>
                
                <Box width="30%" height="30%">
                     <Image
                        objectFit="cover"
                        src={question3}
                    />
                    </Box>
                {/* yes:5点 no：0点 */}

                <Select placeholder="回答を選ぶ">
                    <option value="yes">問題なく眠れている</option>
                    <option value="no">寝つきが悪い・途中で目が覚める</option>
                </Select>
                {/* <RadioGroup defaultValue="yes">
                    <HStack spacing="24px">
                    <Radio value="yes">はい：問題なく眠れている</Radio>
                    <Radio value="no">いいえ：寝つきが悪い・途中で目が覚める</Radio>
                    </HStack>
                </RadioGroup> */}

                <FormLabel>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                        4.
                </Badge>やる気や意欲は普段と変わりませんか？
                </FormLabel>
                <Box width="30%" height="30%">
                     <Image
                        objectFit="cover"
                        src={question4}
                    />
                    </Box>
                
                {/* yes:1点 no：0点 */}
                <Select placeholder="回答を選ぶ">
                    <option value="yes">変わらない・又は普段よりある</option>
                    <option value="no">普段よりもないと感じる</option>
                </Select>

                <Button leftIcon={<ArrowRightIcon />} 
                        bg="#FFE3D3" size="sm">
                        送信する
                </Button>
         
                </Container>
                {/* 合計5点以下＝要相談（相談してみませんか？の文字と、チャットへのリンク（コンテンツ実装できればコンテンツを挟む） */}
                {/* 合計6点以上＝ありがとうございました！気になることがあればお気軽に相談してくださいねの文字のみ */}
       
            </ChakraProvider>
        
        </>
    )
}

export default HawayuForm;