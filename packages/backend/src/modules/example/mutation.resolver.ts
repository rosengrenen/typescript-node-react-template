import { Resolver, Field, InputType, Float, Arg, Mutation } from 'type-graphql';
import { getRepository } from 'typeorm';

import DBExample from '../../entities/example';
import GQLExample from './example';

@InputType()
class CreateExampleInput {
	@Field()
	name: string;

	@Field(() => Float)
	ratio: number;
}

@Resolver(GQLExample)
class ExampleMutationResolver {
	@Mutation(() => GQLExample)
	async createExample(
		@Arg('input') { name, ratio }: CreateExampleInput,
	): Promise<GQLExample> {
		const exampleRepository = getRepository(DBExample);
		const example = await exampleRepository.save({
			name,
			ratio,
			timestamp: new Date(),
		});
		return example;
	}
}

export default ExampleMutationResolver;
