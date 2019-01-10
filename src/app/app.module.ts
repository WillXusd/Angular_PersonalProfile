import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MapComponent } from './map/map.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    TimelineComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule,
    TabMenuModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
