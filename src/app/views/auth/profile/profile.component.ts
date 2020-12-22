import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/interfaces/user'
import { UserService } from 'src/app/services/user.service'

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
	infosFormLoading: boolean = false
	passwordFormLoading: boolean = false
	avatarFormLoading: boolean = false
	infosErrors: any = {
		name: [],
		email: [],
	}
	passwordErrors: any = {
		current_password: [],
		password: [],
		password_confirmation: [],
	}
	avatarErrors: any = []
	user: User
	changePasswordForm = {
		current_password: '',
		password: '',
		password_confirmation: '',
	}

	fileToUpload: File = null;

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.userService.getUser().subscribe((user) => {
			this.user = user
		})
	}

	updateInfos() {
		this.infosFormLoading = true
		this.userService.updateUser(this.user).subscribe(
			(user) => {
				this.user = user
				this.infosFormLoading = false
			},
			({ error }) => {
				console.log(error)
				this.infosErrors = error.errors
				this.infosFormLoading = false
			}
		)
	}

	updatePassword() {
		this.passwordFormLoading = true
		this.userService.updateUserPassword(this.changePasswordForm).subscribe(
			(user) => {
				this.user = user
				this.passwordFormLoading = false
			},
			({ error }) => {
				this.passwordErrors = error.errors
				this.passwordFormLoading = false
			}
		)
	}

	handleFileInput(files: FileList) {
		this.fileToUpload = files.item(0)
		console.log(this.fileToUpload)
	}

	updateAvatar() {
		this.avatarFormLoading = true
		this.userService.updateAvatar(this.fileToUpload).subscribe(
			(user) => {
				this.user = user
				this.avatarFormLoading = false
			}, 
			({error}) => {
			  this.avatarErrors = error.errors.avatar		
			  this.avatarFormLoading = false
			}
		);
	}
}
