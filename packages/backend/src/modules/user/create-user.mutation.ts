import { Arg, Field, InputType, Mutation, ObjectType, Resolver } from 'type-graphql';
import { getRepository } from 'typeorm';

import DBUser from '../../entities/user';

import GQLUser from './user';

@InputType()
class CreateUserInput {
	@Field()
	name: string;

	@Field()
	email: string;

	@Field()
	password: string;
}

@ObjectType()
class CreateUserPayload {
	@Field()
	user: GQLUser;
}

@Resolver()
export default class CreateUserMutationResolver {
	@Mutation(() => CreateUserPayload)
	async createUser(
		@Arg('input') { name, email, password }: CreateUserInput,
	): Promise<CreateUserPayload> {
		const userRepository = getRepository(DBUser);
		let user = await userRepository.findOne(undefined, {
			where: {
				email,
			},
		});

		if (user) {
			throw new Error('A user with that email already exists');
		}

		user = userRepository.create({
			name,
			email,
			password,
		});

		user = await userRepository.save(user);

		return {
			user,
		};
	}
}
