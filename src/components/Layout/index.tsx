import React, { FC } from 'react'
import { Link } from 'gatsby'
// @ts-ignore
import layoutStyles from './layout.module.css'

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`,
      fontFamily: 'Courier New, Monospace',
      textDecoration: 'none',
    }}
  >
    <Link
      to={props.to}
      style={{ textDecoration: 'none' }}
      activeClassName={layoutStyles.active}
    >
      {props.children}
    </Link>
  </li>
)

const Layout: FC = ({ children }) => {
  return (
    <div>
      <header className={layoutStyles.header}>
        <Link
          to="/"
          style={{
            textShadow: `none`,
            backgroundImage: `none`,
            textDecoration: 'none',
            fontSize: '2rem',
            fontFamily: 'Courier New, Monospace',
          }}
        >
          <h3 style={{ display: `inline` }}>ZEMO</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/shop/">Shop</ListLink>
        </ul>
      </header>
      <div style={{ margin: `3rem auto`, maxWidth: 850, padding: `0 1rem` }}>
        {children}
      </div>
    </div>
  )
}

export default Layout
