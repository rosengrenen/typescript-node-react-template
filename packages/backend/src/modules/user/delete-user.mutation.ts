import { Arg, Field, Mutation, ObjectType, Resolver } from 'type-graphql';
import { getRepository } from 'typeorm';

import DBUser from '../../entities/user';

import UserWhereUniqueInput from './user-where-unique-input';

@ObjectType()
class DeleteUserPayload {
	@Field()
	success: boolean;
}

@Resolver()
export default class DeleteUserMutationResolver {
	@Mutation(() => DeleteUserPayload)
	async deleteUser(@Arg('where') { id }: UserWhereUniqueInput): Promise<DeleteUserPayload> {
		const userRepository = getRepository(DBUser);
		await userRepository.delete(id);

		return {
			success: true,
		};
	}
}
