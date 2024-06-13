<script lang="ts">
import Users from "../lib/components/Users.svelte";
import { createUsers } from "../lib/users.svelte.ts";

const state = createUsers();

function handleSubmit(event: SubmitEvent) {
	const target = event.target as HTMLFormElement;

	if (!target) {
		return;
	}

	let items = target.elements.namedItem("name") as RadioNodeList;

	if (!items?.length) {
		return;
	}

	let fullName = Array.from(items)
		.map((node) => {
			let item = node as HTMLInputElement;
			const value = item.value;
			item.value = "";
			return value;
		})
		.join(" ");

	state.addUser(fullName);
}
</script>

<div class="container">
	<form on:submit|preventDefault={handleSubmit}>
		<input required id="first-name" name="name" placeHolder="First name..." />
		<input id="last-name" name="name" placeHolder="Last name..." />
		<button type="submit">Add User</button>
	</form>

	<Users users={state.users} />
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		gap: 1.5rem;

		width: 100dvw;

		padding: 1.5rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 16px;

		width: 25vw;
	}

	form input {
		height: 1.5rem;

		padding: 0 0.25rem;

		border-radius: 0.25rem;
		border-width: 1px;
	}
	form button {
		border: none;
		border-radius: 0.5rem;

		padding: 0.5rem 1rem;

		background-color: black;
		color: white;
	}
</style>