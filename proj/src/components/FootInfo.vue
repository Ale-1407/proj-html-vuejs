<template>
    <section>
        <div class="info">
            <div class="cont-info">
                <div class="cont-logo">                
                    <button class="logo">N E X</button><span>G E N</span>
                </div>
                <span>A functional HTML Template for Corporate & Business.</span>
                <div class="contacts">
                    <div>
                        <span><font-awesome-icon icon="fa-solid fa-phone" /></span>
                        <span class="grey-text">+1(305) 1234-5678</span>
                    </div>
                    <div>
                        <span><font-awesome-icon icon="fa-solid fa-envelope" /></span>
                        <span class="grey-text">hello@example.com</span>
                    </div>
                    <div>
                        <span><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
                        <span class="grey-text">Main Avenue, 987</span>
                    </div>
                </div>
                <div>
                    <button class="typeTwo">GET IN TOUCH</button>
                </div>
            </div>
            <div class="cont-card">
               <div class="cards">
                   <div class="card">
                      <h3>About</h3>
                      <FootLista v-for="(elem, index) in vociMenu" :key="index" :footList="elem" />
                   </div>
                   <div class="card">
                    <h3>Transport</h3>
                    <FootListaDue v-for="(elem, index) in vociMenuDue" :key="index" :footListDue="elem" />
                   </div>
                   <div class="card">
                    <h3>Support</h3>
                    <FootListaTre v-for="(elem, index) in vociMenuTre" :key="index" :footListTre="elem" />
                   </div>
                </div> 
            </div>
        </div>
    </section>
</template>

<script>

import FootLista from './FootLista.vue'
import FootListaDue from './FootListaDue.vue'
import FootListaTre from './FootListaTre.vue';

export default{
    components: { FootLista, FootListaDue, FootListaTre },
    name: 'FootInfo',
    data(){
        return{
            vociMenu: [
                {voce: 'The Company'},
                {voce: 'Institutional'},
                {voce: 'Social & Events'},
                {voce: 'Innovation'},
                {voce: 'Environment'},
                {voce: 'Technology'}
            ],
            vociMenuDue: [
                {voce: 'Industrialized'},
                {voce: 'Chemicals'},
                {voce: 'Packaged Liquids'},
                {voce: 'Contruction'},
                {voce: 'Laminated Wood'},
                {voce: 'And others'}
            ],
            vociMenuTre: [
                {voce: 'Responsibility'},
                {voce: 'Terms of Use'},
                {voce: 'About Cookies'},
                {voce: 'Privacy Policy'},
                {voce: 'Accessibility'},
                {voce: 'Information'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
section{
    padding: 2.5rem 0;
    background-color: #121117;
    color: rgb(195, 195, 195);
}

.info{
    padding: 2.5rem 0;
    width: 75%;
    margin: auto;
    display: flex;
}

.cont-info{
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.cont-card{
    width: 80%;
}

.cont-logo > span{
    padding-left: 3px;
    font-weight: 600;
    color: white;
    font-size: 18px;
}
.logo{
    color: #52bbbb;
    font-weight: bold;
    font-size: 18px;
    padding: 8px 0 8px 20px;
    background-color: rgba(5, 130, 131, 0.3);
    border: transparent;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.contacts{
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
}

.contacts > div{
    display: flex;
    gap: 10px;
    align-items: center;
}

.typeTwo{
    padding: 14px 18px;
    background-color: transparent;
    border: 1px solid rgb(5, 130, 131);
    color: white;
    font-size: 14px;
    border-radius: 3px;
    margin-top: 10px;
    width: 80%;
}

.grey-text{
    color: grey;
}

.cards{
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 75%;
    margin: auto;
}


.card{
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: rgba(63, 63, 63, 0.2);
    border-radius: 8px;
    line-height: 28px;
}

.card h3{
    padding-bottom: 10px;
}
</style>