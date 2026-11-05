<script>
    import { onMount } from 'svelte';
    import { Toaster, toast } from 'svelte-sonner';
    import AOS from 'aos';
    import ky from 'ky';
    import datePrettier from '../lib/datePrettier';

    import Banner from './Banner.svelte';
    import DomainNode from './DomainNode.svelte';
    import Education from './Education.svelte';
    import Publication from './Publication.svelte';
    import Platform from './Platform.svelte';

    let dataLoading = true;
    let education = [];
    let publication = [];
    let platform = [];

    onMount(async () => {
        AOS.init();

        try {
            const { data } = await ky
                .get(import.meta.env.PUBLIC_BACKEND, {
                    timeout: 30 * 1000,
                })
                .json();

            education = data.education;
            publication = data.publication;
            platform = data.platform;
            dataLoading = false;
        } catch (e) {
            console.error(e);
            toast.error('Cannot fetch data, please try again later!');
        }
    });
</script>

<Banner />

<main class="flex flex-1 flex-col gap-9 mx-12 my-6">
    <div class="flex flex-1 flex-col lg:flex-row gap-9">
        <Education {education} {dataLoading} />
        <Publication {publication} {dataLoading} />
    </div>
    <Platform {platform} {dataLoading} />
    <DomainNode base={'research'} nodes={['design', 'code']} />
</main>

<Toaster
    richColors
    theme="system"
    position="bottom-center"
    toastOptions={{
        style: 'font-size: 1rem;',
    }}
/>
