import React from 'react'

import BrownThobe from '../Assets/Thobes/BrownThobe.jpg'
import GoldThobe from '../Assets/Thobes/Gold.jpg'
import WhiteThobe from '../Assets/Thobes/White.jpg'
import BlackCap from '../Assets/Caps/BlackCap.png'
import GrayCap from '../Assets/Caps/CapGray.png'
import AbayaCream from '../Assets/Abaya/AbayaCream.png'
import GreenAbaya from '../Assets/Abaya/GreenAbaya.png'
import ProductItems from './ProductItems';
import products from './index'
import { Grid } from "@mui/material";
function Product() {
  return (
    <div>
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
    </div>
  )
}

export default Product


