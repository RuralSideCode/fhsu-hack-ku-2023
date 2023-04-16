import { useRouter } from "next/router";
import styles from "./login.module.css";

import { useRef } from "react";

import {player} from "../util/player";

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

        if(response_json.error != undefined) {
            alert("That name is already taken!");
            return;
        } 

        player.name = playerName;
        player.uuid = response_json.uuid;

        router.push("/groups");
    }

    return(
        <div className={styles.outdiv}>
            <div>
                <h2 id={styles.h2}>Better LeetCode</h2>
                <p className={styles.p}>Tired of submitting your code whilst the birds chirp, during a peacful restful morning?</p>
                <p className={styles.p}>Want more thrill in your life?</p>
                <p className={styles.p}>Do you wish to stumble your keys as adrenaline takes over your body?</p>
                <p className={styles.p}>Better LeetCode offers skillful fast-paced competition against friends and other willing participants!</p>
                <br></br>
                <p className={styles.p}>Just enter your name to get matched with other players in which you will all compete against each other with the same coding prompt.</p>
            </div>
            <div className={styles.div}>
                <h2 className={styles.h2}>Login</h2>
                <form className={styles.loginFrom} onSubmit={attemptLogin}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" ref={playerName}></input>

                    <button type="submit" className={styles.submitButton}>Start Competing</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;