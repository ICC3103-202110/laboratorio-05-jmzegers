function Title() {
    const chalk = require('chalk');
    const figlet = require('figlet');
    return chalk.green(
        figlet.textSync(
            'Tip Calculator',
            {
                horizontalLayout: 'default',
                font: 'banner'
            }
        )
    )
}

function TableCreator() {
    const { Table } = require('console-table-printer');
    const p = new Table({
        //title: 'Title of the Table', // A text showsup on top of table (optional)
        columns: [
            { name: 'BillAmount', title: 'Bill Amount'}, // with alignment and color
            { name: 'Tip1', title: 'Tip (%)'}, // lines bigger than this will be splitted in multiple lines
            { name: 'Tip2', title: 'Tip' }, // Title is what will be shown while printing, by default title = name
            { name: 'Total', title: 'Total'},
        ]
    });
    return p;
}

function view(){
    return Title()
}

module.exports = {
    TableCreator,
    view,
}