import {Component, NgModule, ViewChild} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'

import {StoreModule} from '@ngrx/store'

import {AppComponent} from './app.component'
import {BmTestComponent} from './bm-test.component'
import {BmResultsComponent} from './bm-results.component'
import {BmTestListComponent} from './bm-test-list.component'
import {BmDebugComponent} from './bm-debug.component'
import {reducer} from './bm-reducer'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    StoreModule.provideStore(reducer)
  ],
  declarations: [ 
    AppComponent, 
    BmTestComponent, 
    BmResultsComponent,
    BmTestListComponent,
    BmDebugComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}