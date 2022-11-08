<template>
    <div :key="task.id" v-for="task in taskStore.tasks">
        <Task :task = task />
    </div>
</template>

<script setup>
    import Task from './Task.vue'
    import { useTaskStore } from '@/stores/TaskStore'
    const taskStore = useTaskStore()

    taskStore.fetchTasks()

    const props = defineProps({
        tasks: Array
    })

</script>