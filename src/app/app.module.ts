import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//  Components
import { AppComponent } from './app.component';
import { blockChainChartsComponents } from './components/index';

// Pipe
import { NgMathPipesModule } from 'angular-pipes';

// Services
import { BlockchainChartsService } from './services/blockchain-charts.service';

@NgModule({
  declarations: [
    AppComponent,
    blockChainChartsComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgMathPipesModule
  ],
  providers: [BlockchainChartsService, HttpClient, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
