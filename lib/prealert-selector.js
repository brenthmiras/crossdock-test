const readline  = require('readline-sync');
const config    = require('../config');
const files     = config.FILES;

function show_menu () {
    files.forEach( (file, index) => {
        console.log(`[${(index + 1)}] - ${file.title}`);
    });
    console.log(`[0] - Exit`);
}

function select () {
    show_menu();

    const index = parseInt(readline.question("Please select file: "));

    if (index == 0) process.exit(0);

    return files[index - 1].path;
}

module.exports = {
    select
};
