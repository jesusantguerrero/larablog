<template>
<div class="flex flex-col text-left">
    <h4 class="text-emerald-500 font-bold"> {{ comment.user_name }}</h4>
    <p class="mt-0">
        {{ comment.text }}
    </p>
    <button v-if="allowReply" class="text-emerald-500 px-5 py-1 rounded-md inline-block" @click="toggleCommentBox">
        Reply
    </button>
    <CommentBox
        v-if="showCommentBox"
        :level="comment.level + 1"
        :parentId="comment.id"
        @submit="onSubmit"
    />
    <CommentList
        v-if="comment.replies"
        :style="marginStyle"
        :comments="comment.replies"
        @reply="$emit('reply', $event)"
    />
</div>
</template>

<script>
import CommentBox from "./CommentBox.vue";
import CommentList from "./CommentList.vue";

export default {
    name: "CommentItem",
    components: {
        CommentBox,
        CommentList,
    },
    props: {
        comment: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            showCommentBox: false,
            maxLevel: 2,
        };
    },
    computed: {
        allowReply() {
            return this.comment.level < this.maxLevel;
        },
        marginStyle() {
            return {
                marginLeft: `${(this.comment.level + 1)  * 20}px`,
            };
        },
    },
    methods: {
        onSubmit(comment) {
            this.$emit("reply", comment);
        },
        toggleCommentBox() {
            this.showCommentBox = !this.showCommentBox;
        },
    },
}
</script>
