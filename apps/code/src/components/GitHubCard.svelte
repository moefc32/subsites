<script>
    import { GitCommitHorizontal } from '@lucide/svelte';
    export let item;
</script>

<div class="flex flex-col gap-3" data-aos="fade-up">
    <a
        href={item.url}
        target="_blank"
        class="flex flex-row gap-3 p-4 w-full hover:bg-gray-100 border-1 border-gray-300 transition shadow-lg relative"
    >
        <GitCommitHorizontal size={28} />
        <div class="flex flex-1 flex-col overflow-hidden">
            <div class="text-lg">{item.title}</div>
            <div class="flex flex-col gap-1 mt-2 mb-4">
                <div class="truncate">{item.description}</div>
                <div class="text-blue-500 text-sm truncate">
                    {item.url}
                </div>
            </div>
            <span class="badge badge-sm bg-green-700 text-white font-semibold">
                {item.language || 'Other'}
            </span>
        </div>
    </a>
</div>
