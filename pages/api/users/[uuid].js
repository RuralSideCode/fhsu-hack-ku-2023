import { players, Player } from "../../../utils/Players";
export default function handler(req, res) {
    const { uuid } = req.query;

    const p = players.find((p) => p.getUUID() == uuid);

    if (p == undefined) {
        res.end(JSON.stringify({error: "Unable to find player", uuid: uuid}));
        return;
    }

    res.end(JSON.stringify({...p}));
};