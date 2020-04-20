import { Column, Entity } from 'typeorm';

import BaseEntity from './base-entity';

@Entity()
export default class User extends BaseEntity {
	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column({ nullable: true })
	googleId?: string;

	@Column({ nullable: true })
	githubId?: string;

	@Column({ nullable: true })
	twitterId?: string;

	@Column({ nullable: true })
	facebookId?: string;
}
