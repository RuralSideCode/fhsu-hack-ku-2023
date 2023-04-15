import { Socket } from "socket.io";
import { ProblemType, findProblem } from "./ProblemsSelections";

import {v4 as uuidv4} from "uuid";

export class Group {
    players = []; // UUID's
    problem = undefined; // UUID
    problemType = new ProblemType();
    results = []; 
    inSession = false;
    room = undefined;

    constructor(problem, problemType) {
        this.problem = problem;
        this.problemType = problemType;
        this.room = uuidv4();
    }
};

export const groups = [];

export function matchPlayerToGroup(player, problemType) {
    let matchingGroup = undefined;

    // Try to find existing group
    for (let g of groups) {
        if (!g.inSession && problemType.matches(g.problemType)) {
            g.players.push(player);
            // TODO: Notify user that they have joined a group
            console.log("Old group found!");

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
    console.log("New Group created!");

    // Start the match in 30 seconds
    setTimeout(() => {
        startMatch(ng);
    }, 30000);

    return ng;
}

async function startMatch(group) {
   // Ignore if the group is in session
   if (group.inSession) {
    return;
   } 

   group.inSession = true;

   const s = new Socket();
   s.to(group.room).emit("start-code");
}

