<template>
    <button class="button--primary">Button</button>
</template>
<script>
    export default {
        name: 'Button'
    }
</script>
<style lang="scss">
    .button--primary{
        font-family: $font-family-01;
        color: $color-neutral-white;
        background-color: $color_brand_primary_base;
        font-size: $font-size-m;
        border-radius: $border-radius-s;
        border-width: $border-width-none;
        font-weight: $font-weight-semibold;

        padding: 16px 24px;
    }
</style>
