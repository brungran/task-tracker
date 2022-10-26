<template>
    <header>
        <h1>{{title}}</h1>
        <Button text="Add Task" color="green" />
    </header>
</template>

<script>
    import Button from './Button.vue'

    export default {
        props: {
            title: String
        },
        components:{
            Button
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