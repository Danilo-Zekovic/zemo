import React, { FC, useState } from 'react'

import Layout from '../components/Layout'
// @ts-ignore
import Moma from '../images/MomaHead.png'
// @ts-ignore
import Zeka from '../images/ZekaHead.png'

const Head = ({ imgSrc, imgAlt, onHover, onLeave }) => {
  return (
    <div
      style={{ width: '18rem', cursor: 'pointer' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <img src={imgSrc} alt={imgAlt} style={{ width: 'inherit' }} />
    </div>
  )
}

const Home: FC = () => {
  const [title, setTitle] = useState('ZEMO')

  const handleZekaHover = () => {
    setTitle('ZEKO')
  }

  const handleMomaHover = () => {
    setTitle('MOMO')
  }

  const handleLeave = () => {
    setTitle('ZEMO')
  }
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Head
          imgSrc={Zeka}
          imgAlt="Zeka"
          onHover={handleZekaHover}
          onLeave={handleLeave}
        />
        <Head
          imgSrc={Moma}
          imgAlt="Moma"
          onHover={handleMomaHover}
          onLeave={handleLeave}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', fontSize: '4rem' }}
      >
        <h1
          style={{
            letterSpacing: '2rem',
            margin: `3rem 0`,
          }}
        >
          {title}
        </h1>
      </div>
    </Layout>
  )
}

export default Home
