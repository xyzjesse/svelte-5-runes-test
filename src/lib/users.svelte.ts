export function createUsers() {
	const users = $state(new Array<string>());

	return {
		get users() {
			return users;
		},
		addUser: (name: string) => {
			if (!name.length) {
				return;
			}
			users.push(name);
		},
	};
}
