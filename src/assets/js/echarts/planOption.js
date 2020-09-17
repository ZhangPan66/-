export default {
    legend: {},
    tooltip: {},
    xAxis: {
        type: 'category',
        nameLocation: 'center',
        data:['机型1','机型2','机型3','机型4','机型5'],
        axisLabel:{
            lineStyle:{
                color:'#0B244C'
            },
            textStyle:{
                color:'#04AFF6'
            }
        },
    },
    yAxis: {
        name:'架数',
        axisLabel:{
            lineStyle:{
                color:'#0B244C'
            },
            textStyle:{
                color:'#04AFF6'
            }
        },
        splitLine: {
            show: true,
            lineStyle:{
               color: ['#0B244C'],
               type: 'solid'
          }
    　　},
        nameTextStyle: {
            color:'#04AFF6'
        }
    },
    grid: {
        // lineStyle:{
        //     color:'#0B244C'
        // },
    },
    series: [
        {
            type: 'bar',
            data: [10,12,32,43,65],
            itemStyle:{
                normal:{
                    color:function(params){
                        // 颜色组
                        var colorList = ['#cca272','#74608f','#d7a02b','#c8ba23','#c81123']
                        return colorList[params.dataIndex]
                    }
                }
            },
            barWidth : 22,//柱图宽度
            barCategoryGap:'15',/*多个并排柱子设置柱子之间的间距*/
        },
    ]
}