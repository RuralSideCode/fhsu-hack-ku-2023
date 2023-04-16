import styles from "./problem.module.css"

import { getProblem } from "../pages/util/problem";
import { useState } from "react";

const Problem = (props) => {
    const [problem, setProblem] = useState(props.problem);

    return (
        <div className={styles.div}>
            <h1>{problem.name}</h1>
            <br/>
            <p>{problem.description}</p>
            <br/>
            {
            problem.examples.map((e,i) => 
                <>
                <h3>Example {i + 1}</h3>
                <br/>
                <p>{e}</p>
                <br/>
                </>
            )}
            <br/>

        </div>
    );
}

export default Problem;