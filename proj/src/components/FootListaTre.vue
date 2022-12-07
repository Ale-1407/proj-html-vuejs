<template>
    <div>
        <ul>
            <li><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{ footListTre.voce }}</li>
        </ul> 
    </div>
</template>

<script>

export default{
    name: 'FootListaTre',
    props: {
        footListTre: Object
    }
}
</script>

<style lang="scss" scoped>
li{
    list-style-type: none;
    font-size: 13px;
}
</style>