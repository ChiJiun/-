d3.csv('https://raw.githubusercontent.com/ryanchung403/dataset/main/train_data_titanic.csv').then(
    res => {
        drawHistogram(res);
    }
);

function drawHistogram(res) {
    console.log(res);
    let myGraph4 = document.getElementById('myGraph4');

    let hw4_trace1 = {};
    hw4_trace1.type = "histogram";
    hw4_trace1.x = [];
    hw4_trace1.name = "父母&小孩數量";
    hw4_trace1.opacity = 0.5;
    // trace1.x = set1;
    // trace1.xbins = {
    //     size: 10,
    //     start: 0,
    //     end: 100
    // };

    for (let i = 0; i < res.length; i++) {
        hw4_trace1.x[i] = res[i]['Parch']
    }

    let hw4_trace2 = {};
    hw4_trace2.type = "histogram";
    hw4_trace2.x = [];
    hw4_trace2.name = "兄弟姊妹&配偶";
    hw4_trace2.opacity = 0.5;

    for (let i = 0; i < res.length; i++) {
        hw4_trace2.x[i] = res[i]['SibSp']
    }


    let data4 = [];
    data4.push(hw4_trace1);
    data4.push(hw4_trace2);

    let layout4 = {
        margin: {
            t: 0
        },
        barmode: "overlay"
    };

    Plotly.newPlot(myGraph4, data4, layout4)
}
