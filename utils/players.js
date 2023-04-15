import { v4 as uuidv4 } from "uuid";

export class Player {
    uuid = undefined;
    name = "";

    points = 0;

    constructor(name) {
        this.uuid = uuidv4();
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getUUID() {
        return this.uuid;
    }

    getPoints() {
        return this.points;
    }
}

// All players
export const players = [];

export function registerPlayer(player) {
    players.push(player);
}