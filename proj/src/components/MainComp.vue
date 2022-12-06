<template>
    <main>
        <section>
            <div class="who-we-are">
                <div class="text">
                    <span id="blue-text">WHO WE ARE</span>
                    <div>
                        <span id="text-exc"><font-awesome-icon icon="fa-regular fa-gem" /> Excellence</span>
                        <span id="text-transp"> in Transport</span>
                    </div>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem atque obcaecati debitis architecto laboriosam hic non aperiam inventore, pariatur quia</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa consequatur beatae minima similique facilis! Tempore sunt est eius, illo, enim, veniam amet ab sed.</span>
                    <div class="bordo">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos numquam sit, vel, aspernatur perspiciatis doloribus eos a similique perferendis quam, eveniet ipsa. </span>
                    </div>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatibus quaerat iure.</span>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Interger molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Dapibus hendrerit mauris curabitur</li>
                    </ul>
                </div>
                <div class="types">
                    <span class="black-text">Vehicle Types</span>
                    <div class="vehicles" v-for="(elem, index) in trucks" :key="index">
                        <img :src="require(`../assets/img/${elem.img}`)" alt="truck">
                        <div class="vehicles-text">
                            <span class="black-text">{{ elem.info }}</span>
                            <span>{{ elem.weight }}</span>
                        </div>
                    </div>
                    <div class="certific">
                      <span class="black-text">Certifications</span> 
                      <div>
                        <img src="../assets/img/certificate.png" alt="img">
                        <img src="../assets/img/certificate.png" alt="img">
                      </div>   
                    </div>
                </div>
            </div>
        </section>
        <MainServices />
    </main>
</template>

<script>

import MainServices from './MainServices.vue';


export default{
    name: "MainComp",
    data() {
        return {
            trucks: [
                { img: "truck-1.png", info: "Light", weight: "Max Weight 1200 Kg", },
                { img: "truck-1.png", info: "Medium", weight: "Max Weight 6000 Kg", },
                { img: "truck-1.png", info: "Heavy", weight: "Max Weight 24000 Kg", }
            ]
        };
    },
    components: { 
        MainServices 
    }
}

</script>

<style lang="scss" scoped>
section{
    padding: 2.5rem 0;
}
.who-we-are{
    width: 75%;
    margin: auto;
    display: flex;
    padding: 2.5rem 0;
    gap: 40px;
}

.text{
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: grey;
    font-size: 12px;
}

#blue-text{
    color: #52bbbb;
    font-weight: bold;
    font-size: 14px;
}

.bordo{
    padding: 8px;
    border-left: 3px solid lightgray;
    font-style: italic;
}

ul{
    padding-left: 18px;
}

#text-exc{
    color: #038384;
    font-weight: 800;
    font-size: 35px;
    background-color: rgba(3, 131, 132, 0.2);
    padding: 4px 8px;
    border-radius: 3px;
}

#text-transp{
    color: black;
    font-weight: 800;
    font-size: 35px;
}

.types{
    width: 40%;
    display: flex;
    flex-direction: column;
}

.vehicles{
    display: flex;
    margin-top: 20px;
    gap: 15px;
    border-bottom: 1.5px solid lightgray;
    padding: 10px;
    width: 78%;
}

.vehicles img{
    height: 40px;
}

.vehicles-text{
    display: flex;
    flex-direction: column;
}

.black-text{
    font-weight: 700;
    font-size: 15px;
}

.vehicles-text :nth-child(2){
    font-size: 12px;
    color: grey;
}

.certific{
    margin-top: 35px;
}

.certific img{
    height: 80px;
    margin-top: 20px;
    margin-right: 10px;
}

</style>