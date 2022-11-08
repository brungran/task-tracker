<script setup>
    import Tasks from '../components/Tasks.vue'
    import AddTask from '../components/AddTask.vue'

    defineProps({
        showAddTask: Boolean
    })
</script>

<template>
    <AddTask v-show="showAddTask" />
    <Tasks />
</template>