
function findProblem(problems, difficulty, tags, points) {
    let filtered_result = problems;

    if (difficulty != undefined) {
        filtered_result = filtered_result.filter((p) => p.difficulty == difficulty);
    }

    if (tags != undefined) {
        filtered_result = filtered_result.filter((p) => {
            let has = false;
            for (let tag of p.tags) {
                if (tags.includes(tag)) {
                    has = true;
                    break;
                }
            }

            has == true
        });
    }

    if (points != undefined) {
        filtered_result = filtered_result.filter((p) => p.difficulty == difficulty);
    }
}