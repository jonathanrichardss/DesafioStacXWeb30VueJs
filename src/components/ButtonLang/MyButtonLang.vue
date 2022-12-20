<template>
    <div class="flex items-center justify-center m-0">
        <div v-on:click="handleClick(title)">
            <button class="w-[133px] h-[51px] rounded-[8px] flex justify-center items-center text-start bg-stackx-cont text-white m-5">
                <img class="w-[20px] h-[20px]" :src="images" alt="">
                <p class="text-2 ml-2">{{ title }}</p>
            </button>
        </div>
    </div>
</template>


<script>

export default {
    name: 'MyButtonLang',
    props: {
        translates: {},
    },

    data() {
        return {
            title: this.translates.description,
            content: this.translates.content,
            images: this.translates.image
        }
    },

    methods: {
        handleClick(title) {
           this.$emit('evento', title);
           }
        }
}

</script>