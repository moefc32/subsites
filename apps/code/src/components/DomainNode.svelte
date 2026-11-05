<script>
    export let base = '';
    export let nodes = [];

    const node = {
        code: {
            design: {
                label: 'See how structure guides what you see and use',
            },
            research: {
                label: 'See what drives the logic behind the build',
            },
            pretty: 'Code',
            icon: '/res/node/code.svg',
            link: 'https://code.mf-chan.com',
        },
        design: {
            code: {
                label: 'See how the idea holds up in real use',
            },
            research: {
                label: 'See what shapes the decisions behind them',
            },
            pretty: 'Design',
            icon: '/res/node/design.svg',
            link: 'https://design.mf-chan.com',
        },
        research: {
            code: {
                label: 'See how insights turn into something real',
            },
            design: {
                label: 'See how understanding takes shape',
            },
            pretty: 'Research',
            icon: '/res/node/research.svg',
            link: 'https://research.mf-chan.com',
        },
    };
</script>

<div class="flex flex-col lg:flex-row gap-3 lg:gap-6 mt-6">
    {#each nodes as item, i}
        <a
            href={node[item].link}
            class="card flex flex-1 flex-row items-center gap-4 px-6 py-4 min-h-24 hover:bg-gray-100 transition border-1 border-gray-300 rounded-2xl shadow-lg"
        >
            <div
                class="w-12 aspect-square"
                style="background: url({node[item]
                    .icon}) center center no-repeat; background-size: contain;"
            ></div>
            <div class="flex flex-col justify-center">
                <span class="text-lg font-semibold">
                    {node[base][item].label}
                </span>
                <span class="text-gray-500">
                    {node[item].pretty}
                </span>
            </div>
        </a>
    {/each}
</div>
