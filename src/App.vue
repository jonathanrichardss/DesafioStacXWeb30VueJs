<template>
  <HeaderSection />
  <HelloWorld msg="I'm in control here." />

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderSection from './components/HeaderSection.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderSection
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
}
</style>
