// 取得每個地區的名稱
let locations = not_pay_attention.map(item => item.name);

// 取得每個類別的數據
let notPayAttentionCounts = not_pay_attention.map(item => item.count);
let violateRulesCounts = violate_rules.map(item => item.count);
let turnLeftCounts = turn_left.map(item => item.count);

// 創建長條圖的資料
let data2 = [{
        x: locations,
        y: notPayAttentionCounts,
        name: '未注意車前狀況',
        type: 'bar'
    },
    {
        x: locations,
        y: violateRulesCounts,
        name: '未依規定讓車',
        type: 'bar'
    },
    {
        x: locations,
        y: turnLeftCounts,
        name: '未依規定左轉彎',
        type: 'bar',
    }
];

// 設定圖表佈局
let layout2 = {
    margin: {
    t: 50
},
    title: '桃園各地區三大交通事故原因',
    barmode: 'stack'
};

// 在指定的 <div> 中顯示圖表
Plotly.newPlot(myGraph2, data2, layout2);
