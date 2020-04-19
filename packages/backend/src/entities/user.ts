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

	@Column()
	googleId: string;

	@Column()
	githubId: string;

	@Column()
	twitterId: string;

	@Column()
	facebookId: string;
}
