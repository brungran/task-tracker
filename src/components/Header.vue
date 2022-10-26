<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
</style>