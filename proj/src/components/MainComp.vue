<template>
    <main>
        <WhoWeAreComp />
        <MainServices />
        <LogisticalComp />
        <ResultsComp />
        <FeedbackComp />
        <FormComp />
    </main>
</template>

<script>

import FeedbackComp from './FeedbackComp.vue';
import FormComp from './FormComp.vue';
import LogisticalComp from './LogisticalComp.vue';
import MainServices from './MainServices.vue';
import ResultsComp from './ResultsComp.vue';
import WhoWeAreComp from './WhoWeAreComp.vue';


export default{
    name: "MainComp",
    components: {
    MainServices,
    LogisticalComp,
    ResultsComp,
    FeedbackComp,
    FormComp,
    WhoWeAreComp
   }
}

</script>

<style lang="scss" scoped>

</style>