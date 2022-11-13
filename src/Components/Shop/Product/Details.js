import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../Context";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { cartActions } from "../../Store/cart-slice";
import { useDispatch } from "react-redux";
import {
  SectionContainer,
  ProductHeading,
  Column,
} from "../../Style/style-components";

const Details = props => {
  // const history = useHistory(); put useHistory on top
  const value = useContext(ProductsContext);
  const [products, setProducts] = useState({});

  useEffect(() => {
    console.log("Inside useEffects");
    const item = value.productDetail;
    // value.productsList.find((x) => x.id == props.match.params.id);

    setProducts({ ...item });
    console.log(products);
  }, []);
  const {
    id,
    title,
    price,
    image,
    description
  } = value.productDetail;
  console.log(image);


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
    <SectionContainer>
      <Grid container spacing={2}>
        <Grid item>
          <img src={image} />
        </Grid>
        <Grid item>
          <h3>{title}</h3>
          <p>{description}</p>
          <span>{price}</span>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default Details;
