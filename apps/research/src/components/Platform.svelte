<script>
    export let platform;
    export let dataLoading;
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<div class="flex flex-col gap-6 w-full">
    <h2 class="pb-2 text-lg border-b border-gray-300">
        Research Portfolio Platforms
    </h2>
    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-3"
    >
        {#if !dataLoading}
            {#each platform as item, i}
                <div data-aos="fade-up">
                    <a
                        href={item.url}
                        target="_blank"
                        class="flex flex-col gap-4 p-4 hover:bg-gray-100 w-full border-1 border-gray-300 transition shadow-lg"
                        title="Click to open {item.name}"
                    >
                        <div
                            class="bg-contain bg-center bg-no-repeat aspect-12/1 sm:aspect-14/1 md:aspect-10/1 lg:aspect-9/1"
                            style="background-image: url(/res/platform/{item.class}.webp);"
                        ></div>
                    </a>
                </div>
            {/each}
        {:else}
            {#each Array(5) as _, i}
                <div class="bg-gray-200 skeleton">
                    <div class="p-4 border-1 border-gray-300 shadow-lg">
                        <div
                            class="aspect-12/1 sm:aspect-14/1 md:aspect-10/1 lg:aspect-9/1"
                        ></div>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</div>
