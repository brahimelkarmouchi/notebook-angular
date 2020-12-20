import { Tag } from './tag'

export interface Note {
	id: number
	title: string
	body: string
	user_id: number
	deleted_at: Date
	created_at: Date
	updated_at: Date
	tag: Tag,
	tag_id: number
}
