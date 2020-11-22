import React, { FC } from 'react'
// @ts-ignore
import productStyles from './product.module.css'

interface Props {
  title: string
  description: string
  imgSrc: string
}

const Product: FC<Props> = ({ title, description, imgSrc }) => (
  <div className={productStyles.product}>
    <h3>{title}</h3>
    <div></div>
    <img src={imgSrc} alt="" width="200" />
    <span>{description}</span>
  </div>
)

export default Product
