<template>
    <div :class="classList">
        <h2 :class="$style['headline']">
            {{ headline }}
        </h2>
        <ul>
            <li>
                2-3 large eggs
            </li>
            <li>
                Salt, to taste
            </li>
            <li>
                Pepper, to taste
            </li>
            <li>
                1 tablespoon of butter or oil
            </li>
            <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./ContentArea.ts" />

<style lang="scss" module src="./ContentArea.scss">
</style>