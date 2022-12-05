<template>
    <div>
        <button>N E X</button><span>G E N</span>
        <nav>

        </nav>
    </div>
</template>

<script>
export default{
    name: 'NavbarComp'
}
</script>

<style lang="scss" scoped>

button{
    color: #52bbbb;
    font-weight: bold;
    font-size: 16px;
    padding: 8px 0 8px 20px;
    background-color: rgba(5, 130, 131, 0.3);
    border: transparent;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

div > span{
    font-weight: bold;
    padding-left: 3px;
}
</style>