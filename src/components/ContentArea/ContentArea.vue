<template>
    <div :class="classList">
        <h2 :class="$style['headline']">
            {{ headline }}
        </h2>
        <slot />
    </div>
</template>

<script lang="ts" src="./ContentArea.ts" />

<style lang="scss" module src="./ContentArea.scss">
</style>