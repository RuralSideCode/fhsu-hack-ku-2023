import { ProblemType, findProblem } from "./ProblemsSelections";

import {v4 as uuidv4} from "uuid";

export class Group {
    players = []; // UUID's
    problem = undefined; // UUID
    problemType = new ProblemType();
    results = []; 
    inSession = false;
    uuid = undefined;

    constructor(problem) {
        this.problem = problem;
        //this.problemType = problemType;
        this.uuid = uuidv4();
    }
};

export const groups = [];

export function getGroup(uuid) {
    for (let g of groups) {
        if (g.uuid == uuid) {
            return g;
        }
    }

    return undefined;
}

export function matchPlayerToGroup(player, problemType) {
    // Try to find existing group
    for (let g of groups) {
        if (!g.inSession) {
            g.players.push(player);
            // TODO: Notify user that they have joined a group

            // If there are enough players, then start the match
            if (g.players.length > 3) {
                console.log("4 players, starting match");
                startMatch(g);
            }

            return g;
        }
    }

    // Create new group
    const ng = new Group(findProblem(problemType));
    ng.players.push(player);

    groups.push(ng);

    // Start the match in 30 seconds
    setTimeout(() => {
        startMatch(ng);
    }, 1000);

    return ng;
}

export async function startMatch(group) {
    console.log(`Starting Group ${group.uuid}`)
    // Ignore if the group is in session
    if (group.inSession) {
        return;
    } 

   group.inSession = true;
}

