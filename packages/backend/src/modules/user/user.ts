import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class User {
	@Field()
	name: string;

	@Field()
	email: string;

	@Field()
	password: string;
}
