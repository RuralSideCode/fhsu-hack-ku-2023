import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import store from '/store.jsx' //may not b correct
import { Provider } from 'react-redux'

import Nav from '../components/nav'
import Codearea from '../components/codearea'
import Playerstatus from '../components/playerstatus'
import Problem from '../components/problem'

import styles from "./index.module.css"

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.nav}>
          <Nav/>
        </div>
        <div class={styles.codearea}>
          <Codearea/>
        </div>
        <div class={styles.problem}>
          <Problem/>
        </div>
        <div class={styles.playerstatus}>
          <Playerstatus/>
        </div>
      </div>
    </>
  )
}

export default Home;