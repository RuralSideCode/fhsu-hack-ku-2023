
export default function handler (req, res) {
    const groupUUID = req.query.gropuUUID;
    const userUUID = req.query.userUUID;

    const groups = req.app.groups;

    console.log(groups);
    const group = getGroup(groupUUID);

    if (group == undefined) {
        res.end(JSON.stringify({error: "Unable to find group"}));
        return;
    }

    const user = group.players.find((p) => p.uuid == userUUID);

    if (user == undefined) {
        res.end(JSON.stringify({error: "Unable to find user"}));
        return;
    }

    const code = req.body().code;
    console.log(code);
    const result = testCode(code, group.problem.inputs, group.problem.outputs);

    res.end(JSON.stringify({result: result}));
}

function testCode(code, inputs, outputs) {
    if (code == undefined || inputs == undefined || outputs == undefined) {
        return false;
    }

    for (let i = 0; i < inputs.length; i++) {
        const fullProgram = `const params = ${inputs[i]};${code}solution(params);`
        const func = new Function(fullProgram);
        const output = func();

        console.log(`Output of func: ${output}`);
        console.log(`Output of outs: ${outputs[i]}`);

        if (output != outputs[i]) {
            return false;
        }
    }

    return true;
}

function getGroup(uuid) {
    for (let g of groups) {
        if (g.uuid == uuid) {
            return g;
        }
    }

    return undefined;
}