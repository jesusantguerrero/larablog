<template>
<div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
    <div class="text-white">
        Lorem ipsum dolor sit amet consectetur adipiscing elit non semper, risus pulvinar odio felis montes maecenas auctor sollicitudin in suscipit, nullam lacus sed ligula nam massa pharetra magna. Odio molestie felis enim egestas feugiat taciti quisque tellus purus, ullamcorper ultricies vivamus mus lobortis sociis himenaeos dictumst, libero aptent commodo magnis justo vestibulum eget fusce. Facilisis natoque dis nisi placerat himenaeos taciti fermentum penatibus quam ornare congue inceptos nam purus nascetur, laoreet in eget pellentesque orci diam ad fringilla vitae magna montes sociis commodo eleifend.

Pellentesque bibendum habitant mattis purus morbi, nostra mus neque ultrices, facilisis inceptos himenaeos imperdiet. Vulputate vel convallis laoreet dui natoque habitant, placerat ornare ridiculus magnis molestie tempus faucibus, tristique a dignissim lobortis tincidunt. Condimentum est ultricies neque volutpat cum urna lectus eros aliquam integer aptent, rutrum in donec purus mus habitant ridiculus lacinia ante habitasse massa porta, a dictumst laoreet quis diam dictum venenatis lacus convallis egestas.

    </div>
</div>

</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            comments: [],
        }
    },
    methods: {
        fetchComments() {
            fetch('/api/comments').then((res) => res.json()).then(response => {
                this.comments = response;
            })
        }
    },
    async mounted() {
        await this.fetchComments();
    }
}

</script>
