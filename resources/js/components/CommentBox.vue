<template>
<form @submit.prevent="onSubmit" class="flex flex-col space-y-3">
    <FormField
        label="Username"
        field="user_name"
        :errors="errors"
        v-model="comment.user_name"
    />
    <FormField
        label="Comment text"
        field="text"
        tag="textarea"
        :errors="errors"
        v-model="comment.text"
    />
    <div class="flex w-full space-x-2">
        <button 
            :disabled="isLoading"
            class="bg-emerald-500 transition-colors disabled:opacity-70 hover:bg-emerald-400 text-white px-5 py-1 rounded-md">
            {{ submitText }}
        </button>
        <button
            :disabled="isLoading" 
            @click.prevent="onDiscard" 
            class="bg-gray-500 transition-colors disabled:opacity-70 hover:bg-gray-400 text-white px-5 py-1 rounded-md">
            Discard
        </button>
    </div>
</form>
</template>

<script>
import FormField from "./FormField.vue";
export default {
    name: "CommentBox",
    components: {
        FormField,
    },
    props: {
        parentId: {
            type: Number,
        },
        level: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            comment: {
                user_name: "",
                text: "",
            },
            errors: {},
            isLoading: false,
        };
    },
    computed: {
        submitText() {
            return this.isLoading ? 'Submitting...' : 'Submit';
        }
    },
    methods: {
        validate(formData, requiredFields) {
            const errors = requiredFields.reduce((errors, field) => {
                if (!formData[field]) {
                    errors[field] = `${field} is required`;
                }
                return errors;
            }, {});
            return Object.keys(errors).length === 0 ? null : errors;
        },
        clear() {
            this.comment.text = "";
            this.comment.user_name = "";
            this.errors = {};
            this.isLoading = false;

        },
        async addComment(comment) {
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(comment),
            });
            return await res.json();
        },
        async onSubmit() {
            const errors = this.validate(this.comment, ["user_name", "text"]);
            if (errors && !this.isLoading) {
                this.errors = errors;
                return;
            }

            this.isLoading = true;
            const comment = await this.addComment({
                ...this.comment,
                level: this.level,
                comment_id: this.parentId,
            })
            this.$emit("submitted", comment);
            this.clear();

        },
        onDiscard() {
            this.clear();
            this.$emit("discard");
        }
    },
}
</script>
