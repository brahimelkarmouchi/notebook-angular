import { Tag } from './tag'

export interface Note {
	id: number
	title: string
	body: string
	user_id: number
	is_pinned: boolean
	deleted_at: Date
	created_at: Date
	updated_at: Date
	tags: Tag[]
}
