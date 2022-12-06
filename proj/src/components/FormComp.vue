<template>
    <section>
        <div class="message">
            <div class="cont-1">
                <div class="text">
                    <span id="blue-text" >SEND A MAESSAGE</span>
                    <div class="text-form">
                        <span>Get In </span>
                        <span>Touch</span>
                    </div>
                    <span>We will respond to your message as soon as possible</span>
                </div>
                <div class="form-statico">
                    <div class="flex">
                       <span>Name</span>
                       <span>Email</span>
                    </div>
                    <div class="flex">
                        <span>Phone</span>
                        <span class="info">
                            <span>More Info</span>
                            <span><font-awesome-icon icon="fa-solid fa-chevron-down" /></span>
                        </span>
                    </div>
                    <div class="flex-2">
                        <span>Message</span>
                    </div>
                    <button class="typeOne">SEND</button>
                </div>
            </div>
            <div class="cont-2">
                <span id="black-text">Example Inc.</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                <span>Praesent diam lacus, dapibus sed imperdiet consectetur.</span>
                <div class="contacts">

                </div>
                <div>
                  <button class="typeTwo">VIEW MAP</button>  
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: 'FormComp.vue'
}
</script>

<style lang="scss" scoped>
section{
    padding: 2.5rem 0;
    color: grey;
}

.message{
    width: 75%;
    margin: auto;
    display: flex;
    gap: 40px;
    padding: 2.5rem 0;
}

.text{
    display: flex;
    flex-direction: column;
}

#blue-text{
    color: #52bbbb;
    font-size: 14px;
    font-weight: bold;
}

.text-form{
    font-weight: 800;
    font-size: 35px;
    padding: 20px 0;
}

.text-form :nth-child(2){
    background-color: rgba(3, 131, 132, 0.2);
    padding: 4px 8px;
    border-radius: 3px;
    color: #038384;
}

.text-form :nth-child(1){
    color: black;
}

.cont-1{
    width: 60%;
}

.cont-2{
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-statico{
    padding-top: 3rem;
}

.flex{
    display: flex;
    gap: 10px;
    padding-bottom: 20px;
}

.flex-2{
    display: flex;
    padding-bottom: 20px;
}

.flex-2 span{
    background-color: rgba(128, 128, 128, 0.2);
    width: 100%;
    border-radius: 3px;
    padding: 10px;
    height: 150px;
}

.flex span{
    background-color: rgba(128, 128, 128, 0.2);
    width: 50%;
    padding: 10px;
    border-radius: 3px;
}
.typeOne{
    padding: 8px 15px;
    color: white;
    background-color: rgb(5, 130, 131);
    border: transparent;
    border-radius: 3px;
    font-size: 14px;
}

.info{
    display: flex;
    justify-content: space-between;
}

.info span{
    background-color: transparent;
    padding: 0;
}

.info :nth-child(2){
    width: 20px;
}

#black-text{
    font-weight: 700;
    font-size: 18px;
    color: black;
}
.typeTwo{
    padding: 8px 10px;
    background-color: transparent;
    border: 1px solid rgb(5, 130, 131);
    color: #038384;
    font-size: 14px;
    border-radius: 3px;
}
</style>