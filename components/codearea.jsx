import styles from "./codearea.module.css"

import { useRef, useState } from "react";

import { player, getGroupUUID } from "../pages/util/player";

const Codearea = () => {
    const [rawCode, setRawCode] = useState("function solution(params) { }");
    const consoleOutput = useState("");

    const submitCode = async () => {
        const response = await fetch(`/api/submit/${getGroupUUID()}/${player.uuid}`,
            {
                method: "POST",
                body: JSON.stringify({
                    code: rawCode
                })
            }
        );

        if (!response.ok) {
            console.error("Could not submit code");
        }

        console.log(response.body);
        const response_json = await response.json();
        //console.log(response_json.result);
    }

    const onChange = (e) => {
        setRawCode(e.target.value);
    }

    return (
        //Add form to textarea that gets sent to backend
        <div className={styles.codeArea}>
        <textarea className={styles.textarea} onChange={onChange}>
            function solution(params) &#123;

            &#125;
        </textarea>
        <div className={styles.output}>
            <button onClick={submitCode}>
                Test
            </button>

            <div className={styles.consoleOutput}>
                {consoleOutput}
            </div>
        </div>
        </div>
    );
}

export default Codearea;