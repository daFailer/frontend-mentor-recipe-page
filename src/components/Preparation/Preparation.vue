<template>
    <div :class="classList">
        <div :class="$style['headline']">
            Preparation time
        </div>
        <ul>
            <li>
                <p>
                    <strong>Total</strong>: Approximately 10 minutes
                </p>
            </li>
            <li>
                <p>
                    <strong>Preparation</strong>: 5 minutes
                </p>
            </li>
            <li>
                <p>
                    <strong>Cooking</strong>: 5 minutes
                </p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./Preparation.ts" />

<style lang="scss" module src="./Preparation.scss">
</style>