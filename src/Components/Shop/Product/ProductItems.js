import React, { useContext } from "react";
import {
  SectionContainer,
  ProductHeading,
  Column,
  Btn,
  Image,
} from "../../Style/style-components";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { loadCurrentItem, addToCart } from "../../Redux/Actions/cart-action";
import { connect } from "react-redux";
const ProductItems = ({product, addToCart, loadCurrentItem}) => {

  return (
    <>
      <SectionContainer>
        <Grid item>
          <div onClick={() => loadCurrentItem(product)}>
            <Link to={`/details${product.id}`}>
              <div className="wrapper">
                <img src={product.image}  />
              </div>
            </Link>
            <Column>
              <ProductHeading>{product.title}</ProductHeading>
              <span className="price">${product.price}</span>
              {/* <Btn onClick={() => addToCart(product.id)} className="btn">
                Add to Cart
              </Btn> */}
            </Column>
          </div>
        </Grid>
      </SectionContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductItems);


