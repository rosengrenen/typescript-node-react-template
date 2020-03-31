import { Resolver, Query, Field, ArgsType, Args } from 'type-graphql';

import Example from './example';

@ArgsType()
class ExamplesArgs {
	@Field()
	from: Date;

	@Field({ nullable: true })
	to: Date;
}

@Resolver(Example)
class ExampleQueryResolver {
	@Query(() => [Example])
	examples(@Args() { from, to }: ExamplesArgs): Example[] {
		if (from > to) {
			throw new Error('From must not be greater than to');
		}
		return [
			{
				id: 'abc',
				name: 'Example name',
				ratio: 0.75,
				timestamp: new Date(),
			},
		];
	}
}

export default ExampleQueryResolver;
