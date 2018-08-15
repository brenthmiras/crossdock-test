const parse     = require('csv-parse/lib/sync');
const stringify = require('csv-stringify/lib/sync');
const readline  = require('readline-sync');
const config    = require('../config');
const utils     = require('../lib/utils');
const fs        = require('fs');
const os        = require('os');
const files     = config.FILES;

function show_menu () {
    files.forEach( (file, index) => {
        let id = index + 1;
        
        if (file.selected) {
            id = '✓';
        }

        console.log(`[${id}] - ${file.title}`);
    });
    console.log(`[0] - Done selecting files`);
}

function select () {
    while (true) {
        show_menu();
    
        const index = parseInt(readline.question("Please select file(s) [-1 to exit]: "));
        
        if (index == -1) {
            process.exit(0);
        }

        else if (index == 0) {
            break;
        }

        else {
            files[index - 1].selected = true;
        }
    }

    const file_paths = files
        .filter( f => f.selected )
        .map( f => f.path );

    return file_paths;
}

function change_rdd (path) {
    const file = fs.readFileSync(path);
    
    // convert file buffer to string
    const content = Buffer.from(file.buffer).toString();

    const parse_options = { 'skip_lines_with_empty_values': true };

    // convert the string to list of rows
    const parsed = parse(content, parse_options);

    // replace rdd to today
    const replaced = replace_rdd(parsed);
    
    // const stringify_options = { header: true, columns: columns };

    // now create a file
    const string = stringify(replaced);

    const random_string = utils.get_random_string(8);

    const new_path = os.tmpdir() + `/prealert-${random_string}.csv`;
    
    fs.writeFileSync( new_path, string, 'utf8');

    return new_path;
}

function replace_rdd (rows) {
    const rdd_column = 'Required Delivery Date (RDD)';

    // Remove the first row, but save it as headers
    const headers = rows.shift();

    const index = headers.indexOf(rdd_column);

    if (index == -1) throw new Error('Your csv file does not contain header column: Required Delivery Date (RDD)');

    // Replace the rdd for all rows
    rows.forEach( (row) => {
        row[index] = utils.get_rdd();
    });

    // Return the headers
    rows.unshift(headers);

    return rows;
}

module.exports = {
    select,
    change_rdd
};
