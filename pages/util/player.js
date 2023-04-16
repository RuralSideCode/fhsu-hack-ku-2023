import { Player } from "../api/utils/players";

export const player = new Player();
let groupUUID = undefined;

export function setGroupUUID(uuid) {
    groupUUID = uuid;
}

export function getGroupUUID() {
    return groupUUID;
}