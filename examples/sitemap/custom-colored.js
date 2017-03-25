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

var obj = list2obj(document.getElementById("nodeStructure"));
console.log(JSON.stringify(obj, null, 2));

function list2obj(x) {
    
    //  Output function.
    var o = {
        text: {
            name: ''
        }
    };
    
    //  c = each child
    var c = x.firstChild;
    
    //  Loop through child nodes.
    while (c) {
        
        //  Add to text property if it is a text.
        if (c.nodeName == '#text' && c.wholeText.match(/\w+/)) {
            o.text.name += c.nodeValue;
            
            //  Else if it is a normal node.
        } else if (c.nodeType == 1) {
            
            //  Create property for each node name.
            if (typeof o[c.nodeName] == 'undefined')
            o[c.nodeName] =[];
            o[c.nodeName][o[c.nodeName].length] = list2obj(c);
        }
        
        //  ...Next!
        c = c.nextSibling;
    }
    
    //  Now, attributes!
    var a = x.attributes;
    var i = 0;
    if (a) {
        for (var i = 0; i < a.length; i++) {
            o[a[i].name] = a[i].value;
        }
    }
    
    //  Finished!
    //console.log(o.text.name);
    return o;
}