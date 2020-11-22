import React, { FC } from 'react'

interface Props {
  headerText: string
}

const Header: FC<Props> = ({ headerText }) => {
  return <h1>{headerText}</h1>
}

export default Header
