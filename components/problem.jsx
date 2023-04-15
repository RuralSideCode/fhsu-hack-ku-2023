import styles from "./problem.module.css"

import { useSelector } from "react-redux";

const Problem = () => {
    const problemName = useSelector((state) => state.problem.name);
    const problemDesc = useSelector((state) => state.problem.desc);

    return (
        <div class={styles.div}>
            <h1>{problemName}</h1>
            <p>{problemDesc}</p>
        </div>
    );
}

export default Problem;