<template>
    <a class="a">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'custom-button'
}
</script>

<style scoped>
a {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}
</style>