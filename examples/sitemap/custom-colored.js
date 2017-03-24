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
console.log(obj);

function list2obj(x) {

	//
	//  Output function.
	//
	var o = {
		_text: ''
	};

	//
	//  c = each child
	//
	var c = x.firstChild;

	//
	//  Loop through child nodes.
	//
	while (c) {

		//
		//  Add to _text property if it is a text.
		//
		if (c.nodeName == '#text') {
			o._text += c.nodeValue;

		//
		//  Else if it is a normal node.
		//
		} else if (c.nodeType == 1) {

			//
			//  Create property for each node name.
			//
			if (typeof o[c.nodeName] == 'undefined')
				o[c.nodeName] = [];
			o[c.nodeName][o[c.nodeName].length] = list2obj(c);

		}

		//
		//  ...Next!
		//
		c = c.nextSibling;

	}

	//
	//  Now, attributes!
	//
	var a = x.attributes;
	var i = 0;
	if (a) {
		for (var i = 0; i < a.length; i ++) {
			o[a[i].name] = a[i].value;
		}
	}

	//
	//  Clean the text
	//
	if (o._text.match(/^\\s*$/))
		delete o._text;

	//
	//  Finished!
	//
	return o;

}