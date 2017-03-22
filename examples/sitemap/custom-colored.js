var sheet = "https://docs.google.com/spreadsheets/u/1/d/1kdDbjjYdVMweKUMzAWTx1z3xfNFcx-ykMZabbqYHtl8/gviz/tq?tqx=out:csv&tq=select%20*";

var chart_config = {
    chart: {
        container: "#custom-colored",
        
        rootOrientation: "WEST",
        nodeAlign: "BOTTOM",
        
        connectors: {
            type: 'curve'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    nodeStructure: {
    }
};

$.get(sheet, {
    format: "text"
}).done(function (data) {
    var mapData = csv2obj(data);
    console.log(mapData);
});


// Utility functions

function parse(row) {
    var insideQuote = false,
    entries =[],
    entry =[];
    row.split('').forEach(function (character) {
        if (character === '"') {
            insideQuote = ! insideQuote;
        } else {
            if (character == "," && ! insideQuote) {
                entries.push(entry.join(''));
                entry =[];
            } else {
                entry.push(character);
            }
        }
    });
    
    entries.push(entry.join(''));
    return entries;
}

function csv2obj(csv) {

    // Split the input into lines
    lines = csv.split('\n').filter(String);
    
    // Extract column names from the first line
    columnNamesLine = lines[0].replace(/\s+/g, "");
    columnNames = parse(columnNamesLine);
    //console.log(columnNames);
    
    // Extract data from subsequent lines
    dataLines = lines.slice(1);
    data = dataLines.map(parse);
    
    var dataObjects = data.map(function (arr) {
        var dataObject = {
        };
        columnNames.forEach(function (columnName, i) {
            dataObject[columnName] = arr[i];
        });
        return dataObject;
    });
    
    //console.log(JSON.stringify(dataObjects));
    return dataObjects;
}