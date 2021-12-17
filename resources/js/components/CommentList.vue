<template>
<div class="flex flex-col text-left">
    <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        @replied="$emit('replied', $event)"
    />
</div>
</template>

<script>
export default {
    name: "CommentList",
    components: {
        CommentItem: () => import("./CommentItem.vue"),
    },
    props: {
        comments: {
            type: Array,
            default: () => ([])
        }
    }
}
</script>
