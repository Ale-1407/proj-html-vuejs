<template>
    <div>
        <!-- <i>{{iconeContatti.icon}}</i> -->
        <span> <i>{{  }}</i> {{ iconeContatti.text }}</span>
    </div> 
</template>

<script>

export default{
    name: 'ContattiComp',
    props: {
        iconeContatti: Object
    }
}
</script>

<style lang="scss" scoped>

</style>