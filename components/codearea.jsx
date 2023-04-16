import styles from "./codearea.module.css"

import { useEffect, useRef, useState } from "react";

import { player, getGroupUUID } from "../pages/util/player";
import { getProblem } from "../pages/util/problem";

import { problems } from "../pages/api/data/problems";

const Codearea = (props) => {
    const [rawCode, setRawCode] = useState("function solution(params) { }");
    const consoleOutput = useState("");

    const problem = props.problem;

    const submitCode = async () => {
        let inputs = "";

        for(let i of problem.inputs) {
            inputs.concat("[");
            for(let j of i) {
                inputs.concat(i + ",");
            }
            inputs = inputs.substring(0, inputs.length - 1);
            inputs.concat("]");
        }

        console.log(problem);
        const program = `
            const inputs = ${"[[" + problem.inputs + "]]"};
            const outputs = ${"[" + problem.outputs + "]"};

            ${rawCode}

            let pass = true;
            for (let i = 0; i < inputs.length; i++) {
                if(solution(inputs[i]) != outputs[i]) {
                    pass = false;
                }
            }

            console.log(pass ? "Passes!" : "Fails");
        `;
        console.log(program);

        const result = new Function(program)();
        console.log(result);
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