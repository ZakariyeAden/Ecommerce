import React from "react";
import "../Style/Home.css";
import {
  Container,
  MainHeading,
  Button,
  Image,
} from "../Style/style-components";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import Cap from "../Assets/Caps/BlackCap.png";
import Thobe from "../Assets/Thobes/Aqua.png";
import Abaya from "../Assets/Abaya/AbayaCream.png";
import Collection from "../Home/Collection";
import About from "../Home/About";
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
      <Collection title="Collections" />
      <About
        heading="About Us"
        description="While our clothing is inspired by Arabic and Islamic art & culture, we aim to provide a wide range of clothing categories within this same theme. Modesty and elegance can still be achieved in today’s fashion standards, which is what we focus on proving through our clothing collections!"
      />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <img src={Thobe} className="img img-"/>
        </Grid>
        <Grid item xs={4}>
          <img src={Abaya} className="img img--"/>
        </Grid>
        <Grid item xs={4}>
          <img src={Cap} className="img img---"/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
