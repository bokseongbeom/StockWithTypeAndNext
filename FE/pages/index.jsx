import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {


const Axios = require('axios');

const apiKey = process.env.REACT_APP_APIKEY
const apiSecret = process.env.REACT_APP_SECRETEKEY

Axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
  .then(response => {
    console.log(response.data.price);
  })


  return (
    <div className={styles.container}>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>홈 입니다</h1>

    </div>
  )
}
