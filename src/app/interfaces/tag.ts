import { Note } from './note'

export interface Tag {
	id: bigint
	title: string
	notes: Note[]
}
