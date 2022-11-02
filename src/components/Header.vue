<template>
    <header>
        <h1>{{title}}</h1>
        <Button v-show="homePage" @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'" />
    </header>
</template>

<script setup>
    import Button from './Button.vue'

    const props = defineProps({
        title: String,
        showAddTask: Boolean
    })

    const emit = defineEmits(['toggle-add-task'])
</script>

<script>
    export default{
        computed: {
            homePage(){
                if(this.$route.path === '/'){
                    return true
                }
                else{
                    return false
                }
            }
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