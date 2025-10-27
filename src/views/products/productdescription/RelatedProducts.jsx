import React from 'react'
import AccessoriesSection from './AccessoriesSection'
import BestSellersSection from './BestSellersSection'
import InterestedSection from './InterestedSection'
import RecentlyViewedSection from './RecentlyViewedSection'
import SimilarProductsSection from './SimilarProductsSection'
import { Box } from '@mui/material'

const RelatedProducts = () => {
  return (
    <Box sx={{padding:4}}> 
        <AccessoriesSection />
        <BestSellersSection />
        <InterestedSection />
        <RecentlyViewedSection />
        <SimilarProductsSection />
    </Box>
  )
}

export default RelatedProducts