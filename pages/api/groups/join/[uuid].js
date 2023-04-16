import { matchPlayerToGroup } from "../../utils/groups";
import { players } from "../../utils/players";

const handler = (req, res) => {
    const group = matchPlayerToGroup(players.find((p) => p.getUUID() == req.query.uuid));

    res.end(JSON.stringify({group: group.uuid}));
}

export default handler;