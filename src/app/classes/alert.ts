export class Alert {
	dimissible: boolean
	isOpen: boolean
	type: string
	message: string
	timeout: number

	constructor(
		dimissible: boolean,
		isOpen: boolean,
		type: string,
		message: string,
		timeout: number
	) {
		this.dimissible = dimissible
		this.isOpen = isOpen
		this.type = type
		this.message = message
		this.timeout = timeout
	}
}
