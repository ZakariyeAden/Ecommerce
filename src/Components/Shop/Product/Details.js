import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../Context";
import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { cartActions } from "../../Store/cart-slice";
import { useDispatch } from "react-redux";
import {
  DetailContainer,
  ProductHeading,
  ColumnGap,
  Btn,
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
  const { id, title, price, image, description, detailWidth } =
    value.productDetail;
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
    <DetailContainer>
      <Grid container spacing={3}>
        <Grid md={6} sm={8}>
          <img src={image} width={detailWidth} />
        </Grid>
        <Grid md={6} sm={4}>
          <ColumnGap>
            <h3 className="detail-heading">{title}</h3>
            <p>{description}</p>
            <span>{price}</span>
            <Btn onClick={addItemToCartHandler} variant="outlined">
              Add to Cart
            </Btn>
          </ColumnGap>
        </Grid>
      </Grid>
    </DetailContainer>
  );
};

export default Details;
