import { Text, Image } from "@chakra-ui/react";
import "./Candidate.css";

export interface ICandidateItem{
    name:string,
    imageLink:string,
    voteCount:number
}

export default function CandidateItem(props:ICandidateItem){
    return(
        <div className="candidato-carouselItem">
            <Image src={props.imageLink} height="10vh" width="10vw" />
            <Text fontWeight="bold">{props.name}</Text>
        </div>
    );
}