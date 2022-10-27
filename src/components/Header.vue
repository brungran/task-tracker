<template>
    <header>
        <h1>{{title}}</h1>
        <Button text="Add Task" color="green" />
    </header>
</template>

<script setup>
    import Button from './Button.vue'

    const props = defineProps({
        title: String
    })
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
</style>