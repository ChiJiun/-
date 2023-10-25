let myGraph3 = document.getElementById('myGraph3');

let HW3_trace1 = {};
HW3_trace1.type = 'pie';
HW3_trace1.title = "機器學習概論";
HW3_trace1.hole =0.5;
HW3_trace1.labels = [];
HW3_trace1.values = [];
HW3_trace1.domain = {
    row:0,
    column:0
};

for (let x=0;x<evaluation_ratio_1.length; x++){
    HW3_trace1.labels[x] = evaluation_ratio_1[x]['name'];
    HW3_trace1.values[x] = evaluation_ratio_1[x]['count'];
}

let HW3_trace2 = {};
HW3_trace2.type = 'pie';
HW3_trace2.title = "資料視覺化";
HW3_trace2.hole = 0.5;
HW3_trace2.labels = [];
HW3_trace2.values = [];
HW3_trace2.domain = {
    row:0,
    column:1
};

for (let x=0; x<evaluation_ratio_2.length; x++){
    HW3_trace2.labels[x] = evaluation_ratio_2[x]['name'];
    HW3_trace2.values[x] = evaluation_ratio_2[x]['count'];
}

let HW3_trace3 = {};
HW3_trace3.type = 'pie';
HW3_trace3.title = "人工智慧與永續發展";
HW3_trace3.labels = [];
HW3_trace3.values = [];
HW3_trace3.domain = {
    row:1,
    column:0
};

for (let x=0; x<evaluation_ratio_3.length; x++){
    HW3_trace3.labels[x] = evaluation_ratio_3[x]['name'];
    HW3_trace3.values[x] = evaluation_ratio_3[x]['count'];
}

let HW3_trace4 = {};
HW3_trace4.type = 'pie';
HW3_trace4.title = "Python程式設計";
HW3_trace4.labels = [];
HW3_trace4.values = [];
HW3_trace4.domain = {
    row:1,
    column:1
};

for (let x=0; x<evaluation_ratio_4.length; x++){
    HW3_trace4.labels[x] = evaluation_ratio_4[x]['name'];
    HW3_trace4.values[x] = evaluation_ratio_4[x]['count'];
}

let data3 =[];
data3.push(HW3_trace1);
data3.push(HW3_trace2);
data3.push(HW3_trace3);
data3.push(HW3_trace4);

let layout3 ={
    margin:{
        t:10,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    }
};
Plotly.newPlot(myGraph3, data3, layout3);