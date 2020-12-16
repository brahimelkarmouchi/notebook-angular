import { Tag } from './tag'

export interface Note {
	id: bigint
	title: string
	body: string
	user_id: bigint
	deleted_at: Date
	created_at: Date
	updated_at: Date
	tag: Tag
}
