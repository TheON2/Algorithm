const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let testCases;

rl.on('line', (line) => {
    if (!testCases) {
        testCases = parseInt(line);
    } else {
        let C = parseInt(line);
        let Q = Math.floor(C / 25);
        C %= 25;

        let D = Math.floor(C / 10);
        C %= 10;

        let N = Math.floor(C / 5);
        C %= 5;

        let P = C;

        console.log(Q, D, N, P);

        testCases--;
        if (testCases === 0) {
            rl.close();
        }
    }
});