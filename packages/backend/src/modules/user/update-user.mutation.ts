import { Arg, Field, InputType, Mutation, ObjectType, Resolver } from 'type-graphql';
import { getRepository } from 'typeorm';

import DBUser from '../../entities/user';

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

		if (email) {
			const user = await userRepository.findOne(undefined, {
				where: {
					email,
				},
			});
			if (user && user.id !== id) {
				throw new Error('A user with that email already exists');
			}
		}

		let user = await userRepository.findOne(id);
		if (!user) {
			throw new Error('User not found');
		}

		if (name) {
			user.name = name;
		}

		if (email) {
			user.email = email;
		}

		if (password) {
			user.password = password;
		}

		user = await userRepository.save(user);

		return { user };
	}
}
