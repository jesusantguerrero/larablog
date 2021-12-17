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
    <button class="bg-emerald-500 text-white px-5 py-1 rounded-md">
        Comment
    </button>
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
            errors: {}
        };
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
        onSubmit() {
            const errors = this.validate(this.comment, ["user_name", "text"]);
            if (errors) {
                this.errors = errors;
                return;
            }
            this.$emit("submit", this.comment);
            this.comment.text = "";
            this.comment.user_name = "";
        },
    },
    components: { FormField }
}
</script>
