/**
 * Created by xy on 2018/12/20.
 */
$(function(){




    staitcChart();
    staitcChart01()

})
var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}
function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}
setInterval(function () {

    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
    }

    myChart.setOption({
        series: [{
            data: data
        }]
    });
}, 1000);
function staitcChart(){
    var myChart = echarts.init($("#charts")[0]);
    option = {

        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            axisLabel: {
                textStyle: {
                    color:'#ffffff',
                    fontSize: 12,
                }
            },
            axisLine: {//轴线
                lineStyle: {
                    color: '#89a8e4'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            axisLabel: {
                textStyle: {
                    color:'#ffffff',
                    fontSize: 12,
                }
            },
            axisLine: {//轴线
                lineStyle: {
                    color: '#89a8e4'
                }
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data
        }]
    };


    myChart.setOption(option);

}
function staitcChart01(){
    var myChart = echarts.init($("#charts01")[0]);
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
                textStyle: {
                    color:'#ffffff',
                    fontSize: 12,
                }
            },
            axisLine: {//轴线
                lineStyle: {
                    color: '#89a8e4'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color:'#ffffff',
                    fontSize: 12,
                }
            },
            axisLine: {//轴线
                lineStyle: {
                    color: '#89a8e4'
                }
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    };



    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})
}