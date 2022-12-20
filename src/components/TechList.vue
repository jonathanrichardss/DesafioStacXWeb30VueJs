<template>
    <div class="p-[20px] w-[793px] h-[173px] rounded-lg bg-[#27272a] border-solid border-[2px] border-[#9d4b00] flex items-center">   
        <ul class="flex w-full h-full flex-wrap flex-col px-[2px] items-start p-[5px] ml-[55px]"  >
            <li class="pl-[10px] mx-[10px]  text-white list-disc text-xl" v-for="(item) in TechList" v-bind:key="item" v-bind:item="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TechList',

    data() {
        return {
            TechList:["Javascript","React",'Vue js','Tailwind CSS','Styled Components','Saas',"Node",'TypeScript',"Angular","Java"]
        }
    }
    
}
</script>