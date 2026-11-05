<script>
    import { SquareArrowOutUpRight } from '@lucide/svelte';

    export let chartCanvas;
    export let github;
    export let dataLoading;
</script>

<div class="card flex-col gap-6 p-6 bg-black text-white w-full">
    <h2 class="pb-2 text-lg text-center border-b border-gray-300">
        Project Statistics
    </h2>
    <div class="flex flex-col md:flex-row gap-3 w-full">
        <div
            class="flex-1 p-6 bg-white w-full aspect-3/1 rounded-md {dataLoading
                ? 'skeleton'
                : ''}"
        >
            <div class="w-full h-full" bind:this={chartCanvas}></div>
        </div>
        <div
            class="flex flex-col justify-between gap-6 w-full md:w-1/2 lg:w-5/12 xl:w-1/3"
        >
            <img
                class="block w-full"
                src="https://github-readme-stats-eight-theta.vercel.app/api?username=moefc32&theme=onedark"
                alt="GitHub statistics"
            />
            {#if !dataLoading}
                <a href={github.url} target="_blank" class="btn btn-primary">
                    <SquareArrowOutUpRight size={14} />
                    View more on GitHub
                </a>
            {/if}
        </div>
    </div>
</div>
