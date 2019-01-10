import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
  }
//  const geoCoordMap:any = {
//  '加格达奇': [124.196104, 51.991789],
//  '北京': [116.4551, 40.2539],
//  '哈尔滨': [127.9688, 45.368]
//};
//  const BJData:Array<number>  = [
//  [{
//    name: '哈尔滨',
//    value: 30
//  }, {
//    name: '北京'
//  }],
//  [{
//    name: '加格达奇',
//    value: 90
//  }, {
//    name: '哈尔滨'
//  }]
//];
//var convertData = function (data) {
//  var res = [];
//  for (var i = 0; i < data.length; i++) {
//    var dataItem = data[i];
//    var fromCoord = geoCoordMap[dataItem[0].name];
//    var toCoord = geoCoordMap[dataItem[1].name];
//    if (fromCoord && toCoord) {
//      res.push([{
//        coord: fromCoord,
//        value: dataItem[0].value
//      }, {
//        coord: toCoord,
//      }]);
//    }
//  }
//  return res;
//};

//var color = ['#a6c84c', '#ffa022', '#46bee9'];

//var series = [];
//[
//  ['北京', this.BJData]
//].forEach(function (item, i) {
//  series.push(

//    {
//      type: 'lines',
//      zlevel: 2,
//      effect: {
//        show: true,
//        period: 4,
//        trailLength: 0.02,
//        symbol: 'arrow',
//        symbolSize: 5,
//      },
//      lineStyle: {
//        normal: {
//          width: 1,
//          opacity: 0.6,
//          curveness: 0.2
//        }
//      },

//      data: convertData(item[1])
//    }, {
//      type: 'effectScatter',
//      coordinateSystem: 'geo',
//      zlevel: 2,
//      rippleEffect: {
//        period: 4,
//        brushType: 'stroke',
//        scale: 4
//      },
//      label: {
//        normal: {
//          show: true,
//          position: 'right',
//          offset: [5, 0],
//          formatter: '{b}'
//        },
//        emphasis: {
//          show: true
//        }
//      },
//      symbol: 'circle',
//      symbolSize: function (val) {
//        return 4 + val[2] / 10;
//      },
//      itemStyle: {
//        normal: {
//          show: false,
//          color: '#f00'
//        }
//      },
//      data: item[1].map(function (dataItem) {
//        return {
//          name: dataItem[0].name,
//          value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
//        };
//      }),
//    },
//    //被攻击点
//    {
//      type: 'scatter',
//      coordinateSystem: 'geo',
//      zlevel: 2,
//      rippleEffect: {
//        period: 4,
//        brushType: 'stroke',
//        scale: 4
//      },
//      label: {
//        normal: {
//          show: true,
//          position: 'right',
//          //                      offset:[5, 0],

//          color: '#00ffff',
//          formatter: '{b}',
//          textStyle: {
//            color: "#00ffff"
//          }
//        },
//        emphasis: {
//          show: true
//        }
//      },
//      symbol: 'circle',
//      symbolSize: 10,
//      itemStyle: {
//        normal: {
//          show: true,
//          color: '#9966cc'
//        }
//      },
//      data: [{
//        name: item[0],
//        value: geoCoordMap[item[0]].concat([100]),
//      }],
//    }
//  );
//});

//option = {
//  backgroundColor: '#404a59',

//  visualMap: {
//    min: 0,
//    max: 100,
//    calculable: true,
//    color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
//    textStyle: {
//      color: '#fff'
//    }
//  },
//  geo: {
//    map: 'china',
//    label: {
//      emphasis: {
//        show: false
//      }
//    },
//    roam: true,
//    layoutCenter: ['50%', '53%'],
//    layoutSize: "108%",
//    itemStyle: {
//      normal: {
//        color: 'rgba(51, 69, 89, .5)',
//        borderColor: 'rgba(100,149,237,1)'
//      },
//      emphasis: {
//        color: 'rgba(37, 43, 61, .5)'
//      }
//    }
//  },

//  series: series
//};
}
//export class p {
//  option: city[];
//  constructor(obj?: any) {
//    this.option = obj && obj.city || new city();
//  }

//}
//export class city {
//  option: Option[];
//  constructor(obj?: any) {
//    this.option = obj && obj.option || new Option();   
//  }

//}


//export class Option {
//  name: string;
//  value: number;
//  constructor(obj?: any) {
//    this.name = obj && obj.name || '';
//    this.value = obj && obj.value ||0;
//  }
//}
//export class city {
//  name: string;
//  value: number;
//  constructor(obj?: any) {
//    this.name = obj && obj.name;
//    this.value = obj && obj.value || null;
//  }
//}
//export class cityGroup {
//  option: city[];
//  constructor(obj?: any) {
//    this.option = obj && obj.option || new Option();   
//  }
//}

//const mockCity= 
//  [
//    [new city({
//      name: '北京',
//      value:10
//    }),  new city({
//      name: 'q'   
//      })],
//    [new city({
//      name: 'q',
//      value: 1
//    }), new city({
//      name: 'q'
//    })]

//  ];
//console.log(mockCity)
