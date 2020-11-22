import React, { FC } from 'react'
import Layout from '../components/Layout'

import Product from '../components/Product'
// @ts-ignore
import ManShirt from '../images/manShirt.jpg'
// @ts-ignore
import WomanShirt from '../images/girlShirt.jpg'

const Shop: FC = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <Product
        title={"Men's Shirt Happiness"}
        description="Show everyone how happy you are"
        imgSrc={ManShirt}
      />
      <Product
        title={"Women's Shirt Happiness"}
        description="Show everyone how happy you are"
        imgSrc={WomanShirt}
      />
    </div>
  </Layout>
)

export default Shop
