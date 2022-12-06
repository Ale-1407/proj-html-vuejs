<template>
    <section>
        <div class="text">
            <span id="blue-text">WHAT ARE WE DOING</span>
            <div class="text-results">
                <span>Results</span>
                <span> in Numbers</span>
            </div>
            <div class="cont-dati">
              <div class="dati" v-for="(elem, index) in dati" :key="index">
                <span id="blue-text-2">{{ elem.number }}</span>
                <span>{{ elem.text }}</span>
              </div>  
            </div>
            
        </div>
    </section>
</template>

<script>

export default{
    name: 'ResultsComp',
    data(){
        return{
            dati:[
                {number: '128', text: 'Certifications'},
                {number: '230', text: 'Employees'},
                {number: '517', text: 'Customers'},
                {number: '94', text: 'Countries Served'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

section{
    background-image: url(../assets/img/bg-10.jpg);
    background-position: center;
    background-size: cover;
    text-align: center;
    padding: 2.5rem 0;
}

.text{
    width: 75%;
    margin: auto;
    padding: 6rem 0;
    
}

#blue-text{
    color: #52bbbb;
    font-weight: bold;
    font-size: 14px;
}

#blue-text-2{
    color: #52bbbb;
    font-weight: 700;
    font-size: 25px;
    padding-bottom: 10px;
}

.text-results{
    font-weight: 800;
    font-size: 35px;
    padding: 20px 0;
    color: white;
}

.text-results :nth-child(1){
    background-color: rgba(3, 131, 132, 0.2);
    padding: 4px 8px;
    border-radius: 3px;
}

.cont-dati{
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: auto;
    padding-top: 3rem;
}

.dati{
    display: flex;
    flex-direction: column;
}

.dati :nth-child(2){
    color: white;
    font-weight: 600;
    font-size: 18px;
}
</style>