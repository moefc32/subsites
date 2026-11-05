<script>
    export let item;
</script>

<div class="flex flex-col" data-aos="fade-up">
    <a
        href={item.url}
        target="_blank"
        class="flex flex-col justify-end bg-cover! w-full aspect-3/2 border-1 border-gray-300 saturate-75 brightness-85 hover:saturate-100 hover:brightness-100 transition overflow-hidden shadow-lg"
        style="background: url({item.image}) center center no-repeat;"
        title={item.title}
    >
        <div
            class="px-4 py-5 bg-gradient-to-t from-black/75 via-black/15 via-[75%] to-transparent text-white text-lg truncate w-full overflow-hidden"
        >
            {item.title}
        </div>
    </a>
</div>
