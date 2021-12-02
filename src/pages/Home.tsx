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
import CandidateList from "../components/CandidateList";
import {ICandidateItem} from "../components/CandidateItem";
import {
  ChainId,
  DAppProvider,
  useEtherBalance,
  useEthers,
} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { UseContractMethod, UseGetCandidates } from "../contracts/hooks/voteSystemFunctions";

export default function Home() {

  //const candidates: ICandidateItem[] =[{name: "Tiago", imageLink: "exemplo"}, {name: "David", imageLink: "abc"}]
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const [newVisibilityState, setNewVisibilityState] = useState(true);

  //region contract functions
  let candidates = UseGetCandidates();
  //endregion

  let visibilityState: boolean = true;
  console.log(candidates);


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
        {//<CandidateList items={}/>
}
      </Box>
      test: 
      {account && <p color="white">Account: {account}</p>}
      {etherBalance && <p color="white">Balance: {formatEther(etherBalance)} </p>}
    </div>
  );
}
