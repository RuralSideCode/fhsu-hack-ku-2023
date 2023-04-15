import styles from "./codearea.module.css"
import { useSelector } from "react-redux";

const Codearea = () => {
    const codeNumber = useSelector((state) => state.codenumber.count);

    return (
        <div class={styles.div}>
            Code Area
        </div>
    );
}

export default Codearea;