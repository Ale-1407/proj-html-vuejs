<template>
    <div>
        <ul>
            <li><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{ footListDue.voce }}</li>
        </ul> 
    </div>
</template>

<script>

export default{
    name: 'FootListaDue',
    props: {
        footListDue: Object
    }
}
</script>

<style lang="scss" scoped>
li{
    list-style-type: none;
}
</style>