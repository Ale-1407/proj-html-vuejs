<template>
    <section>
        <div class="services">
            <span id="blue-text">ROAD TRANSPORT</span>
            <div class="text-services">
                <span>Main </span>
                <span>Services</span>
            </div>
            <div class="text-button">
                <div class="div-1">
                   <span>With all of this expertise and capability comes and unrivalled commitment to customer service. We will work hard to understand your needs in order to develop a productive, long-term partnership. </span>  
                </div>
               <div>
                   <button class="typeTwo">SEE ALL</button>
               </div>
            </div>
            <div class="cards">
                <div class="card">
                    <span class="arrow"><font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
                    <div class="icon">
                        <span><font-awesome-icon icon="fa-solid fa-truck-ramp-box" /></span>  
                    </div>
                    <span class="title">Technology</span>
                    <span>We are continually focused on developing technology solutions adapted to our clients needs.</span>
                </div>
               <div class="card">
                    <span class="arrow"><font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
                    <div class="icon">
                        <span><font-awesome-icon icon="fa-solid fa-temperature-low" /></span>
                    </div>
                    <span class="title">Reefer Cargo</span>
                    <span>Regular and frequent monitoring from the receipt of the loaded container to final destination.</span>
               </div>
               <div class="card">
                    <span class="arrow"><font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
                    <div class="icon">
                        <span><font-awesome-icon icon="fa-solid fa-boxes-stacked" /></span>
                    </div>
                    <span class="title">Dry Cargo</span>
                    <span>We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care.</span> 
               </div>
            </div>
        </div>
    </section>
</template>

<script>

export default{
    name: 'MainServices'
}

</script>

<style lang="scss" scoped>

section{
    background-color: #121117;
    color: rgb(195, 195, 195);
    padding: 2.5rem 0;
}

.services{
    width: 75%;
    margin: auto;
    padding: 2.5rem 0;
    display: flex;
    flex-direction: column;
}
#blue-text{
    color: #52bbbb;
    font-size: 14px;
    font-weight: bold;
}

.text-services{
    font-weight: 800;
    font-size: 35px;
    padding: 20px 0;
    color: white;
}

.text-services :nth-child(2){
    background-color: rgba(3, 131, 132, 0.5);
    padding: 4px 8px;
    border-radius: 3px;
}

.text-button{
    display: flex;
}
.typeTwo{
    padding: 8px 10px;
    background-color: transparent;
    border: 1px solid rgb(5, 130, 131);
    color: white;
    font-size: 14px;
    border-radius: 3px;
    margin-left: 30px;
}

.div-1{
    width: 90%;
}

.cards{
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    gap: 20px;
}
.card{
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: rgba(63, 63, 63, 0.2);
    border-radius: 8px;
}

.title{
    font-size: 20px;
    font-weight: 700;
    padding: 20px 0;
}

.arrow{
    align-self: flex-end;
    font-size: 20px;
    color: rgba(82, 187, 187, 0.5);
}

.icon span{
    font-size: 25px;
    color: #52bbbb;
    border-radius: 50%;
    background-color: rgba(3, 131, 132, 0.2);
    padding: 8px 10px;
}


</style>