import { Resolver, FieldResolver, Root, ResolverInterface } from 'type-graphql';

import Example from './example';

@Resolver(() => Example)
class ExampleResolver implements ResolverInterface<Example> {
	@FieldResolver()
	id(@Root() { id }: Example): string {
		return id + 'adding things to the id';
	}

	@FieldResolver()
	ratio(@Root() { ratio }: Example): number {
		return ratio * 1000;
	}
}

export default ExampleResolver;
