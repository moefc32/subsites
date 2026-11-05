<script>
    export let education;
    export let dataLoading;
</script>

<div class="flex flex-1 flex-col gap-6">
    <h2 class="pb-2 text-lg border-b border-gray-300">
        Educational Background
    </h2>
    <div class="flex flex-col gap-4">
        {#if !dataLoading}
            {#each education as item, i}
                <div
                    class="card flex gap-4 p-4 w-full border-1 border-gray-300 shadow-lg"
                    data-aos="fade-up"
                >
                    <div class="flex flex-col gap-1">
                        <span class="text-xl truncate w-full">
                            {item.title}
                        </span>
                        <span class="text-gray-500 truncate w-full">
                            {item.department}, {item.university}
                        </span>
                    </div>
                    <span
                        class="badge badge-sm badge-success text-white font-semibold"
                    >
                        {item.startYear} - {item.endYear}
                    </span>
                </div>
            {/each}
        {:else}
            {#each Array(2) as _, i}
                <div class="bg-gray-200 skeleton">
                    <div
                        class="card h-[126px] border-1 border-gray-300 shadow-lg"
                    ></div>
                </div>
            {/each}
        {/if}
    </div>
</div>
