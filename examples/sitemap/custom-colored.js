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
        text: {
            name: "Solar system",
            desc: "Our home"
        },
        children:[ {
            text: {
                name: "Terrestrial",
                desc: "Like earth"
            },
            HTMLclass: 'blue',
            children:[ {
                text: {
                    name: "Mercury"
                },
                HTMLclass: 'blue'
            }, {
                text: {
                    name: "Venus"
                },
                HTMLclass: 'blue'
            }, {
                text: {
                    name: "Earth",
                    desc: "Blue and green ball"
                },
                HTMLclass: 'blue'
            }, {
                text: {
                    name: "Mars"
                },
                HTMLclass: 'blue'
            }]
        }, {
            text: {
                name: "Jovian Planets",
                desc: "The big ones"
            },
            HTMLclass: 'orange',
            children:[ {
                text: {
                    name: "Jupiter"
                },
                HTMLclass: 'orange'
            }, {
                text: {
                    name: "Saturn"
                },
                HTMLclass: 'orange'
            }, {
                text: {
                    name: "Neptune"
                },
                HTMLclass: 'orange'
            }, {
                text: {
                    name: "Uranus"
                },
                HTMLclass: 'orange'
            }]
        }, {
            text: {
                name: "Dwarf Planets",
                desc: "The little ones"
            },
            HTMLclass: 'light-gray',
            children:[ {
                text: {
                    name: "Pluto",
                    desc: "Demoted from planet status"
                },
                HTMLclass: 'light-gray'
            }, {
                text: {
                    name: "Eris"
                },
                HTMLclass: 'light-gray'
            }, {
                text: {
                    name: "Ceres"
                },
                HTMLclass: 'light-gray'
            }]
        }],
    }
};