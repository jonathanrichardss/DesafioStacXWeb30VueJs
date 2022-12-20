<template>
  <div class="m-0 p-0 w-[100vw] h-screen bg-stackx-bg flex items-center justify-center flex-col absolute">
    <h1 id="mainTitle" class="text-white text-center text-2xl w-[1000px] mb-11">{{minhavariavel}}</h1>
    <TechList />
    <FooterSectionVue />
    <footer class="flex mt-16">
      <MyButtonLangVue v-for="(item) of translatesList" v-bind:key="item.id" :src="item.image" :translates=item @evento="handleClick"></MyButtonLangVue>
    </footer>
  </div>
</template>

<script>

import TechList from './TechList.vue';
import FooterSectionVue from './FooterSection.vue';
import MyButtonLangVue from './ButtonLang/MyButtonLang.vue';
import Brazil from '../../public/icons/brazil.png';
import EstadoUnidos from '../../public/icons/united-states.png';
import Mexico from '../../public/icons/spain 2.png';

export default {
    name: "HelloWorld",
    props: {
        msg: String,
        
    },
    data() {
        return {
          translatesList: [
            {
              id: 0, 
              pt: 'pt-Br',
              description: 'Português',
              image: Brazil,
              content: 'Olá, o meu nome é Jonathan Richard Souza Santos e eu sou Desenvolvedor Front-end, Tecnologias que eu tenho experiência:'
            },
            {
              id: 1,
              en: 'en',
              description: 'Inglês',
              image: EstadoUnidos,
              content: "Hello, my name is Jonathan Richard Souza Santos e I'm a Front-end Developer, here some Tech Skills that i have knowledge:"
            },
            {
              id: 2,
              es: 'es',
              description: 'Espanhol',
              image: Mexico,
              content: "Hola, mi nombre es Jonathan Richard Souza Santos y soy Desarrollador Front-end, Tecnologías en las que tengo experiencia:"
            }
          ],

          minhavariavel: 'Olá, o meu nome é Jonathan Richard Souza Santos e eu sou Desenvolvedor Front-end, Tecnologias que eu tenho experiência:'
          
        };
    },
    methods: {


        handleClick(title) {

          if (title == 'Português') {
            this.minhavariavel = this.translatesList[0].content
          } 

          console.log(title);
          
          if(title == 'Inglês') {
            this.minhavariavel =  this.translatesList[1].content;
          }

          if(title == 'Espanhol') {
            this.minhavariavel = this.translatesList[2].content;
          }
          
          console.log('TESTE');
          
        }
    },
    components: { TechList, FooterSectionVue, MyButtonLangVue }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
