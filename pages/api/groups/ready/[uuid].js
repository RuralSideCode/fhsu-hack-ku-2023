import { groups } from "../../utils/groups";

export default function handler(req, res) {
    const uuid = req.query.uuid;

    if (groups == []) {
        console.log("Groups are empty");
        res.end(JSON.stringify({error: "Groups are empty"}));
        return;
    }

    const group = groups.find((g) => g.uuid == uuid);

    if (group == undefined) {
        console.log("Group was not found");
        res.end(JSON.stringify({error: "Group not found"}));
        return;
    }

    res.end(JSON.stringify({
        ready: group['inSession'],
        problem: group['problem']
    }));
}