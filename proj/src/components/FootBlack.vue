<template>
    <section>
        <div class="cont">
            <div>
                <span>Enjoy the low price. We are tracking any intention of piracy.</span>
            </div>
            <div>
                <span>© 2020 NEXGEN is Proudly Powered by <span id="greentext">Codings</span></span>
            </div>
        </div>
        <div class="arrow">
            <span><font-awesome-icon icon="fa-solid fa-arrow-up" /></span>
        </div>
    </section>
</template>

<script>
export default{
    name: 'FootBlack'
}
</script>

<style lang="scss" scoped>
section{
    padding: 2rem 0;
    background-color: black;
    color: grey;
    display: flex;
}

.cont{
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}

#greentext{
    color: #52bbbb;
}

.arrow span{
    margin-right: 20px;
    background-color: rgb(211, 211, 211, 0.2);
    border-radius: 50%;
    padding: 10px 14px;
    font-size: 18px;
    color: rgba(4, 15, 15, 0.6);
}
</style>