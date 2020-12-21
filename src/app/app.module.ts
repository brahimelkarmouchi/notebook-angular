import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HeaderComponent } from './views/layouts/header/header.component'
import { SidebarComponent } from './views/layouts/sidebar/sidebar.component'
import { LoginComponent } from './views/auth/login/login.component'
import { RegisterComponent } from './views/auth/register/register.component'
import { HomeComponent } from './views/home/home.component'
import { httpInterceptorProviders } from './interceptors'
import { IndexComponent } from './views/notes/index/index.component'
import { NoteCardComponent } from './components/note-card/note-card.component'
import { TruncatePipe } from './pipes/truncate.pipe'
import { EditComponent } from './views/notes/edit/edit.component'
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular'
import { FeedbackAlertComponent } from './components/feedback-alert/feedback-alert.component'

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		IndexComponent,
		NoteCardComponent,
		TruncatePipe,
		EditComponent,
		FeedbackAlertComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		FontAwesomeModule,
		FormsModule,
		HttpClientModule,
		EditorModule, // Tinymce
	],
	providers: [
		httpInterceptorProviders,
		{ provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }, // Lazy load tinymce
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
