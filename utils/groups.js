import { ProblemType } from "./ProblemsSelections";

export class Group {
    players = []; // UUID's
    problem = undefined; // UUID
    problemType = new ProblemType();
    results = []; 
    inSession = false;
};


export function matchPlayerToGroup(player, problemType) {
    let matchingGroup = undefined;

    // Try to find existing group
    for (let g of groups) {
        if (!g.inSession && problemType.matches(g.problemType)) {
            g.players.push(player);
            // TODO: Notify user that they have joined a group
        }
    }
}

export const groups = [];