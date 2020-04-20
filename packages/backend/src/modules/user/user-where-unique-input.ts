import { Field, InputType } from 'type-graphql';

@InputType()
export default class UserWhereUniqueInput {
	@Field()
	id: string;
}
