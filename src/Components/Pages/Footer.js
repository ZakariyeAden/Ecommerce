import React from "react";
import { Grid, Box } from "@mui/material";
import { SectionContainer, FooterHeading } from "../Style/style-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <SectionContainer>
    <hr className="bg-color"/>
      <Grid container spacing={4}>
          <div className="mt-2">
            <FooterHeading>Shortcuts</FooterHeading>
            <Box display="flex">
            <Grid xs={3}>
              <Link to="" className="link footer-link">
                Search
              </Link>
              </Grid>
              <Grid xs={3}>
              <Link to="" className="link footer-link">
                Privacy policy
              </Link>
              </Grid>
              <Grid xs={3}>
              <Link to="" className="link footer-link">
                Refund Policy
              </Link>
              </Grid>
              <Grid xs={3}>
              <Link to="" className="link footer-link">
                Terms of Service
              </Link>
              </Grid>
            </Box>
          </div>
      </Grid>
      <Box display="flex" className="mt-2 company">© 2022, all rights Reserved</Box>
    </SectionContainer>
  );
}

export default Footer;
