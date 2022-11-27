import React from "react";

import { Link } from "react-router-dom";
import { Grid, Button,InputLabel,Select,FormControl,MenuItem } from "@mui/material";
import swal from "sweetalert";
import { connect,useSelector } from "react-redux";
import { addToCart } from "../../Redux/Actions/cart-action";
import {
  DetailContainer,
  ColumnGap,
  Btn,
  DetailImg,
} from "../../Style/style-components";
const Details = ({ current, addToCart }) => {
// Error in Cart
  const cart = useSelector((state) => state.cart);
  // const index = cart.find((item) => item.id === current.id);
  // const index = cart.find((item) => item.id === current.id);
  console.log(cart);
  
const Modal = () => {
  swal({
    title: "Added to cart!",
    icon: "success",
    className: "alert_box",
    title:current.title,
    text:"Added to Cart",
    icon: current.image,
    imageWidth: 400,
    imageHeight: 200,
    timer: 1500
  });
};

  return (
    <DetailContainer>
      <Grid container spacing={3}>
        <Grid md={6} sm={8}>
          <DetailImg src={current.image} />
        </Grid>
        <Grid md={6} sm={4}>
          <ColumnGap>
            <h3 className="detail-heading">{current.title}</h3>
            <p>{current.description}</p>
            <span>${current.price}</span>
            {/* {index > -1 ? (
              <Btn onClick={() => {addToCart(current.id); Modal()} }  variant="outlined">
              Add to Cart
            </Btn>
            ) : (
              <Btn onClick={() => {addToCart(current.id); Modal()} }  variant="outlined">
              Add to Cart
              <Basket/>
            </Btn>
            )} */}
            <Btn onClick={() => {addToCart(current.id); Modal()} }  variant="outlined">
              Add to Cart
            </Btn>
          </ColumnGap>
        </Grid>
      </Grid>
    </DetailContainer>
  );
};
const mapStateToProps = state => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id) ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
