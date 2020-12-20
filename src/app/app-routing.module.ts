import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './guards/auth.guard'
import { GuestGuard } from './guards/guest.guard'
import { LoginComponent } from './views/auth/login/login.component'
import { RegisterComponent } from './views/auth/register/register.component'
import { HomeComponent } from './views/home/home.component'
import { EditComponent as EditNoteComponent } from './views/notes/edit/edit.component'
import { IndexComponent as NoteIndexComponent } from './views/notes/index/index.component'

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [GuestGuard],
	},
	{
		path: 'register',
		component: RegisterComponent,
		canActivate: [GuestGuard],
	},
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{ path: '', component: NoteIndexComponent },
			{ path: 'notes/:id', component: EditNoteComponent },
		],
		canActivate: [AuthGuard],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
