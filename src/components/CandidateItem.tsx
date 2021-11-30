import { Text, Image } from "@chakra-ui/react";

export interface ICandidateItem{
    name:string,
    imageLink:string
}

export default function CandidateItem(props:ICandidateItem){
    return(
        <div className="candidato-carouselItem">
            <Image src={props.imageLink} height="10vh" width="10vw" />
            <Text fontWeight="bold">{props.name}</Text>
        </div>
    );
}