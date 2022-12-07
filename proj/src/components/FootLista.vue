<template>
    <div>
        <ul>
            <li><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{ footList.voce }}</li>
        </ul> 
    </div>
</template>

<script>

export default{
    name: 'FootLista',
    props: {
        footList: Object
    }
}
</script>

<style lang="scss" scoped>
li{
    list-style-type: none;
    font-size: 13px;
}

li:hover{
    color: rgb(5, 130, 131);
    cursor: pointer;
}
</style>