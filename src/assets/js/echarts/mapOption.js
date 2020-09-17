
// 虚拟无人机信息
var geoCoordMap = {
    '无人机1':[120.86,27.25,1555],
    '无人机2':[120.16,27.35,1555],
    '无人机3':[119.96,27.85,1555],
    '无人机4':[120.36,28.25,1555],
    '无人机5':[120.37,28.27,1222],
  
  }
  var data = [
      {name: '无人机1', value: 19},
      {name: '无人机2', value: 20},
      {name: '无人机3', value: 32},
      {name: '无人机4', value: 24},
      {name: '无人机5', value: 24},
  
  ];
  // 普通函数编程
  var convertData  = function(data){
      var res = [];
      for(var a = 0;a<data.length;a++){
          var geoCoord = geoCoordMap[data[a].name];
          geoCoord = geoCoord.map(item=>item
          )
          if(geoCoord){
              res.push({
                  name:data[a].name,
                  value:geoCoord.concat(data[a].value)
              });
          }
      }
      return res
  }
export default {
    geo: {
        map: '浙江',
        roam: true,
        zoom: 3,
        itemStyle: {
            normal: {
                borderColor: '#0C53AE',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                shadowOffsetX: 10,
                borderWidth: 2,
                areaColor: '#031040'
            },
        },
        // 当前视角的中心点，使用经纬度表示
        center: [120.50, 27.70],
        // 地图长宽比
        aspectScale: 1,
        emphasis: {
            itemStyle: {
                color: '#2DC4F6',
            },
            label: {
                color:'#031040',
                fontWeight: 'bold',
                fontSize: '16'
            }
        }
    },
    series:[{
        name:'无人机',
        type:'effectScatter',
        coordinateSystem:'geo',
        data:convertData(data),
        symbolSize: 4.5,
        showEffectOn: 'emphasis',
        rippleEffect: {
            brushType: 'fill'
        },
        legendHoverLink: true,
        encode:{
            value:2,
        },
        // hover后显示是否显示标签
        emphasis:{
            label:{
                formatter:function(params){
                    return "名称:" + params.name+ '\n' + "无人机型号:" + params.value[2]
                },
                show:true,
                position:'top',
                opacity:.5,
                // 文字颜色
                color:'#fff',
                borderRadius: [4, 4, 4, 4],
                backgroundColor: '#666',
                opacity:.5,
                align: 'left',
                padding: [5,5,5,5]
            },
            itemStyle:{
                color:'#2DC4F6',
            },
            rich: {
                value: {
                    lineHeight: 30,
                    align: 'center'
                },
            }
        },
            //打点的颜色
        itemStyle: {
            normal: {
            color: '#fecb2e',
            shadowColor: '#0d5ebd'
            }
        },
        zlevel: 2
    }],

}