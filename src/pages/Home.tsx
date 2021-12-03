import * as React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import logotipo from "../components/logo.png";
import exemplo from "../components/exemplo.png";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "../components/Home.css";
import CandidateList, {ICandidateList} from "../components/CandidateList";
import CandidateItem, {ICandidateItem} from "../components/CandidateItem";
import {
  ChainId,
  DAppProvider,
  useEtherBalance,
  useEthers,
} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { UseContractMethod, UseGetCandidates } from "../contracts/hooks/voteSystemFunctions";
import { Console } from "console";


export default function Home() {

  //const candidates: ICandidateItem[] =[{name: "Tiago", imageLink: "exemplo"}, {name: "David", imageLink: "abc"}]
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const [newVisibilityState, setNewVisibilityState] = useState(true);


  //region contract functions
  let candidates = UseGetCandidates();
  let candidatesArray: ICandidateItem[] = [];
  let candidateList: ICandidateList = {items: []};
  let topCandidates: ICandidateItem[] = [{name: "a", imageLink: "", voteCount: 0}, {name: "b", imageLink: "", voteCount: 0}, {name: "c", imageLink: "", voteCount: 0}, {name: "d", imageLink: "", voteCount: 0}]; 


  if(candidates[0] != undefined)
  {
    for(let i: number = 0; i < candidates[0].length; i++)
    {
      if(candidates[0][i] != undefined)
      {
        let temp: ICandidateItem = {name: candidates[0][i].name, imageLink: candidates[0][i].imageLink, voteCount: candidates[0][i].voteCount}
        candidatesArray.push(temp);
      }
    }
    candidateList.items = [{name: "teste1", imageLink: "a", voteCount: 4}, {name: "teste2", imageLink: "b", voteCount: 3}, {name: "teste3", imageLink: "c", voteCount: 30}, {name: "teste4", imageLink: "d", voteCount: 12}, ];
    candidatesArray= candidateList.items;
    console.log(topCandidates);
    CheckTopCandidates();
  }
    //candidateList = [{name: candidates[0][0], imageLink: candidates[0]}]
    
    //candidateList = candidates[0].map((candidate: any[]) => { return {name: candidate[0], imageLink: candidate[1], voteCount: parseFloat(formatEther(candidate[2])).toFixed(0)}});

  //endregion
  let visibilityState: boolean = true;


  //botao conectar
  function ConnectWallet(){
    return(
      account != null ? null : activateBrowserWallet()
    )
  }

  function OnClickEventHandler(){
    ConnectWallet();
    if(account != null)
    { 
      setNewVisibilityState(false);

    }
  }

  function CheckTopCandidates(){
    if(candidatesArray[0].name != "" )
    {
      for(let i: number = 0;i < candidatesArray.length; i++)
      {
        let x: number = 3;
        do{
          console.log(candidatesArray[i].voteCount + ">" + topCandidates[x].voteCount + "?");
          if(candidatesArray[i].voteCount > topCandidates[x].voteCount)
          {
            x--;
            console.log(topCandidates);
            console.log(x);
          }
          else
            x = -10;
        }while(x > 0)
  
        if(x != -10)
          UpdateTopCandidates(i, x);
      }
    }
  }

  function UpdateTopCandidates(index: number, position: number){
    for(let x: number = 3; x > position; x--)
    {
      console.log(topCandidates)
      topCandidates[x] = topCandidates[x - 1];
    } 
    console.log("teste");
    topCandidates[position] = candidatesArray[index];
  }

  return (
    <div>
      <Flex>
        <Image
          src={logotipo}
          marginLeft="4.25vw"
          marginTop="3.813vh"
          width="50vw"
          height="auto"
          onClick={OnClickEventHandler}
        />

        <Spacer />

        <SimpleGrid
          columns={1}
          spacing={5}
          marginRight="18vw"
          marginTop="3.813vh"
        >
          <Text fontSize="3.063rem" fontWeight="bold">
            Posição
          </Text>
          <div>
            <Flex>
              <Image src={exemplo} height="69px" width="69px" />
              <SimpleGrid columns={1} spacing={0} marginLeft="0.5vw">
                <Text fontWeight="bold" fontSize="24px">
                  Tiago Ferreira
                </Text>
                <Text fontSize="20px">25%</Text>
              </SimpleGrid>
            </Flex>
          </div>
          <div>
            <Flex>
              <Image src={exemplo} height="69px" width="69px" />
              <SimpleGrid columns={1} spacing={0} marginLeft="0.5vw">
                <Text fontWeight="bold" fontSize="24px">
                  Tiago Ferreira
                </Text>
                <Text fontSize="20px">25%</Text>
              </SimpleGrid>
            </Flex>
          </div>
          <div>
            <Flex>
              <Image src={exemplo} height="69px" width="69px" />
              <SimpleGrid columns={1} spacing={0} marginLeft="0.5vw">
                <Text fontWeight="bold" fontSize="24px">
                  Tiago Ferreira
                </Text>
                <Text fontSize="20px">25%</Text>
              </SimpleGrid>
            </Flex>
          </div>
          <div>
            <Flex>
              <Image src={exemplo} height="69px" width="69px" />
              <SimpleGrid columns={1} spacing={0} marginLeft="0.5vw">
                <Text fontWeight="bold" fontSize="24px">
                  Tiago Ferreira
                </Text>
                <Text fontSize="20px">25%</Text>
              </SimpleGrid>
            </Flex>
          </div>
        </SimpleGrid>
      </Flex>

      <Button
        colorScheme="green"
        width="20.625vw"
        height="6.875vh"
        marginLeft="23.5vw"
        borderRadius="2rem"
        hidden={newVisibilityState}
      >
        Votar
      </Button>

      <Text
        width="50%"
        textAlign="center"
        margin="auto"
        fontWeight="bold"
        fontSize="3rem"
        paddingTop="10vh"
      >
        Candidatos
      </Text>

      <Box className="home-carousel">
        <CandidateList items={candidateList.items}/>
      </Box>
      test: 
      {account && <p color="white">Account: {account}</p>}
      {etherBalance && <p color="white">Balance: {formatEther(etherBalance)} </p>}
    </div>
  );
}
