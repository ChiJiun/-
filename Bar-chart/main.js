let myGraph2 = document.getElementById("myGraph2");
let HW2_trace1 = {};
HW2_trace1.type = "bar";
HW2_trace1.name = "Lion";
HW2_trace1.x = [];
HW2_trace1.y = [];

HW2_trace1.x[0] = "Taipei Zoo";
HW2_trace1.y[0] = animals_Taipei_Zoo[0]['count'];
HW2_trace1.x[1] = "Taoyuan Zoo";
HW2_trace1.y[1] = animals_Taoyuan_Zoo[0]['count'];

HW2_trace1.text = HW2_trace1.y;
HW2_trace1.textfont = {
    color: 'white',
    size:20
};

let HW2_trace2 = {};
HW2_trace2.type = "bar";
HW2_trace2.name = "Tiger";
HW2_trace2.x = [];
HW2_trace2.y = [];

HW2_trace2.x[0] = "Taipei Zoo";
HW2_trace2.y[0] = animals_Taipei_Zoo[1]['count'];
HW2_trace2.x[1] = "Taoyuan Zoo";
HW2_trace2.y[1] = animals_Taoyuan_Zoo[1]['count'];

HW2_trace2.text = HW2_trace2.y;
HW2_trace2.textfont = {
    color: 'white',
    size: 20
};

let HW2_trace3 = {};
HW2_trace3.type = "bar";
HW2_trace3.name = "Monkey";
HW2_trace3.x = [];
HW2_trace3.y = [];

HW2_trace3.x[0] = "Taipei Zoo";
HW2_trace3.y[0] = animals_Taipei_Zoo[2]['count'];
HW2_trace3.x[1] = "Taoyuan Zoo";
HW2_trace3.y[1] = animals_Taoyuan_Zoo[2]['count'];

HW2_trace3.text = HW2_trace3.y;
HW2_trace3.textfont = {
    color: 'white',
    size: 20
};

// for(let i=0;i<animals_Taipei_Zoo.length;i++){
//     trace1.x[i] = animals_Taipei_Zoo[i]['name'];
//     trace1.y[i] = animals_Taipei_Zoo[i]['count'];
// }

// let trace2 = {};
// trace2.type = "bar";
// trace2.name = "Taoyuan Zoo";
// trace2.x = [];
// trace2.y = [];

// for (let i = 0; i < animals_Taoyuan_Zoo.length; i++) {
//     trace2.x[i] = animals_Taoyuan_Zoo[i]['name'];
//     trace2.y[i] = animals_Taoyuan_Zoo[i]['count'];
// }

let data2 = [];
data2.push(HW2_trace1);
data2.push(HW2_trace2);
data2.push(HW2_trace3);

let layout2 = {
    margin: {
        t: 50
    },
    barmode:'stack',
    title:'Taipei Zoo VS. Taoyuan Zoo'
};

Plotly.newPlot(myGraph2, data2, layout2);