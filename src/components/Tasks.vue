<template>
    <div :key="task.id" v-for="task in tasks">
        <Task :task = task />
    </div>
</template>

<script setup>
    import Task from './Task.vue'
    const props = defineProps({
        tasks: Array
    })
</script>