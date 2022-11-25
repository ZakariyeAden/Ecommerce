import React, { useState, useEffect,  } from "react";

import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

import { connect } from "react-redux";
import { addToCart } from "../../Redux/Actions/cart-action";
import {
  DetailContainer,
  ColumnGap,
  Btn,
  DetailImg
} from "../../Style/style-components";

const Details = ({ current , addToCart }) => {


  // Detail Width
  return (
    <DetailContainer>
      <Grid container spacing={3}>
        <Grid md={6} sm={8}>
          <DetailImg src={current.image}  />
        </Grid>
        <Grid md={6} sm={4}>
          <ColumnGap>
            <h3 className="detail-heading">{current.title}</h3>
            <p>{current.description}</p>
            <span>${current.price}</span>
            <Btn onClick={() => addToCart(current.id)} variant="outlined">
              Add to Cart
            </Btn>
          </ColumnGap>
        </Grid>
      </Grid>
    </DetailContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
