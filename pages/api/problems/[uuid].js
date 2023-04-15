import { unescape } from 'querystring';



export default function handler(req, res) {
    if (problems == undefined) {
        initProblems();
    }

    res.end(JSON.stringify(problems));
}