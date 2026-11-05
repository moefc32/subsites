<script>
    import { File } from '@lucide/svelte';

    export let publication;
    export let dataLoading;
</script>

<div class="flex flex-1 flex-col gap-6">
    <h2 class="pb-2 text-lg border-b border-gray-300">
        Scientific Publications
    </h2>
    <div class="flex flex-col gap-4 lg:max-h-80 overflow-y-auto">
        {#if !dataLoading}
            {#each publication as item, i}
                <a href={item.url} target="_blank" class="flex">
                    <div class="px-3 pt-1">
                        <File size={18} />
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <div class="text-lg line-clamp-2 w-full">
                            {item.title}
                        </div>
                        <div class="flex items-start gap-2">
                            <span
                                class="badge badge-sm badge-warning font-semibold"
                            >
                                {item.year}
                            </span>
                            {#if item.journal}
                                <span class="text-gray-500 text-sm">
                                    {item.journal}
                                </span>
                            {/if}
                        </div>
                    </div>
                </a>
            {/each}
        {:else}
            {#each Array(5) as _, i}
                <div class="bg-gray-200 skeleton">
                    <div class="h-20 border-1 border-gray-300 shadow-lg"></div>
                </div>
            {/each}
        {/if}
    </div>
</div>
