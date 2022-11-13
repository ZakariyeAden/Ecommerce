import React, { Fragment } from 'react'
import Product from '../Shop/Product/Product'
import { ShopHeading } from '../Style/style-components/index'
function Shop() {
  return (
    <Fragment>
    <div className="bg-img">
    <div className="text-box">
    <ShopHeading>Our Thobes and Abayas</ShopHeading>
    </div>
    </div>
      <Product/>
    </Fragment>
  )
}

export default Shop