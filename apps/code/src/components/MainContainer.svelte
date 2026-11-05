<script>
    import { onMount, onDestroy } from 'svelte';
    import { Toaster, toast } from 'svelte-sonner';
    import * as echarts from 'echarts';
    import AOS from 'aos';
    import ky from 'ky';

    import resetCurrentPage from '../lib/stores/resetCurrentPage';

    import Banner from './Banner.svelte';
    import DomainNode from './DomainNode.svelte';
    import Membership from './Membership.svelte';
    import Statistics from './Statistics.svelte';
    import GitHubCard from './GitHubCard.svelte';
    import Pagination from './Pagination.svelte';

    let dataLoading = true;
    let chartCanvas = '';
    let techStacks = [];
    let techLanguages = {};
    let discord = [];
    let github = {};
    let pageItems = [];
    let currentPage = null;
    let pageSize = parseInt(import.meta.env.PUBLIC_GITHUB_ITEMS || '12', 10);
    let chart;

    function handleResize() {
        if (chart) chart.resize();
    }

    function getTotalPages() {
        return Math.ceil(github.repos?.length / pageSize);
    }

    function navigate(page, scroll = true) {
        if (page !== currentPage && page >= 1 && page <= getTotalPages()) {
            const urlParams = new URLSearchParams(window.location.search);

            currentPage = page;
            if (currentPage > 1) {
                urlParams.set('page', currentPage);
            } else {
                urlParams.delete('page');
            }

            const newUrl =
                urlParams.toString().length > 0
                    ? `?${urlParams.toString()}`
                    : window.location.pathname;
            history.replaceState(null, '', newUrl);

            if (scroll) {
                setTimeout(() => {
                    const container =
                        document.getElementById('github-container');

                    if (container) {
                        const offset = 100;
                        const top = Math.max(
                            0,
                            window.scrollY +
                                container.getBoundingClientRect().top -
                                offset,
                        );

                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }, 10);
            }
        }
    }

    onMount(async () => {
        AOS.init();

        try {
            const { data } = await ky
                .get(import.meta.env.PUBLIC_BACKEND, {
                    timeout: 30 * 1000,
                })
                .json();

            techStacks = data.techStacks;
            techLanguages = data.techLanguages;
            discord = data.discord;
            github = data.github;
            dataLoading = false;

            const urlParams = new URLSearchParams(window.location.search);
            const pageFromUrl = parseInt(urlParams.get('page'));

            if (
                pageFromUrl &&
                pageFromUrl > 1 &&
                pageFromUrl <= getTotalPages()
            ) {
                currentPage = pageFromUrl;
            } else {
                currentPage = 1;
                urlParams.delete('page');

                const queryString = urlParams.toString();
                const suffix = queryString ? `?${queryString}` : '';

                history.replaceState(
                    null,
                    '',
                    window.location.pathname + suffix,
                );
            }

            chart = echarts.init(chartCanvas);
            chart.setOption({
                responsive: true,
                grid: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    containLabel: false,
                },
                tooltip: {
                    show: true,
                },
                xAxis: {
                    type: 'category',
                    data: techLanguages.labels,
                },
                yAxis: {
                    type: 'value',
                    axisTick: { show: false },
                    axisLine: { show: false },
                    axisLabel: { show: false },
                    splitLine: { show: false },
                },
                series: [
                    {
                        type: 'bar',
                        data: techLanguages.counts,
                        itemStyle: {
                            color: params =>
                                techLanguages.colors[params.dataIndex],
                        },
                        barWidth: '60%',
                    },
                ],
            });

            window.addEventListener('resize', handleResize);
        } catch (e) {
            console.error(e);
            toast.error('Cannot fetch data, please try again later!');
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined')
            window.removeEventListener('resize', handleResize);
        if (chart) chart.dispose();
    });

    $: {
        if ($resetCurrentPage === true && github.repos?.length) {
            navigate(1, false);
            resetCurrentPage.set(null);
        }

        pageItems = github.repos?.length
            ? github.repos?.slice(
                  (currentPage - 1) * pageSize,
                  (currentPage - 1) * pageSize + pageSize,
              )
            : [];
    }
</script>

<Banner />

<main class="flex flex-1 flex-col gap-9 mx-12 my-6">
    <div class="flex flex-col items-center gap-4 mx-12">
        <div class="flex flex-wrap justify-center gap-0.5 mb-3 max-w-140">
            {#if !dataLoading}
                {#each techStacks as item, i}
                    <span
                        class="badge {item.dark ? 'text-black' : 'text-white'}"
                        style="background: {item.color};"
                    >
                        {item.name}
                    </span>
                {/each}
            {:else}
                {#each Array(12) as _, i}
                    <span
                        class="badge bg-gray-200 w-24 border-1 border-gray-300 skeleton"
                    >
                        &nbsp;
                    </span>
                {/each}
            {/if}
        </div>
    </div>
    <Statistics bind:chartCanvas {github} {dataLoading} />
    <Membership {discord} {dataLoading} />
    <div id="github-container" class="flex flex-col gap-6 w-full">
        <h2 class="pb-2 text-lg border-b border-gray-300">
            Project Repositories
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {#if !dataLoading}
                {#if pageItems.length}
                    {#each pageItems as item, i}
                        <GitHubCard {item} />
                    {/each}
                {:else if currentPage !== null}
                    <div class="col-span-full py-24 text-gray-500 text-center">
                        - No repository found -
                    </div>
                {/if}
            {:else}
                {#each Array(pageSize) as _, i}
                    <div class="bg-gray-200 skeleton">
                        <div
                            class="h-[154px] border-1 border-gray-300 shadow-lg"
                        ></div>
                    </div>
                {/each}
            {/if}
        </div>
        {#if pageItems.length}
            <Pagination {currentPage} {getTotalPages} {navigate} />
        {/if}
    </div>
    <DomainNode base={'code'} nodes={['research', 'design']} />
</main>

<Toaster
    richColors
    theme="system"
    position="bottom-center"
    toastOptions={{
        style: 'font-size: 1rem;',
    }}
/>
