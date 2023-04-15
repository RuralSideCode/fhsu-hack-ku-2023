import styles from "./problem.module.css"

import { useSelector } from "react-redux";

const Problem = () => {
    const problemName = useSelector((state) => state.problem.name);

    return (
        <div class={styles.div}>
            <h1>{problemName}</h1>
            <p>Description</p>
        </div>
    );
}

export default Problem;