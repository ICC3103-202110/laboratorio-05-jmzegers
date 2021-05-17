const { TipFinal }  = require('./update');
const inquirer = require('inquirer')
var prompt = require('prompt-sync') ();
i = 0;

// Impure
function App() {
    while (true) {
        bill = " ";
        perc = " ";
        TipFinal(bill, perc);
        
        bill = prompt("What is the value of your bill?: ");
        console.clear();

        TipFinal(bill, perc);
        perc = prompt("What is the tip(%)? : ");
        console.clear();

        TipFinal(bill, perc);
        again = prompt("Do you want to run the Tip Calculator again?[y/n] ");
        if (again != "y") {
            break;
        }
        i += 1;
    }
}

module.exports = {
    App
}