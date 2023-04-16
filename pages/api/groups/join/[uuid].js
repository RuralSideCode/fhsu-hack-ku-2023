import { matchPlayerToGroup } from "../../utils/groups";
import { players } from "../../utils/players";

const SocketHandler = (req, res) => {
    const group = matchPlayerToGroup(players.find((p) => p.getUUID() == req.query.uuid), undefined);

    res.end(JSON.stringify({group: group.uuid}));
}

export default SocketHandler;