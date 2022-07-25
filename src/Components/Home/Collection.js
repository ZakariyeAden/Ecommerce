import React from "react";
import { SectionContainer,SecondaryHeading,Image,Image2 } from "../Style/style-components";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import BlackThobe from '../Assets/Thobes/BlackThobe.png'
import Abaya from "../Assets/Abaya/AbayaCream.png";
function Collection(props) {
  return (
      <SectionContainer>
        <SecondaryHeading>{props.title}</SecondaryHeading>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Link to="/shop" className="collection">
              <Image src={BlackThobe} />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to="/shop" className="collection">
              <Image2 src={Abaya} className="img" />
            </Link>
          </Grid>
        </Grid>
      </SectionContainer>
  );
}

export default Collection;
