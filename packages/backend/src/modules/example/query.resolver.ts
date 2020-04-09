import { Args, ArgsType, Field, Query, Resolver } from 'type-graphql';
import { getRepository } from 'typeorm';

import DBExample from '../../entities/example';

import GQLExample from './example';

@ArgsType()
class ExamplesArgs {
	@Field()
	from: Date;

	@Field({ nullable: true })
	to?: Date;
}

@Resolver(GQLExample)
class ExampleQueryResolver {
	@Query(() => [GQLExample])
	async examples(@Args() { from, to }: ExamplesArgs): Promise<GQLExample[]> {
		const exampleRepository = getRepository(DBExample);

		if (to) {
			const examples = await exampleRepository
				.createQueryBuilder('example')
				.where('example.timestamp > :from', { from })
				.andWhere('example.timestamp < :to', { to })
				.getMany();
			return examples;
		} else {
			return exampleRepository
				.createQueryBuilder('example')
				.where('example.timestamp > :from', { from })
				.getMany();
		}
	}
}

export default ExampleQueryResolver;
