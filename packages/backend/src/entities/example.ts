import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Example {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column('float')
	ratio: number;

	@Column()
	timestamp: Date;
}

export default Example;
