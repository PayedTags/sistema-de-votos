import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Number from "./pages/Number";
import Candidate from "./pages/Candidate";
import ThankYou from "./pages/ThankYou";
import Administration from "./pages/Administration"

function App() {
  return (
    <div>
    
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;


/*
simplegrid
hstack
vstack
fade
box
text
*/