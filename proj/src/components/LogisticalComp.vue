<template>
    <section>
        <div class="text">
            <span id="blue-text">HOW IT WORKS IN PRACTICE</span>
            <div class="text-logistical">
                <span>Logistical</span>
                <span> Procedure</span>
            </div>
            <span>We work with innovative methodologies to ensure that the entire delivery process is done from start to finish as planned.</span>
        </div>
        <div class="graphic" >
            <div class="cont-span">
                <span v-for="(elem, index) in numbers" :key="index">{{ elem.cifra }}</span>
            </div>
        </div>
        <div class="cont-card">
            <div class="card" v-for="(elem, index) in cards" :key="index">
              <p id="title">{{ elem.title }}</p>
              <p>{{ elem.text }}</p>
            </div>
        </div>
    </section>
</template>

<script>

export default{
    name: 'LogisticalComp',
    data(){
        return{
            cards: [
                { title: 'Collection of Information', text:'Lorem ipsum dolor sit amet consectetur' },
                { title: 'Service Invoice Sending', text:'Lorem ipsum dolor sit amet consectetur' },
                { title: 'Withdrawal of Cargo', text:'Lorem ipsum dolor sit amet consectetur' },
                { title: 'Transport Customer Order', text:'Lorem ipsum dolor sit amet consectetur' },
                { title: 'Successfully Delivery', text:'Lorem ipsum dolor sit amet consectetur' },
            ],
            numbers: [
                {cifra: '01'},
                {cifra: '02'},
                {cifra: '03'},
                {cifra: '04'},
                {cifra: '05'}
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

section{
    padding: 2.5rem 0;
    color: grey;
}
.text{
    width: 50%;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 2.5rem;
    
}

#blue-text{
    color: #52bbbb;
    font-size: 14px;
    font-weight: bold;
}

.text-logistical{
    font-weight: 800;
    font-size: 35px;
    padding: 20px 0;
    color: black;
}

.text-logistical :nth-child(1){
    background-color: rgba(3, 131, 132, 0.2);
    padding: 4px 8px;
    border-radius: 3px;
    color: #038384;
}

.graphic{
    width: 100%;
    background-color: rgba(3, 131, 132, 0.1);
    height: 4px;
    margin-top: 4rem;
}

.graphic span{
    margin-top: -15px;
    font-size: 16px;
    color: rgb(3, 130, 130);
    font-weight: 700;
    background-color: rgb(212, 233, 240);
    border-radius: 50%;
    padding: 8px;
}

.cont-span{
    display: flex;
    justify-content: space-around;
}
.cont-card{
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 2.5rem;
}

.card{
    width: 13%;
}

#title{
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 15px;
    color: black;
}
</style>