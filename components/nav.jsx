import Link from "next/link";
import styles from "./nav.module.css"

const Nav = () => {

    return (
        <nav className={styles.nav}>
            <Link href="#" class={styles.navLink}>BETTER LEETCODE</Link>
        </nav>
    );
}

export default Nav;