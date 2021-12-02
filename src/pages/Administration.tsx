import * as React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react"
import { useState } from "react";
import "../components/Administration.css";
import { Input } from "@chakra-ui/react"
import { UseContractMethod } from "../contracts/hooks/voteSystemFunctions";

export default function ThankYou() {

  //region contract
  const { state: sessionState, send: newSession} = UseContractMethod("newSession");
  const { state: candidateState, send: newCandidate} = UseContractMethod("addCandidate");



  //endregion
  const[sessionName, setSessionName] = useState(String);
  const[candidateName, setCandidateName] = useState(String);
  const[imageLink, setImageLink] = useState(String);
  const[updatingState, setUpdatingState] = useState(Boolean);

  function OnClickHandlerCriar(){
    newSession(sessionName, imageLink);
  }

  function OnClickHandlerAdicionar(){
    newCandidate(candidateName, imageLink);
  }

  function OnClickHandlerAdicionarCandidatos(){
    setUpdatingState(!updatingState);
  }

  function OnChangeHandlerName(event: any){
    if(!updatingState)
      setSessionName(event.target.value);
    else
      setCandidateName(event.target.value);
  }


  function OnChangeHandlerLinkImagem(event: any){
    setImageLink(event.target.value);
  }

  return (
    <div>

      <Text width="50%" 
            textAlign="center"
            margin="auto"
            fontSize="48px"
            paddingTop="3vh"
            paddingBottom="10vh">
        Administração
      </Text>

      
      <Text paddingLeft= "3vw"
            fontSize= "48px"
            hidden={updatingState}>
        Nome da sessão:
      </Text>

      <Text paddingLeft= "3vw"
            fontSize= "48px"
            hidden={!updatingState}>
        Nome do candidato:
      </Text>

      <Input border="3px solid"
             fontSize="48px"
             height="6.25vh"
             width="42.5vw"
             borderRadius="1.875rem"
             marginLeft="3vw"
             marginBottom="4vh"
             onChange={OnChangeHandlerName}>
      </Input>
      

      <Text paddingLeft= "3vw"
            fontSize= "48px">
        Link da imagem:
      </Text>
      <Input border="3px solid"
             fontSize="48px"
             height="6.25vh"
             width="42.5vw"
             borderRadius="1.875rem"
             marginLeft="3vw"
             marginBottom="8vh"
             onChange={OnChangeHandlerLinkImagem}>
      </Input>

      <Grid templateColumns="repeat(3, 1fr)" gap={20} marginTop="10vh">
        <Button colorScheme="green" width="20.625vw" height="6.875vh" marginLeft="3vw" borderRadius="2rem" onClick={OnClickHandlerCriar} hidden={updatingState}>
          Criar
        </Button>
        <Button colorScheme="green" width="20.625vw" height="6.875vh" marginLeft="3vw" borderRadius="2rem" onClick={OnClickHandlerAdicionar} hidden={!updatingState}>
          Adicionar
        </Button>

        <Button colorScheme="red" width="20.625vw" height="6.875vh" marginLeft="3vw" borderRadius="2rem" hidden={updatingState}>
          Limpar sessão
        </Button>
        <Button colorScheme="red" width="20.625vw" height="6.875vh" marginLeft="3vw" borderRadius="2rem" hidden={!updatingState}>
          Limpar candidatos
        </Button>

        <Button colorScheme="green" width="20.625vw" height="6.875vh" marginLeft="3vw" borderRadius="2rem" hidden={updatingState} onClick={OnClickHandlerAdicionarCandidatos}>
          Adicionar Candidatos
        </Button>
        <Button colorScheme="green" width="20.625vw" height="6.875vh" marginLeft="3vw" borderRadius="2rem" hidden={!updatingState}  onClick={OnClickHandlerAdicionarCandidatos}>
          Voltar atras
        </Button>
      </Grid>
    </div>
  );
}
