import { players, registerPlayer, Player } from "../utils/players";

export default function handler(req, res) {
    const { playerName } = req.query;

    if (players.find((p) => p.getName() == playerName) != undefined) {
        console.warn(`Player tried to register with name ${playerName}. But one already exists.`);
    }

    const player = new Player(playerName);
    registerPlayer(player);

    res.end(JSON.stringify({uuid: player.getUUID()}));
}