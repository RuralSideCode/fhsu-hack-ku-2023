import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import Nav from '../components/nav'
import Codearea from '../components/codearea'
import Playerstatus from '../components/playerstatus'
import Problem from '../components/problem'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Nav/>
    </>
  )
}

export default Home;