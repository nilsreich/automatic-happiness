<script lang="ts">
	export let data;
	import { Player, Vimeo } from '@vime/svelte';

	import { onMount } from 'svelte';
	let imageURL: string[] = [];

	onMount(async () => {
		data.item.images.map(async (i) => {
			const url = `../../../lib/assets/${i}`;
			const imageModule = await import(/* @vite-ignore */ `${url}.png?w=900&webp`);
			imageURL = [...imageURL, imageModule.default];
		});
	});
</script>

<main class="p-8 grow max-w-4xl mx-auto">
		<div class="text-5xl my-8 font-medium font-raleway">{data.item.title}</div>

		<div class=" leading-8">{data.item.content}</div>
		<div class=" dark:bg-whiteA-whiteA3 bg-blackA-blackA3 my-6  py-3 flex-col gap-4 flex">
			<a href="#video" class="block  pl-4 text-sm">Video</a>
			<a href="#anleitung" class="block pl-4 text-sm">Anleitung</a>
		</div>
		<hr class="my-8 dark:bg-whiteA-whiteA3 bg-blackA-blackA3 h-px border-0" />

		<div id="video" class="text-3xl my-8 font-raleway">Video</div>
		<div>
			<Player controls>
				<Vimeo videoId="722159714?h=7191297300" />
			</Player>
		</div>
		<hr class="my-8 dark:bg-whiteA-whiteA3 bg-blackA-blackA3 h-px border-0" />

		<div id="anleitung" class="text-3xl my-6 font-raleway">Anleitung</div>
		<div>
			{#each imageURL as i}
				<img srcset={i} type="image/webp" alt="testattribute" loading="lazy" class="my-8 w-full" />
			{/each}
		</div>
</main>
