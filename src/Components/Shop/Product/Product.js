import React, { Fragment, useContext } from 'react'
import ProductItems from './ProductItems';

import { Grid } from "@mui/material";

import { connect } from 'react-redux';
const Product = ({products}) => {

  return (
    <>
     <main>
    <Grid container spacing={2}>
      {products.map((product) => (
        <ProductItems key={product.id} product={product}/>
      ))}
      </Grid>
     </main>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Product);


