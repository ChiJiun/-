// 讀取 CSV 檔案
d3.csv("death.csv").then(
    data => {
        drawPieChart(data);
    }
);

function drawPieChart(data) {
        console.log(data);
        let myGraph3 = document.getElementById('myGraph3');

        // 製作四筆資料
        let data1 = {
            labels: data.map(function(d) { return d["死亡原因"]; }),
            values: data.map(function(d) { return +d["人數-合計"]; }),
            name:'',
            type: 'pie',
            title: '合計死亡原因',
            domain: {row: 1, column: 1, x: [0, 0.45], y: [0.6, 1]}
        };

        let data2 = {
            labels: data.map(function(d) { return d["死亡原因"]; }),
            values: data.map(function(d) { return +d["給付金額-合計"]; }),
            name:'',
            type: 'pie',
            title: '給付金額',
            domain: {row: 1, column: 2, x: [0.55, 1], y: [0.6, 1]}
        };

        let data3 = {
            labels: data.map(function(d) { return d["死亡原因"]; }),
            values: data.map(function(d) { return +d["人數-男"]; }),
            name:'',
            type: 'pie',
            title: '男性死亡原因',
            domain: {row: 2, column: 1, x: [0, 0.45], y: [0, 0.4]},
            hole:0.5
        };

        let data4 = {
            labels: data.map(function(d) { return d["死亡原因"]; }),
            values: data.map(function(d) { return +d["人數-女"]; }),
            name:'',
            type: 'pie',
            title: '女性死亡原因',
            domain: {row: 2, column: 2, x: [0.55, 1], y: [0, 0.4]},
            hole:0.5
        };

        // 將資料放入陣列
        let Data3 = [data1, data2, data3, data4];

        // 設定圓餅圖的配置選項，指定不同子圖的大小
        let layout3 = {
            margin: {
                t: 30, // 調整上邊距
                l: 0, // 調整左邊距
            },
            title: '死亡原因分布',
            grid: {rows: 2, columns: 2}, // 將圖形分為2行2列
            subplot_titles: ['人數-合計', '給付金額-合計', '人數-男', '人數-女'], // 子圖的標題
            height: 600,
            width: 800
        };
        

        // 使用 Plotly 繪製圓餅圖
        Plotly.newPlot(myGraph3, Data3, layout3);
}
