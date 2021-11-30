import * as React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react"
import "../components/Administration.css";
import { Input } from "@chakra-ui/react"

export default function ThankYou() {
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
            fontSize= "48px">
        Nome da sessão:
      </Text>
      <Input border="3px solid"
             fontSize="48px"
             height="6.25vh"
             width="42.5vw"
             borderRadius="1.875rem"
             marginLeft="3vw"
             marginBottom="4vh">
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
             marginBottom="8vh">
      </Input>

      <Grid templateColumns="repeat(3, 1fr)" gap={20} marginTop="10vh">
        <Button colorScheme="green" width="20.625vw" height="6.875vh" marginLeft="3vw" borderRadius="2rem">
          Crear
        </Button>
        <Button colorScheme="red" width="20.625vw" height="6.875vh" marginLeft="3vw" borderRadius="2rem">
          Limpar
        </Button>
        <Button colorScheme="green" width="20.625vw" height="6.875vh" marginLeft="3vw" borderRadius="2rem">
          Adicionar Candidatos
        </Button>
      </Grid>
    </div>
  );
}
