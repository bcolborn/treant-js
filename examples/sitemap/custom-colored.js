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

//chart_config.nodeStructure =
list2obj(document.getElementById("nodeStructure"), 0);
var list =[];
//chart_config.nodeStructure = getNestedChildren(list, document.getElementById("nodeStructure"));


function getNestedChildren(arr, parent) {
    var out =[]
    for (var i in arr) {
        if (arr[i].parent == parent) {
            var children = getNestedChildren(arr, arr[i].id)
            
            if (children.length) {
                arr[i].children = children
            }
            out.push(arr[i])
        }
    }
    console.log(out);
    return out;
}
function list2obj(current, depth) {
    //console.log(current);
    var children = current.childNodes;
    for (var i = 0, len = children.length; i < len; i++) {
        list2obj(children[i], depth + 1);
    }
    if (current.nodeName == '#text' && current.wholeText.match(/\w+/)) {
        console.log(depth);
        console.log(current);
        return (current);
    }
}