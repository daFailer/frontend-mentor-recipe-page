<template>
    <div :class="classList">
        <img :class="$style.teaserImage" src="/images/omelette.jpeg">
        <h1 :class="$style['headline']">
            Simple Omelette Recipe
        </h1>
        <p>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
    </div>
</template>

<script lang="ts" src="./Introduction.ts" />

<style lang="scss" module src="./Introduction.scss">
</style>