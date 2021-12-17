<template>
<div class="w-full">
    <AppHeader class="max-w-6xl mx-auto px-8 md:px-0" />
    <article class="max-w-6xl mx-auto text-gray-700 px-8 md:px-0">
        <section class="mt-16 space-y-5 ">
            <h2 class="text-4xl font-bold"> Post Title</h2>
            <div class="flex md:flex-row flex-col text-gray-400 md:space-x-3">
                <span class="font-bold">{{ metadata.date}}</span>
                <span>{{ metadata.autorName }}</span>
                <div class="space-x-1">
                    <span v-for="tag in metadata.tags" class="cursor-pointer text-emerald-500 font-bold hover:text-emerald-400">
                        #{{ tag }}
                    </span>
                </div>
            </div>

            <p class="mt-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit non semper, risus pulvinar odio felis montes maecenas auctor sollicitudin in suscipit, nullam lacus sed ligula nam massa pharetra magna. Odio molestie felis enim egestas feugiat taciti quisque tellus purus, ullamcorper ultricies vivamus mus lobortis sociis himenaeos dictumst, libero aptent commodo magnis justo vestibulum eget fusce. Facilisis natoque dis nisi placerat himenaeos taciti fermentum penatibus quam ornare congue inceptos nam purus nascetur, laoreet in eget pellentesque orci diam ad fringilla vitae magna montes sociis commodo eleifend.
            </p>

            <p>
                Pellentesque bibendum habitant mattis purus morbi, nostra mus neque ultrices, facilisis inceptos himenaeos imperdiet. Vulputate vel convallis laoreet dui natoque habitant, placerat ornare ridiculus magnis molestie tempus faucibus, tristique a dignissim lobortis tincidunt. Condimentum est ultricies neque volutpat cum urna lectus eros aliquam integer aptent, rutrum in donec purus mus habitant ridiculus lacinia ante habitasse massa porta, a dictumst laoreet quis diam dictum venenatis lacus convallis egestas.
            </p>

            <p>
                Pellentesque bibendum habitant mattis purus morbi, nostra mus neque ultrices, facilisis inceptos himenaeos imperdiet. Vulputate vel convallis laoreet dui natoque habitant, placerat ornare ridiculus magnis molestie tempus faucibus, tristique a dignissim lobortis tincidunt. Condimentum est ultricies neque volutpat cum urna lectus eros aliquam integer aptent, rutrum in donec purus mus habitant ridiculus lacinia ante habitasse massa porta, a dictumst laoreet quis diam dictum venenatis lacus convallis egestas.
            </p>
        </section>

        <section class="mt-8 py-4 border-t border-gray-100">
            <h4 class="font-bold text-emerald-500 text-xl">Comments ({{ comments.length }})</h4>
            <CommentBox class="mt-4" @submitted="fetchComments" />

            <div class="mb-32 mt-8 divide-y-2 divide-gray-50">
                <CommentItem
                    :key="comment.id"
                    v-for="comment in comments"
                    :comment="comment"
                    @replied="fetchComments"
                />
            </div>
        </section>
    </article>
</div>

</template>

<script>
import AppHeader from "./AppHeader.vue";
import CommentBox from "./CommentBox.vue";
import CommentItem from "./CommentItem.vue";

export default {
    name: "App",
    components: {
        AppHeader,
        CommentBox,
    },
    data() {
        return {
            metadata: {
                date: "2020-01-01",
                autorName: "John Doe",
                tags: ["vue", "laravel", "php"],
            },
            comments: [],
        };
    },
    methods: {
        fetchComments() {
            fetch("/api/comments").then((res) => res.json()).then(response => {
                this.comments = response;
            });
        },
    },
    async mounted() {
        await this.fetchComments();
    },
    components: { AppHeader, CommentBox, CommentItem }
}

</script>
