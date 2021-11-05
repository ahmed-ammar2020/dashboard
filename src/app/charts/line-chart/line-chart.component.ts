import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: null,
      },

      subtitle: {
        text: null,
      },

      yAxis: {
        title: {
          enabled: false,
        },
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2010 to 2017',
        },
      },

      legend: {
        enabled: false,
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
      },

      exporting: {
        enabled: false,
      },

      credits: {
        enabled: false,
      },

      series: [
        // this is the data coming from API (service file)
        {
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
        {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        },
        {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
