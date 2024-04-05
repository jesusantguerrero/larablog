<script>
export default {
    name: "FormField",
    props: {
        modelValue: {
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
        modelValue(value) {
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


<template>
<div class="w-full">
    <component
        :is="tag"
        ref="input"
        :placeholder="label"
        :value="modelValue"
        class="block w-full px-2 py-1 bg-transparent border-b border-gray-200 focus:outline-none focus:border-emerald-400"
        @input="$emit('update:modelValue', $event.target.value)"
    />
    <small class="block text-red-400" v-if="errorMessage">{{ prettyError }}</small>
</div>
</template>

