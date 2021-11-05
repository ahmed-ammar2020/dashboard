import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsHomeComponent } from './charts-home/charts-home.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LineChartComponent } from './line-chart/line-chart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TableComponent } from './table/table.component';
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
  declarations: [
    ChartsHomeComponent,
    AreaChartComponent,
    LineChartComponent,
    PieChartComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MaterialsModule,
  ],
})
export class ChartsModule {}
