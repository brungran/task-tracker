<template>
    <div :key="task.id" v-for="task in tasks">
        <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task = task />
    </div>
</template>

<script setup>
    import Task from './Task.vue'

    const props = defineProps({
        tasks: Array
    })

    const emit = defineEmits(['delete-task', 'toggle-reminder'])
</script>