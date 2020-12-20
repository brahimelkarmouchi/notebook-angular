import { Note } from './note'

export interface Tag {
	id: number
	title: string
	notes: Note[]
}
