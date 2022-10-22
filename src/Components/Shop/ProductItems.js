import React from "react";
import { SectionContainer,ProductHeading,Column,Btn } from "../Style/style-components";
import { Grid } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../Store/cart-slice";
function ProductItems(props) {


  const { title, price ,id,src,width,button } = props;

  const dispatch = useDispatch();

const addItemToCartHandler = () => {
  dispatch(
    cartActions.addItemToCart({
      id,
      title,
      price,
    })
  );
};
  return (
    <>
      <SectionContainer>
          <Grid item xs={3} >
            <img src={src} width={width}/>
            <Column>
              <ProductHeading>{title}</ProductHeading>
              <span className="price">${price}</span>
              <Btn onClick={addItemToCartHandler}>{button}</Btn>
            </Column>
          </Grid>
      </SectionContainer>
    </>
  );
}

export default ProductItems;
