import styles from "./playerstatus.module.css"
import { useSelector } from "react-redux";

const Playerstatus = () => {
    const playerUUID = useSelector((state) => state.player.uuid);
    const playerName = useSelector((state) => state.player.name);
    const playerPoints = useSelector((state) => state.player.points);
    const playerConnectionId = useSelector((state) => state.connectionId);

    return (
        <div className={styles.div}>
            Player Status
        </div>
    );
}

export default Playerstatus;