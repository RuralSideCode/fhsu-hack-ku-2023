import styles from "./login.module.css";

const LoginPage = () => {

    const attemptLogin = () => {

    }

    return(
        <div>
            <h2>Login</h2>
            <form className={styles.loginFrom}       >
                <label for="name">Name: </label>
                <input type="text" name="name"></input>

                <button type="submit" className={styles.submitButton}></button>
            </form>
        </div>
    );
}

export default LoginPage;