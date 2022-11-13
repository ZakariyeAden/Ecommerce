import React,{ useContext} from "react";
import {
  SectionContainer,
  ProductHeading,
  Column,
  Btn,
} from "../../Style/style-components";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import { ProductsContext } from '../../Context'
import PropTypes from "prop-types";
const ProductItems = (props) => {

  const { id, title, price, image } = props.product;

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


  const value = useContext(ProductsContext);

  const addToWishList = id => {
    if (value.wishList.includes(id)) {
      value.wishList = value.wishList.filter(i => i !== id);
      console.log(value.wishList);
    } else {
      value.wishList.push(id);
      console.log(value.wishList);
    }
  };
  console.log(value.whishList);
  return (
    <>
      <SectionContainer>
          <Grid item>
        {/* <Link to={`details/${id}`}> */}
            <img src={image}  />
        {/* </Link> */}
            <Column>
              <ProductHeading>{title}</ProductHeading>
              <span className="price">${price}</span>
              <Button onClick={addItemToCartHandler} variant="contained">
                Add to Cart
              </Button>
            </Column>
          </Grid>
      </SectionContainer>
    </>
  );
}
ProductItems.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number
  })
}
export default ProductItems;
