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
import "../components/Number.css";

export default function Numero() {
  return (
    <div>
      <Image
        src={logotipo}
        marginLeft="4.25vw"
        marginTop="3.813vh"
        width="50vw"
        height="auto"
      />
      <Text
        width="50%"
        alignSelf="center"
        textAlign="center"
        margin="auto"
        fontSize="48px"
        fontWeight="bold"
      >
        Seu numero de cidadão:
      </Text>

      <Input
        border="5px solid"
        borderColor="#000"
        fontSize="48px"
        height="8vh"
        width="50vw"
        borderRadius="1.875rem"
        marginLeft="26vw"
        textAlign="center"
      />
    </div>
  );
}
