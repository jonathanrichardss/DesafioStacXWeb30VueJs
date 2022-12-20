<template>
    <div class="w-96 h-96 bg-stackx-cont">
        {{ lista }}
    </div>
</template>

<script>
    export default {
        name: 'CardContainer',
        props: {
            list: Event
        } 
    }
</script>