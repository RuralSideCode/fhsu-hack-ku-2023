import styles from "./codearea.module.css"
import { useSelector } from "react-redux";

const Codearea = () => {
    const codeNumber = useSelector((state) => state.codenumber.count);

    //if enter, increment codenumber.count & display <p> (maybe textarea = fixed position)
    //do not know how to decrement
    
    return (
        //Add form to textarea that gets sent to backend
        <textarea className={styles.textarea}>
        </textarea>
    );
}

export default Codearea;