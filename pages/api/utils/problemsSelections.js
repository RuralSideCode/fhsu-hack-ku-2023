const fs = require('fs');

let problems = undefined;

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

export function findProblem(problemType) {
    // Cacheing of problems
    let filtered_result = problems ?? initProblems;

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

function initProblems() {
    fs.readFile("./pages/api/data/problems.json", 'utf-8', (err, data) => {
        if (err) {
            console.error("Unable to read problems.json");
            console.error(`${err}`);
            return;
        }

        const data_obj = JSON.parse(data);
        if (data_obj == undefined) {
            console.error("Unable to parse problems.json file to JS object");
        } 

        problems = data_obj["problems"];

        if (problems == undefined) {
            console.error("problems.json is not correctly formatted")
        }

        return problems;
    });
}