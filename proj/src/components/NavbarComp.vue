<template>
    <nav>
        <ul>
            <li>{{ navList.testo }}</li>
        </ul>
    </nav>
</template>

<script>
export default{
    name: 'NavbarComp',
    props: {
        navList: Object
    }
}
</script>

<style lang="scss" scoped>

li{
    list-style-type: none;
    font-weight: 500;
}

</style>