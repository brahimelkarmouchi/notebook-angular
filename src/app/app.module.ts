import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HeaderComponent } from './layouts/header/header.component'
import { SidebarComponent } from './layouts/sidebar/sidebar.component'
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component'
import { LoginComponent } from './views/auth/login/login.component'
import { RegisterComponent } from './views/auth/register/register.component'
import { HomeComponent } from './views/home/home.component'
import { httpInterceptorProviders } from './interceptors'
import { IndexComponent } from './views/notes/index/index/index.component'
import { NoteCardComponent } from './components/note-card/note-card.component'
import { TruncatePipe } from './pipes/truncate.pipe'

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		SidebarMenuComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		IndexComponent,
		NoteCardComponent,
		TruncatePipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		FontAwesomeModule,
		FormsModule,
		HttpClientModule,
	],
	providers: [httpInterceptorProviders],
	bootstrap: [AppComponent],
})
export class AppModule {}
