import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//  Components
import { AppComponent } from './app.component';
import { blockChainChartsComponents } from './components/index';

// Services
import { BlockchainChartsService } from './services/blockchain-charts.service';

// Imports
import { NgMathPipesModule } from 'angular-pipes';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DatePipe } from '@angular/common';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    blockChainChartsComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgMathPipesModule,
    ChartsModule,
    Angular2FontawesomeModule
  ],
  providers: [BlockchainChartsService, HttpClient, HttpClientModule, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
