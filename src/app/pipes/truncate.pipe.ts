import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
	transform(value: string, length: number): unknown {
		return (value && value.length) > length
			? value.slice(0, length - 3) + '...'
			: value
	}
}
