<template>
    <section>
        <div class="feedback">
            <span id="blue-text">CUSTOMER TESTIMONIALS</span>
            <div class="text-feedback">
                <span>Trusted </span>
                <span>Feedback</span>
            </div>
            <span>We work intensively in serach of ideas that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition.</span>
            
        </div>
        <div class="cards">
            <div class="card" v-for="(elem, index) in cards" :key="index">
                <img :src="require(`../assets/img/${elem.img}`)" alt="img">
                <span id="space">{{ elem.text }}</span>
                <span>{{ elem.textTwo }}</span>
                <span id="quote"><font-awesome-icon icon="fa-solid fa-quote-right" /></span>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: 'FeedbackComp',
    data() {
        return{
            cards: [
                { img: 'woocommerce.png', text:'Present volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque.', textTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { img: 'WordPress.png', text:'Present volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque.', textTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { img: 'Pingdom.svg', text:'Present volutpat justo sit amet elementum malesuada. Praesent sagittis augue justo, in accumsan orci rhoncus at pellentesque.', textTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },   
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

.feedback{
    text-align: center;
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 0;
}

#blue-text{
    color: #52bbbb;
    font-size: 14px;
    font-weight: bold;
}

.text-feedback{
    font-weight: 800;
    font-size: 35px;
    padding: 20px 0;
    color: white;
}

.text-feedback :nth-child(2){
    background-color: rgba(3, 131, 132, 0.5);
    padding: 4px 8px;
    border-radius: 3px;
}

.cards{
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    gap: 20px;
    width: 75%;
    margin: auto;
    padding-bottom: 2.5rem;
}
.card{
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: rgba(63, 63, 63, 0.2);
    border-radius: 8px;
    text-align: left;
    width: 80%;
}

.card img{
    width: 40%;
}

#space{
    padding: 20px 0;
}

#quote{
    align-self: flex-end;
    font-size: 30px;
    margin-top: -18px;
    color: #69696d;
}
</style>