import React from "react";
import { Grid, Box } from "@mui/material";
import { SectionContainer, FooterHeading } from "../Style/style-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <SectionContainer>
    <hr className="bg-color"/>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>
            <FooterHeading>Shortcuts</FooterHeading>
            <Box display="flex">
              <Link to="" className="link footer-link">
                Search
              </Link>
              <Link to="" className="link footer-link">
                Privacy policy
              </Link>
              <Link to="" className="link footer-link">
                Refund Policy
              </Link>
              <Link to="" className="link footer-link">
                Terms of Service
              </Link>
            </Box>
          </div>
        </Grid>
      </Grid>
      <Box display="flex" className="mt-2 company">© 2022, all rights Reserved</Box>
    </SectionContainer>
  );
}

export default Footer;
