import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './views/auth/login/login.component'
import { RegisterComponent } from './views/auth/register/register.component'
import { HomeComponent } from './views/home/home.component'
import { IndexComponent as NoteIndexComponent } from './views/notes/index/index/index.component'

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'home',
		component: HomeComponent,
		children: [{ path: '', component: NoteIndexComponent }],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
