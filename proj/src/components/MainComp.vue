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
                    
                </div>
            </div>
        </section>
    </main>
</template>

<script>

export default{
    name: 'MainComp'
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
    align-items: center;
    padding: 2.5rem 0;
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
    font-size: 12px;
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
    padding: 4px;
    border-radius: 3px;
}

#text-transp{
    color: black;
    font-weight: 800;
    font-size: 35px;
}

.types{
    width: 40%;
}

</style>