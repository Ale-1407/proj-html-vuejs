<template>
    <header>
        <div class="grey-cont">
            <div class="orari">
              <span> <font-awesome-icon icon="fa-solid fa-clock" /> Open Hours: Mon-Sat - 9:00-18:00</span>
            </div>
            <div class="info">
              <div class="contatti">
                <ContattiComp v-for="(elem, index) in contacts" :key="index" :iconeContatti="elem" />
              </div>
              <div class="social">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
              </div>  
            </div>
        </div>  
        <section class="cargo">
            <div>
                <NavbarComp />
            </div>
            
        </section>
    </header>
</template>

<script>

import ContattiComp from './ContattiComp.vue';
import NavbarComp from './NavbarComp.vue';

export default{
    name: 'HeaderComp',
    components: {
    ContattiComp,
    NavbarComp
},
    data(){
    return{
      contacts: [
        { icon: '<font-awesome-icon icon="fa-solid fa-phone" />', text: '+1(305) 1234-5678' },
        { icon: '<font-awesome-icon icon="fa-solid fa-envelope" />', text: 'hello@example.com' },
        { iconLuogo: '<font-awesome-icon icon="fa-solid fa-location-dot" />', textLuogo: 'Main Avenue, 987' }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
.grey-cont{
    background-color: #21333e;
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
}

.info{
    display: flex;
}
.contatti{
    display: flex;
    gap: 10px;
}

.social{
    padding-left: 20px;
    display: flex;
    gap: 20px;
}

.cargo{
    height: 550px;
    background-image: url(../assets/img/bg-9.jpg);
    background-size: cover;
    background-position: center;
    padding-top: 20px;
    color: white;
}

.cargo > div{
    width: 75%;
    margin: auto;
}
</style>