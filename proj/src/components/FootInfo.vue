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
                    
                   </div>
                </div> 
            </div>
            
        </div>
    </section>
</template>

<script>
export default{
    name: 'FootInfo',
    data(){
        return{
            
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
}
</style>