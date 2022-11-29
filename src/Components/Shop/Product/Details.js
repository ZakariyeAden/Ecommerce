import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import swal from "sweetalert";
import { connect, useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/cart-action";
import {
  DetailContainer,
  ColumnGap,
  Btn,
  DetailImg,
} from "../../Style/style-components";

const Details = ({ current, addToCart }) => {
  // ***** Error in Cart ****  //
  // const cart = useSelector(state => state.cart);
  // const index = cart.find((item) => item.id === current.id);

  // console.log(cart);

  const Modal = () => {
    swal({
      title: "Added to cart!",
      icon: "success",
      className: "alert_box",
      title: current.title,
      text: "Added to Cart",
      icon: current.image,
      imageWidth: 400,
      imageHeight: 200,
      timer: 1500,
    });
  };

  return (
    <DetailContainer>
      <Grid container spacing={2}>
        <Grid lg={6}>
          <DetailImg src={current.image} />
        </Grid>
        <Grid lg={6}>
          <ColumnGap>
            <h3 className="detail-heading">{current.title}</h3>
            <p>{current.description}</p>
            <span>${current.price}</span>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Size</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={current.size}
                label="Age"
              >
                <MenuItem value={current.size}>{current.size}</MenuItem>
                <MenuItem value={current.size}></MenuItem>
                <MenuItem value={current.size}></MenuItem>
              </Select>
            </FormControl>
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
            <Btn
              onClick={() => {
                addToCart(current.id);
                Modal();
              }}
              variant="outlined"
            >
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
    addToCart: id => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
