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
                <div class="form">
                    <div class="flex">
                       <input type="text" placeholder="Name">
                       <input type="text" placeholder="Email">
                    </div>
                    <div class="flex">
                        <input type="text" placeholder="Phone">
                        <select class="select">
                           <option selected>More Info</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="flex-2">
                        <div>
                           <textarea name="message" id="message" rows="10" cols="79" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <button class="typeOne">SEND</button>
                </div>
            </div>
            <div class="cont-2">
                <span id="black-text">Example Inc.</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                <span>Praesent diam lacus, dapibus sed imperdiet consectetur.</span>
                <div class="contacts">
                    <div>
                        <span class="circle"><font-awesome-icon icon="fa-solid fa-phone" /></span>
                        <span>+1(305) 1234-5678</span>
                    </div>
                    <div>
                        <span class="circle"><font-awesome-icon icon="fa-solid fa-envelope" /></span>
                        <span>hello@example.com</span>
                    </div>
                    <div>
                        <span class="circle-2"><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
                        <span>Main Avenue, 987</span>
                    </div>
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

.form{
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
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 14px;
}

.typeOne:hover{
    background-color: transparent;
    color: rgb(5, 130, 131);
    border: 1px solid rgb(5, 130, 131);
}

input, select{
    width: 45%;
    padding: 10px;
    color: grey;
    font-family: 'Montserrat', sans-serif;
    border: 0;
    background-color: rgba(211, 211, 211, 0.4);
    border-radius: 3px;
}

#message{
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
    border: 0;
    background-color: rgba(211, 211, 211, 0.4);
    border-radius: 3px;
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
    margin-top: 10px;
}

.typeTwo:hover{
    background-color: rgb(5, 130, 131);
    color: white;
}
.contacts{
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #038384;
}

.contacts > div{
    display: flex;
    gap: 10px;
    align-items: center;
}

.circle{
    border-radius: 50%;
    background-color: rgba(3, 131, 132, 0.2);
    padding: 12px;
    font-size: 16px;
}

.circle-2{
    border-radius: 50%;
    background-color: rgba(3, 131, 132, 0.2);
    font-size: 16px;
    padding: 12px 15px;
}
</style>