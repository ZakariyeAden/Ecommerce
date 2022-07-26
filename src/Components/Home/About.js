import React from "react";
import { SectionContainer,SecondaryHeading,Description } from "../Style/style-components";
const About = (props) => {
  return (
    <SectionContainer>
      <SecondaryHeading>{props.heading}</SecondaryHeading>
      <Description>
      {props.description}
      </Description>
    </SectionContainer>
  );
};

export default About;
