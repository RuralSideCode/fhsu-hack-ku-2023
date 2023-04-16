import { groups } from "../../utils/groups"

export default function handler(req, res) {
    const uuid = req.query.uuid;
    const group = groups.find((g) => g.uuid == uuid);

    if (!group.inSession) res.end(JSON.stringify({error: "Group not in session"}));

    res.end(JSON.stringify(group.problem));
}