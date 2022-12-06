<template>
    <header>
        <div class="grey-cont">
            <div class="orari">
              <span> <font-awesome-icon icon="fa-solid fa-clock" /> Open Hours: Mon-Sat - 9:00-18:00</span>
            </div>
            <div class="info">
              <div class="contatti">
                <span><font-awesome-icon icon="fa-solid fa-phone" /> +1(305)1234-5678</span>
                <span><font-awesome-icon icon="fa-solid fa-envelope" /> hello@example.com</span>
              </div>
              <div class="social">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
              </div>  
            </div>
        </div>  
        <section class="cargo">
            <div class="menu">
                <div class="menu-logo">
                   <button class="logo">N E X</button><span>G E N</span> 
                </div>
                <div class="cont">
                    <div class="lista">
                      <NavbarComp v-for="(elem, index) in nav" :key="index" :navList="elem"/>  
                    </div>
                    <div class="listaDue">
                      <span><font-awesome-icon icon="fa-regular fa-user" /></span>
                      <button class="typeOne">GET IN TOUCH</button> 
                    </div>
                </div>
            </div> 
            <div class="jumbo">
                <div class="log-serv">
                    <div class="content">
                       <span id="text">LOGISTICS SERVICES</span>
                       <span id="text2">CARGO TRANSPORT</span>
                       <span>Fractional or exclusive road cargo transportation to all regions, with small, medium and large vehicles.</span> 
                    </div>
                    <div class="buttons">
                        <button class="typeOne">GET IN TOUCH</button>
                        <button class="typeTwo">READ MORE</button>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>

<script>

import NavbarComp from './NavbarComp.vue';

export default{
    name: 'HeaderComp',
    components: {
    NavbarComp
},
    data(){
    return{
      contacts: [
        { icon: '<font-awesome-icon icon="fa-solid fa-phone" />', text: '+1(305) 1234-5678' },
        { icon: '<font-awesome-icon icon="fa-solid fa-envelope" />', text: 'hello@example.com' },
      ],
      nav: [
        {testo: 'HOME'},
        {testo: 'ABOUT'},
        {testo: 'SERVICES'},
        {testo: 'PROCESS'},
        {testo: 'TESTIMONIALS'}
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
    gap: 20px;
}

.social{
    padding-left: 20px;
    display: flex;
    gap: 20px;
}

.cargo{
    background-image: url(../assets/img/bg-9.jpg);
    background-size: cover;
    background-position: top;
    padding-top: 20px;
    color: white;
    height: 95vh;
}

.menu{
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.log-serv{
    width: 75%;
    margin: auto;
    display: flex;
    flex-direction: column;
}

#text{
    color: #52bbbb;
    font-weight: 500;
}

#text2{
    font-size: 55px;
    font-weight: 900;
    padding-bottom: 20px;
}

.buttons{
    display: flex;
    padding-top: 30px;
    gap: 10px;
}
.content{
    display: flex;
    margin-top: 5rem;
    flex-direction: column;
    width: 45%;
}

.lista, .listaDue{
    display: flex;
    align-items: center;
    gap: 20px;
}

.listaDue{
    padding-left: 20px;
}
.cont{
    display: flex;
}
.logo{
    color: #52bbbb;
    font-weight: bold;
    font-size: 16px;
    padding: 8px 0 8px 20px;
    background-color: rgba(5, 130, 131, 0.3);
    border: transparent;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.menu-logo > span{
    padding-left: 3px;
    font-weight: 500;
}

.typeOne{
    padding: 8px 10px;
    color: white;
    background-color: rgb(5, 130, 131);
    border: transparent;
    border-radius: 3px;
    font-size: 14px;
}

.typeTwo{
    padding: 8px 10px;
    background-color: transparent;
    border: 1px solid rgb(5, 130, 131);
    color: white;
    font-size: 14px;
    border-radius: 3px;
}
</style>