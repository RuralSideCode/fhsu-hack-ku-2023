import { unescape } from 'querystring';

const fs = require('fs');

let problems = undefined;

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
    });
}

export default function handler(req, res) {
    if (problems == undefined) {
        initProblems();
    }

    res.end(JSON.stringify(problems));
}