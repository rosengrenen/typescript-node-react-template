import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import BaseEntity from './base-entity';

@Entity()
export default class Example extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;
}
