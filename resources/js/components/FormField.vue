<template>
<div class="w-full">
    <component
        :is="tag"
        ref="input"
        :placeholder="label"
        :value="value"
        class="w-full px-2 py-1 block border-b border-gray-200 bg-transparent focus:outline-none focus:border-emerald-400"
        @input="$emit('input', $event.target.value)"
    />
    <small class="block text-red-400" v-if="errorMessage">{{ prettyError }}</small>
</div>
</template>

<script>
export default {
    name: "FormField",
    props: {
        value: {
            type: String,
            default: "",
        },
        field: {
            type: String,
            required: true,
        },
        errors: {
            type: Object,
            default: () => ({}),
        },
        tag: {
            type: String,
            default: "input",
        },
        label: {
            type: String,
            default: "",
        },
    },
    watch: {
        value(value) {
            if (!value) {
                this.$refs.input.value = "";
            }
        },
    },
    computed: {
        errorMessage() {
            return this.errors[this.field];
        },
        prettyError() {
            return this.errorMessage && this.errorMessage.replace(this.field, this.label);
        },
    }
}
</script>
