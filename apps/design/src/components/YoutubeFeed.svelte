<script>
    export let youtube;
    export let dataLoading;
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
{#if !dataLoading && youtube?.videos.length}
    <div class="flex flex-1 flex-col gap-6 px-12 py-12 bg-black/75">
        <div class="flex flex-col lg:flex-row gap-6 w-full">
            {#if !dataLoading}
                <a
                    href={youtube?.videos[0]?.url}
                    target="_blank"
                    class="block w-full lg:w-2/3 overflow-hidden"
                    title={youtube?.videos[0]?.title}
                >
                    <div
                        class="bg-cover! aspect-video rounded-sm"
                        style="background: url({youtube?.videos[0]
                            ?.image}) center center no-repeat, #e5e7eb;"
                    ></div>
                    <div
                        class="card flex-row items-center gap-2 mx-6 -mt-8 px-5 bg-white text-xl h-15"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-7 h-7"
                            fill="#ff0000"
                            ><path
                                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                            />
                        </svg>
                        <span class="truncate">
                            {youtube?.videos[0]?.title}
                        </span>
                    </div>
                </a>
            {:else}
                <div class="w-full lg:w-2/3">
                    <div
                        class="bg-gray-200 aspect-video rounded-sm skeleton"
                    ></div>
                    <div
                        class="card flex-row items-center gap-2 mx-6 -mt-8 px-5 bg-white text-xl h-15"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-7 h-7"
                            fill="#ff0000"
                            ><path
                                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                            />
                        </svg>
                        <span class="truncate text-black/75">
                            Loading video info, please wait...
                        </span>
                    </div>
                </div>
            {/if}
            <div class="hidden lg:flex flex-1 flex-col justify-between gap-4">
                {#if !dataLoading}
                    {#each youtube?.videos as item, i}
                        {#if i > 0}
                            <div
                                class="flex flex-1 gap-3 w-full"
                                title={item.title}
                            >
                                <a
                                    href={item.url}
                                    target="_blank"
                                    class="block bg-cover! h-full aspect-video rounded-sm"
                                    style="background: url({item.image}) center center no-repeat, #e5e7eb;"
                                ></a>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    class="block flex-1 text-white xl:text-lg line-clamp-3 h-[4.5em] overflow-hidden"
                                >
                                    {item.title}
                                </a>
                            </div>
                        {/if}
                    {/each}
                {:else}
                    {#each Array(5) as _, i}
                        <div class="flex flex-1 gap-3 w-full">
                            <div
                                class="bg-gray-200 h-full aspect-video rounded-sm skeleton"
                            ></div>
                            <div
                                class="flex-1 text-white/75 xl:text-lg line-clamp-3 h-[4.5em] overflow-hidden"
                            >
                                Loading...
                            </div>
                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
{/if}
