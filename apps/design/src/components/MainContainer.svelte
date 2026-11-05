<script>
    import { onMount } from 'svelte';
    import { SquareArrowOutUpRight } from '@lucide/svelte';
    import { Toaster, toast } from 'svelte-sonner';
    import AOS from 'aos';
    import ky from 'ky';

    import Banner from './Banner.svelte';
    import DomainNode from './DomainNode.svelte';
    import YoutubeFeed from './YoutubeFeed.svelte';
    import ShowcaseCard from './ShowcaseCard.svelte';

    let dataLoading = true;
    let showcaseTab = 0;
    let behance = {};
    let dribbble = {};
    let youtube = {};

    onMount(async () => {
        AOS.init();

        try {
            const { data } = await ky
                .get(import.meta.env.PUBLIC_BACKEND, {
                    timeout: 30 * 1000,
                })
                .json();

            behance = data.behance;
            dribbble = data.dribbble;
            youtube = data.youtube;
            dataLoading = false;
        } catch (e) {
            console.error(e);
            toast.error('Cannot fetch data, please try again later!');
        }
    });
</script>

<Banner />

<YoutubeFeed {youtube} {dataLoading} />

<main class="flex flex-1 flex-col gap-9 mx-12 my-6">
    <div class="flex flex-col gap-6 w-full">
        <div
            role="tablist"
            class="flex flex-row justify-center gap-1 p-px w-full"
        >
            <button
                role="tab"
                class="btn flex-1 font-normal {showcaseTab === 0 && !dataLoading
                    ? 'bg-[#1769ff] hover:bg-[#0051e5] text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-500 border-gray-300'} transition-all duration-250 ease-in-out w-full max-w-56 rounded-s-xl"
                disabled={dataLoading}
                on:click={() => (showcaseTab = 0)}
            >
                <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="currentColor"
                    ><path
                        d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z"
                    />
                </svg> Behance
            </button>
            <button
                role="tab"
                class="btn flex-1 font-normal {showcaseTab === 1 && !dataLoading
                    ? 'bg-[#ea4c89] hover:bg-[#e51f6c] text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-500 border-gray-300'} transition-all duration-250 ease-in-out w-full max-w-56 rounded-e-xl"
                disabled={dataLoading}
                on:click={() => (showcaseTab = 1)}
            >
                <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="currentColor"
                    ><path
                        d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"
                    />
                </svg> Dribbble
            </button>
        </div>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        >
            {#if !dataLoading}
                {#each showcaseTab === 0 ? behance?.projects : dribbble?.projects as item, i}
                    <ShowcaseCard {item} />
                {/each}
            {:else}
                {#each Array(6) as _, i}
                    <div class="bg-gray-200 skeleton">
                        <div
                            class="aspect-3/2 border-1 border-gray-300 shadow-lg"
                        ></div>
                    </div>
                {/each}
            {/if}
        </div>
        {#if (showcaseTab === 0 && behance?.url) || (showcaseTab === 1 && dribbble?.url)}
            <a
                href={showcaseTab === 0 ? behance.url : dribbble.url}
                target="_blank"
                class="btn btn-primary self-center"
            >
                <SquareArrowOutUpRight size={14} />
                View more on {showcaseTab === 0 ? 'Behance' : 'Dribbble'}
            </a>
        {/if}
    </div>
    <DomainNode base={'design'} nodes={['research', 'code']} />
</main>

<Toaster
    richColors
    theme="system"
    position="bottom-center"
    toastOptions={{
        style: 'font-size: 1rem;',
    }}
/>
