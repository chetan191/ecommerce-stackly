import { Box } from '@mui/material'
import React from 'react'
import Product from './Product'
import RelatedProducts from './productdescription/RelatedProducts'

const ProductDescription = () => {
  return (
    <Box>
        <Product />
        <RelatedProducts />
    </Box>
  )
}

export default ProductDescription