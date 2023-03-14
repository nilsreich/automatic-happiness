<script lang="ts">
	import '../app.css';
	import { scratch } from '$lib/data.json';
	import { page } from '$app/stores';
	let path: any;

	$: path = $page.url.pathname;
</script>

<!--Svelte head import css link-->
<svelte:head>
	<!-- Default theme. ~960B -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css" />

	<!-- Optional light theme (extends default). ~400B -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/light.css"
	/></svelte:head
>

<div
	class="font-inter bg-whiteA-whiteA12 dark:bg-blackA-blackA12 dark:text-whiteA-whiteA12 text-blackA-blackA11"
>
	<section class="flex">
		<nav
			class="relative hidden grow p-1 lg:block pt-4 dark:bg-whiteA-whiteA3 bg-blackA-blackA3 px-6 min-w-[16rem] max-w-[20rem]"
		>
			<div class="fixed">
				<div class="py-2 text-sm dark:text-whiteA-whiteA10 font-medium text-blackA-blackA10">
					Scratch Tutorials
				</div>
				{#each scratch as item}
					<a
						href="/scratch/{item.title}"
						class={`${
							path.includes(item.title) ? 'font-medium text-tealA-tealA10' : ''
						} block py-2 font-raleway`}>{item.title}</a
					>
				{/each}
				<a href="/scratch/" class="flex justify-between items-center py-2 font-raleway"
					>Pong<span class="text-tealA-tealA10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
							/>
						</svg>
					</span></a
				>
				<hr class="my-6 dark:bg-whiteA-whiteA5 bg-blackA-blackA5 h-px border-0" />
			</div>
		</nav>
		<slot />
	</section>
</div>
