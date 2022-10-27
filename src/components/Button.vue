<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script setup>
    const props = defineProps({
        text: String,
        color: String
    })
</script>

<script>
    export default {
        methods: {
            onClick(){
                console.log('click');
            }
        }
    }
</script>