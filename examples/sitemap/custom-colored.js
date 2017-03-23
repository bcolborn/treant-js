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
    var mapData = csv2arr(data);
    //console.log(mapData);
    //nodeStructure = arr2chart(mapData)
    arr2chart(mapData);
});

function arr2chart(arr) {
    var chart = {
    };
    console.log(arr);
    chart.top = toString(arr[0]);
    console.log(chart);
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i];
        for (var j = 0; j < arr2.length; j++) {
            console.log("arr[" + i + "][" + j + "] = " + arr2[j]);
        }
    }
    return arr;
}

function csv2arr(csv) {
    var lines = csv.split(/\n/) // Convert to one string per line
    .map(function (lineStr) {
        // Convert each line to array (,)
        var row = lineStr.split(",");
        for (var cell in row) {
            row[cell] = row[cell].replace(/\"/g, '');
            //console.log(row[cell]);
        }
        return row;
        //console.log(row);
    }).slice(1);
    //console.log(lines);
    return JSON.stringify(lines, null, 2);
}