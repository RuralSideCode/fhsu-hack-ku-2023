export class ProblemType {
    difficulty = undefined;
    tags = [];
    points = undefined;

    constructor(difficulty, tags, points) {
        if (difficulty) this.difficulty = difficulty;
        if (tags) this.tags = tags;
        if (points) this.points = points;
    }

    matches(problemType) {
        return problemType.difficulty <= this.difficulty
            && problemType.points >= this.points
            && problemType.tags.reduce((result, curr) => {
                result = this.tags.includes(curr) ? true : result
            });
    }
}

function findProblem(problems, problemType) {
    let filtered_result = problems;

    if (problemType.difficulty != undefined) {
        filtered_result = filtered_result.filter((p) => p.difficulty == problemType.difficulty);
    }

    if (tags != undefined) {
        filtered_result = filtered_result.filter((p) => {
            let has = false;
            for (let tag of p.tags) {
                if (tags.includes(problemType.tag)) {
                    has = true;
                    break;
                }
            }

            has == true
        });
    }

    if (problemType.points != undefined) {
        filtered_result = filtered_result.filter((p) => p.difficulty == problemType.points);
    }
}