import Codearea from '../../components/codearea'
import Playerstatus from '../../components/playerstatus'
import Problem from '../../components/problem'

import styles from "./index.module.css";

import { problems } from '../api/data/problems';

const Home = () => {
  const problem = problems[Math.floor(Math.random() * problems.length)];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.codearea}>
          <Codearea problem={problem}/>
        </div>
        <div className={styles.problem}>
          <Problem problem={problem}/>
        </div>
      </div>
    </>
  )
}

export default Home;