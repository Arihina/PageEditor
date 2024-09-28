<template>
    <input :value="modelValue" @input="updInput" type="text">
</template>

<script>
export default {
    name: 'custom-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
input {
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}
</style>