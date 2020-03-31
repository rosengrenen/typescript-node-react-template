import { Resolver, Query, Field, InputType, Float, Arg } from 'type-graphql';

import Example from './example';

@InputType()
class CreateExampleInput {
	@Field()
	name: string;

	@Field(() => Float)
	ratio: number;
}

@Resolver(Example)
class ExampleMutationResolver {
	@Query(() => Example)
	createExample(@Arg('input') { name, ratio }: CreateExampleInput): Example {
		if (name === ratio.toString()) {
			throw new Error();
		}

		return {
			id: 'abc',
			name: 'Example name',
			ratio: 0.75,
			timestamp: new Date(),
		};
	}
}

export default ExampleMutationResolver;
