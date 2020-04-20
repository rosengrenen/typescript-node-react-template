export default function removeUndefinedFields(obj: Record<string, any>): Record<string, any> {
	const newObj: Record<string, any> = {};

	Object.keys(obj).forEach(key => {
		if (obj[key] !== undefined) {
			newObj[key] = obj[key];
		}
	});

	return newObj;
}
