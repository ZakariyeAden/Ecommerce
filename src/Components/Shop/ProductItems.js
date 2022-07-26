import React from "react";
import { SectionContainer,ProductHeading,Column,Button } from "../Style/style-components";
import { Grid } from "@mui/material";
function ProductItems(props) {
  const { title, price ,id,src,width,button } = props;
  return (
    <div>
      <SectionContainer>
        {/* <Grid  > */}
          <Grid item xs={3} >
            <img src={src} width={width}/>
            <Column>
              <ProductHeading>{title}</ProductHeading>
              <span className="price">{price}</span>
              <button>{button}</button>
            </Column>
          </Grid>
        {/* </Grid> */}
      </SectionContainer>
    </div>
  );
}

export default ProductItems;
