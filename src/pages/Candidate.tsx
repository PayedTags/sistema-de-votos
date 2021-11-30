import * as React from "react";
import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import "../components/Candidate.css";
import logotipo from "../components/logo.png";
import { Carousel } from "react-responsive-carousel";
import exemplo from "../components/exemplo.png";
import CandidateList, { ICandidateList } from "../components/CandidateList";
import {ICandidateItem} from "../components/CandidateItem";

export default function Candidato() {

  const candidates: ICandidateItem[] =[{name: "Tiago", imageLink: "exemplo"}, {name: "Jessica", imageLink: "abc"}]
  return (
    <div>
      <Image
        src={logotipo}
        marginLeft="4.25vw"
        marginTop="3.813vh"
        width="40vw"
        height="auto"
      />

      <Text
        width="50%"
        textAlign="center"
        margin="auto"
        fontWeight="bold"
        fontSize="3rem"
      >
        Candidatos
      </Text>


      <Box className="candidato-carousel">
        <CandidateList items={candidates}/>
      </Box>

      <Flex display="flex" justifyContent="center" alignSelf="center" marginTop="10vh" marginBottom="10vh">
        <Button
          colorScheme="green"
          width="30vw"
          height="10vh"
          marginLeft="3vw"
          borderRadius="2rem"
          fontSize="2rem"
        >
          Votar
        </Button>
      </Flex>
    </div>
  );
}
