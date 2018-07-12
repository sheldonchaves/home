import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ClipboardModule } from 'ngx-clipboard';

import { HttpModule } from '@angular/http';
import { ShortcutsComponent } from './pages/shortcuts/shortcuts.component';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ColorsComponent } from './pages/colors/colors.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FontawesomeComponent } from './pages/fontawesome/fontawesome.component';
import { SearchPipe } from './pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortcutsComponent,
    ColorsComponent,
    SidebarComponent,
    FontawesomeComponent,
    SearchPipe
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ClipboardModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
