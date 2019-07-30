'use strict';

const fs = require('fs');
var path = require('path');

const checkMsg = require('./validate-commit-message');
const msgFile = path.join('../', process.env.HUSKY_GIT_PARAMS);

let isValid = true;

if (msgFile) {
    const commitMsg = fs.readFileSync(msgFile, {encoding: 'utf-8'});
    const firstLine = commitMsg.split('\n')[0];
    isValid = checkMsg(firstLine);

    if (!isValid) {
        console.error('\nCheck CONTRIBUTING.md at the root of the repo for more information.');
    }
}

process.exit(isValid ? 0 : 1);
