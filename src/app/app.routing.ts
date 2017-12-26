import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ShortcutsComponent } from './pages/shortcuts/shortcuts.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { FontawesomeComponent } from './pages/fontawesome/fontawesome.component';


const routes: Routes = [


	{ path: 'shortcuts', component: ShortcutsComponent },
	{ path: 'colors', component: ColorsComponent },
	{ path: 'fontawesome', component: FontawesomeComponent },

	{ path: '', redirectTo: 'shortcuts', pathMatch: 'full' }


];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	exports: [
	],
})
export class AppRoutingModule { }
