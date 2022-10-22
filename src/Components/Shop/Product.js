import React, { Fragment } from 'react'
import ProductItems from './ProductItems';
import products from './index'
import { Grid } from "@mui/material";

function Product() {

  return (
    <>
     <main>
    <Grid container spacing={4}>
      {products.map((product) => (
      <ProductItems
        key={product.id}
        id={product.id}
        src={product.src}
        title={product.title}
        price={product.price}
        width={product.width}
        button={product.button}
      />
      ))}  
      </Grid>
     </main>
    </>
  )
}

export default Product


