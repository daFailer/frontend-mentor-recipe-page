<template>
    <div :class="classList">
        <div :class="$style['headline']">
            Preparation time
        </div>
        <ul>
            <li>
                <strong>Total:</strong> Approximately 10 minutes
            </li>
            <li>
                <strong>Preparation:</strong> 5 minutes
            </li>
            <li>
                <strong>Cooking:</strong> 5 minutes
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./Preparation.ts" />

<style lang="scss" module src="./Preparation.scss">
</style>