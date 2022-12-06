<template>
    <footer>
        <FootInfo />
        <FootBlack />
    </footer>
</template>

<script>

import FootBlack from './FootBlack.vue';
import FootInfo from './FootInfo.vue';

export default{
    name: "FooterComp",
    components: {
    FootInfo,
    FootBlack
   }
}
</script>