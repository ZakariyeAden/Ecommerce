import React from "react";
import "../Style/Home.css";
import {
  Container,
  MainHeading,
  Button,
  Image,
  SectionContainer,
  SecondaryHeading,
  Description
} from "../Style/style-components";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import Cap from '../Assets/Caps/BlackCap.png'
import Thobe from '../Assets/Thobes/Aqua.png'
import Abaya from "../Assets/Abaya/AbayaCream.png";
import Collection from "../Home/Collection";
function Home() {
  return (
    <Container>
      <div className="bg-img">
        <div className="text-box">
          <MainHeading>New Thobes Drops Avalabile Now</MainHeading>
          <Link to="/shop">
            <Button className="btn">Shop Now</Button>
          </Link>
        </div>
      </div>
      <Collection title="Collections"/>
      <SectionContainer>
      <SecondaryHeading>About Us</SecondaryHeading>
      <Description>While our clothing is inspired by Arabic and Islamic art & culture, we aim to provide a wide range of clothing categories within this same theme. Modesty and elegance can still be achieved in today’s fashion standards, which is what we focus on proving through our clothing collections!</Description>
      </SectionContainer>
      <Grid container spacing={3}>
          <Grid item xs={4}>
            <Image src={Thobe}/>
          </Grid>
          <Grid item xs={4}>
          <Image src={Abaya}/>
          </Grid>
          <Grid item xs={4}>
          <Image src={Cap}/>
          </Grid>
        </Grid>
    </Container>
  );
}

export default Home;
