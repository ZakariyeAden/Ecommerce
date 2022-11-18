import React, { Fragment, useContext } from 'react'
import ProductItems from './ProductItems';

import { Grid } from "@mui/material";
import { ProductsContext } from '../../Context'
const Product = () => {
const value = useContext(ProductsContext);
  return (
    <>
     <main>
    <Grid container spacing={4}>
    {value.productsList && value.productsList.map(product=>{
        return (
          <ProductItems product={product} key={product.id} />
        )
      })}
      </Grid>
     </main>
    </>
  )
}

export default Product


