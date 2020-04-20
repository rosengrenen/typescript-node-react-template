import { Arg, Field, InputType, Mutation, ObjectType, Resolver } from 'type-graphql';
import { getRepository } from 'typeorm';

import DBUser from '../../entities/user';
import removeUndefinedFields from '../../utils/remove-undefined-fields';

import GQLUser from './user';
import UserWhereUniqueInput from './user-where-unique-input';

@ObjectType()
class UpdateUserPayload {
	@Field()
	user: GQLUser;
}

@InputType()
class UpdateUserInput {
	@Field(() => String, { nullable: true })
	name?: string;

	@Field(() => String, { nullable: true })
	email?: string;

	@Field(() => String, { nullable: true })
	password?: string;
}

@Resolver()
export default class UpdateUserMutationResolver {
	@Mutation(() => UpdateUserPayload)
	async updateUser(
		@Arg('where') { id }: UserWhereUniqueInput,
		@Arg('data') { name, email, password }: UpdateUserInput,
	): Promise<UpdateUserPayload> {
		const userRepository = getRepository(DBUser);
		await userRepository.update(
			id,
			removeUndefinedFields({
				name,
				email,
				password,
			}),
		);

		const user = await userRepository.findOne(id);
		if (!user) {
			throw new Error('User not found');
		}

		return { user };
	}
}
