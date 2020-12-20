import {
	Component,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
} from '@angular/core'
import { EventEmitter } from '@angular/core'
import { Alert } from 'src/app/classes/alert'

@Component({
	selector: 'app-feedback-alert',
	templateUrl: './feedback-alert.component.html',
	styleUrls: ['./feedback-alert.component.scss'],
})
export class FeedbackAlertComponent implements OnChanges {
	@Input() alert: Alert

	@Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>()
	constructor() {}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes)
		if (
			!changes.alert.firstChange &&
			this.alert.timeout &&
			changes.alert.currentValue.timeout !=
				changes.alert.previousValue.timeout
		) {
			setTimeout(() => {
				this.closed.emit(false)
			}, this.alert.timeout)
		}
	}
}
