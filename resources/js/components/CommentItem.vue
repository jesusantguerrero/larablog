<template>
<div class="flex flex-col text-left py-5">
    <div class="flex flex-col md:flex-row md:justify-between">
        <div class="comment_profile flex items-center space-x-2">
            <div class="h-8 w-8 text-gray-400 font-bold capitalize rounded-full flex items-center justify-center bg-gray-100 border border-gray-400">
                {{comment.user_name[0] }}
            </div>
            <h4 class="text-emerald-500 font-bold"> {{ comment.user_name }}</h4>
        </div>
        <div class="text-gray-400">
            {{ formattedDate }}
        </div>
    </div>
    <p class="mt-0 pl-10">
        {{ comment.text }}
    </p>

   <div class="px-5">
        <button v-if="allowReply" class="text-emerald-500 hover:bg-gray-100 rounded-md transition px-5 py-1 rounded-md inline-block" @click="toggleCommentBox">
            Reply
        </button>
   </div>

    <div :style="marginStyle">
        <CommentBox
            v-if="showCommentBox"
            :level="comment.level + 1"
            :parentId="comment.id"
            @submitted="onSubmit"
            @discard="toggleCommentBox"
        />
        <CommentList
            v-if="comment.replies"
            :comments="comment.replies"
            @replied="onSubmit"
        />
    </div>
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
            maxLevel: 3,
        };
    },
    computed: {
        allowReply() {
            return this.comment.level < this.maxLevel;
        },
        marginStyle() {
            return {
                marginLeft: `${(this.comment.level + 1)  * 8}px`,
            };
        },
        formattedDate() {
            return new Date(this.comment.created_at).toLocaleString();
        }
    },
    methods: {
        onSubmit(comment) {
            this.$emit("replied", comment);
            this.showCommentBox = false;
        },
        toggleCommentBox() {
            this.showCommentBox = !this.showCommentBox;
        },
    },
}
</script>
