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
    </section>
</template>

<script>

export default{
    name: 'LogisticalComp'
}

</script>

<style lang="scss" scoped>

section{
    padding: 2.5rem 0;
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
}

.text-logistical :nth-child(1){
    background-color: rgba(3, 131, 132, 0.2);
    padding: 4px 8px;
    border-radius: 3px;
    color: #038384;
}
</style>