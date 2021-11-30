import CandidateItem, { ICandidateItem } from "./CandidateItem";
import { Carousel } from "react-responsive-carousel";
import "./Candidate.css";

export interface ICandidateList {
  items: ICandidateItem[];
}

export default function CandidateList(props: ICandidateList) {
  return (
    <>
      <Carousel centerMode={true}
          centerSlidePercentage={35}
          infiniteLoop={true}>
        {props.items.map((item) => {
          return <CandidateItem name={item.name} imageLink={item.imageLink} />;
        })}
      </Carousel>
    </>
  );
}
