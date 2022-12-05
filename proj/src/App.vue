<template>
  <div id="app">
    <HeaderComp />
    <MainComp />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';



export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  }
}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
  
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
