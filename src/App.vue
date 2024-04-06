<script setup lang="ts">
import Preparation from './components/Preparation/Preparation.vue'
import Introduction from './components/Introduction/Introduction.vue'
import ContentArea from './components/ContentArea/ContentArea.vue'
</script>

<template>
    <Introduction />
    <Preparation />
    <ContentArea
        :headline="'Ingredients'"
    />
    <ContentArea
        :headline="'Instructions'"
    />
    <ContentArea
        :headline="'Nutrition'"
    />
</template>

<style lang="scss" module>
</style>
