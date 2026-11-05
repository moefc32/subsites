<script>
    import { owner } from '../lib/config';
</script>

<section
    class="mb-5 px-3 pt-30 pb-5 bg-[linear-gradient(to_bottom_left,rgba(33,150,243,0.75),rgba(76,175,80,0.75))] bg-fixed text-white text-center h-80"
></section>

<div
    class="flex flex-col items-center gap-4 -mt-21 px-12 bg-white rounded-t-3xl"
>
    <div class="avatar -mt-32">
        <div class="w-44 border-white border-4 rounded-full">
            <img src={owner.displayPicture} alt={owner.displayName} />
        </div>
    </div>
    <div class="flex flex-col items-center gap-2">
        <div class="text-3xl">{owner.displayName}</div>
        <div class="text-gray-600 text-center">
            <p class="mb-2 text-lg italic">{owner.introduction}</p>
            <p class="text-sm">
                <a
                    href="/philosophy-and-approach"
                    class="text-blue-500 hover:text-green-500 underline transition"
                >
                    Learn more...
                </a>
            </p>
        </div>
    </div>
    <hr class="mt-1 mb-6 bg-gray-300 w-12 h-1 border-0" />
</div>
