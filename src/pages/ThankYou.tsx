import * as React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Input,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import logotipo from "../components/logo.png";
import "../components/ThankYou.css";

export default function ThankYou() {
  return (
    <div>
      <Image src={logotipo} marginLeft="4.25vw" width="50vw" height="auto" />

      <Text
        width="50%"
        alignSelf="center"
        textAlign="center"
        margin="auto"
        fontSize="96px"
        fontWeight="bold"
        marginBottom="20vh"
      >
        Obrigado por votar
      </Text>

      <Button
        colorScheme="green"
        width="30vw"
        height="12vh"
        marginLeft="35vw"
        borderRadius="2rem"
        fontSize="48"
      >
        Pagina principal
      </Button>
    </div>
  );
}
