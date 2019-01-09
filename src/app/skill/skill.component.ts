import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  pieoption = {
    backgroundColor: '#101736',
    "normal": {
      "top": 200,
      "left": 300,
      "width": 500,
      "height": 400,
      "zIndex": 6,
      "backgroundColor": ""
    },
    "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
    "title": {
      "show": true,
      "text": "个人技能",
      "left": "40%",
      "top": "1%",
      "textStyle": {
        "fontSize": 18,
        "color": "#fff",
        "fontStyle": "normal",
        "fontWeight": "normal"
      }
    },
    "tooltip": {
      "show": true,
      "trigger": "item"
    },
    "legend": {
      "show": true,
      "icon": "circle",
      "left": "35%",
      "top": "90%",
      "orient": "horizontal",
      "textStyle": {
        "fontSize": 14,
        "color": "#fff"
      },
      "data": ["数据1", "数据2"]
    },
    "radar": {
      "center": ["50%", "50%"],
      "radius": "70%",
      "startAngle": 90,
      "splitNumber": 4,
      "shape": "circle",
      "splitArea": {
        "areaStyle": {
          "color": ["transparent"]
        }
      },
      "axisLabel": {
        "show": false,
        "fontSize": 18,
        "color": "#fff",
        "fontStyle": "normal",
        "fontWeight": "normal"
      },
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "grey"//
        }
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": "grey"//
        }
      },
      "indicator": [{
        "name": "javascript",
        "max": 88
      }, {
        "name": "Html+Css",
        "max": 88
      }, {
        "name": "SAP UI5",
        "max": 88
      }, {
        "name": "abap",
        "max": 88
      }, {
        "name": "Angular",
        "max": 88
      }, {
        "name": "Java",
        "max": 88
      }, {
        "name": "NodeJS",
        "max": 88
      }, {
        "name": "bootstrap",
        "max": 88
      }, {
        "name": "es6",
        "max": 88
      }, {
        "name": "ODATA",
        "max": 88
      }, {
        "name": "gateway",
        "max": 88
      }]
    },
    "series": [{
      "name": "数据1",
      "type": "radar",
      "symbol": "circle",
      "symbolSize": 10,
      "areaStyle": {
        "normal": {
          "color": {
            type: 'linear',
            x: 0, //右
            y: 0, //下
            x2: 1, //左
            y2: 1, //上
            colorStops: [{
              offset: 0,
              color: '#e92b77'
            }, {
              offset: 0.5,
              color: 'rgba(0,0,0,0)'
            }, {
              offset: 1,
              color: '#e92b77'
            }],
            globalCoord: false
          },
          opacity: 1 // 区域透明度
        }
      },
      itemStyle: {
        color: 'rgba(245, 166, 35, 1)',
        borderColor: 'rgba(245, 166, 35, 0.3)',
        borderWidth: 10,
      },
      "lineStyle": {
        "normal": {
          "type": "dashed",

          "color": "rgba(245, 166, 35, 1)",
          "width": 2
        }
      },
      "data": [
        [10, 50, 55, 80, 50, 80, 48, 43, 60, 78, 60, 40, 42, 44, 65]
      ]
    }, {
      "name": "数据2",
      "type": "radar",
      "symbol": "circle",
      "symbolSize": 10,
      "itemStyle": {
        "normal": {
          color: 'rgba(19, 173, 255, 1)',
          "borderColor": "rgba(19, 173, 255, 0.4)",
          "borderWidth": 10
        }
      },
      "areaStyle": {
        "normal": {
          "color": "rgba(19, 173, 255, 0.5)"
        }
      },
      "lineStyle": {
        "normal": {
          "color": "rgba(19, 173, 255, 1)",
          "width": 2,
          "type": "dashed"
        }
      },
      "data": [
        [60, 60, 65, 60, 70, 40, 80, 63, 68, 60, 77, 60, 80, 62, 80]
      ]
    }]
  };
    };
  

//mock data
export class CheckData {
  stats: boolean;
  value: number;
  name: string;
}

export const MOCKNEWS: CheckData[] = [
  { stats: false, value: 10, name: '种方式完全没错，是angular提供的一种改变class' },
  { stats: false, value: 10, name: '的一种改变class的方式，但是在controller涉及了classname在我看来是' },
  { stats: false, value: 10, name: '的一种改变class的方式，但是在controller涉及了classname在我看来是' },
  { stats: false, value: 10, name: '的一种改变class的方式，但是在controller涉及了classname在我看来是' },
  { stats: false, value: 10, name: '的一种改变class的方式，但是在controller涉及了classname在我看来是' },
  { stats: false, value: 10, name: '的一种改变class的方式，但是在controller涉及了classname在我看来是' },
  { stats: false, value: 10, name: 'D的一种改变class的方式，但是在controller涉及了classname在我看来是' },
  { stats: false, value: 10, name: 'Cele的一种改变class的方式，但是在controller涉及了classname在我看来是ritas' },
  { stats: true, value: 10, name: '的一种改变class的方式，但是在controller涉及了classname在我看来是' },
  { stats: true, value: 10, name: '的一种改变class的方式，但是在controller涉及了classname在我看来是' }

];
