import { useRouter } from "next/router";
import styles from "./login.module.css";

import { useRef } from "react";

const LoginPage = ({}) => {
    const playerName = useRef("");
    const router = useRouter();

    const attemptLogin = async (event) => {
        event.preventDefault();

        const response = await fetch(`/api/register/${playerName}`);
        
        if (!response.ok) {
            alert("Could not contact server to login");
            return;
        }

        const response_json = await response.json();

        if (response_json == undefined) {
            console.error("Unable to parse registration results from server");
            return;
        }

        console.log(response_json); 
        // TODO: update redux

        router.push("/groups");
    }

    return(
        <div>
            <h2>Login</h2>
            <form className={styles.loginFrom} onSubmit={attemptLogin}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" ref={playerName}></input>

                <button type="submit" className={styles.submitButton}>Start Competing</button>
            </form>
        </div>
    );
}

export default LoginPage;