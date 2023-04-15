
class Result {
    player = undefined; // uuid
    time = undefined; // Datetime

    constructor(player) {
        this.player = player;
        this.time = Date.now();
    }
}