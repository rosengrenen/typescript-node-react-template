import { Field, Float, ID, ObjectType } from 'type-graphql';

@ObjectType()
class Example {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field(() => Float)
	ratio: number;

	@Field()
	timestamp: Date;
}

export default Example;
