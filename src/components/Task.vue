<template>
    <div @dblclick="taskStore.toggleReminder(task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>
            {{task.text}}
            <i @click="taskStore.deleteTask(task.id)" class="fas fa-times"></i>
        </h3>
        <p>{{task.day}}</p>
    </div>
</template>

<script setup>
    import { useTaskStore } from '@/stores/TaskStore'
    const taskStore = useTaskStore()

    const props = defineProps({
        task: Object
    })
</script>

<style scoped>
    .fas {
        color: red;
    }
    .task {
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
    }
    .task.reminder {
        border-left: 5px solid green;
    }
    .task h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>