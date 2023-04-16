import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


import Codearea from '../../components/codearea'
import Playerstatus from '../../components/playerstatus'
import Problem from '../../components/problem'

import styles from "./index.module.css";

const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.codearea}>
          <Codearea/>
        </div>
        <div className={styles.problem}>
          <Problem/>
        </div>
        <div className={styles.playerstatus}>
          <Playerstatus/>
        </div>
      </div>
    </>
  )
}

export default Home;