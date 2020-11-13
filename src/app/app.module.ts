import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { WindowsComponent } from './windows/windows.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SquaresComponent } from './squares/squares.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    WindowsComponent,
    ImageCardComponent,
    TimelineComponent,
    SquaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
