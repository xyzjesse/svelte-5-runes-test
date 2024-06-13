<script lang="ts">
type Props = { users: Array<string> }
let { users }: Props = $props()
</script>

<div>
	<h2>User List</h2>
	{#if users.length === 0}
		<p class="no-users">No users added yet</p>
	{:else if users.length > 0}
		<ul>
			{#each users as user}
				<li>{user}</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;

		width: 25dvw;
	}

	p.no-users {
		color: hsl(from black 0 0 50%)
	}

	h2, ul, p {
		margin: 0;
		padding: 0;
	}

	ul {
		list-style: none;
		text-align: center;
	}
</style>