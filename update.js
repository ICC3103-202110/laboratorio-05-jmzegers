const { view, TableCreator } = require('./view')
title = view()

function TipFinal(amount, perc) {
    console.log(" ");
    console.log(title);
    p = TableCreator();
    finalTip = amount * (perc/100);
    finalTip = +finalTip.toFixed(2);
    if (amount != " " && perc != " ") {
        total = +amount + +finalTip;
        p.addRow({ BillAmount: "$"+amount, Tip1: perc, Tip2: "$"+finalTip, Total: "$"+total});
    }
    else if (amount != " " && perc == " ") {
        p.addRow({ BillAmount: "$"+amount})
    }
    else {
        p.addRow({ BillAmount: " "});
    }
    p.printTable();
}

module.exports = {
    TipFinal
}