<template>
  <div class="card">
    <h1 class="card-title">Título do card</h1>
    <p class="card-text">Text</p>
  </div>
</template>
<script>
export default {
  name: 'Card'
}
</script>
<style lang="scss">
//@import "./dist/tokens/tokens.scss";
  .card{
    font-family: $font-family-01;
    color: $color_brand_primary_base;
    font-size: $font-size-m;
    border-radius: $border-radius-s8;
    border: $border-width-light $color-brand-primary-base solid;
    font-weight: $font-weight-regular;

    padding: 24px;
  }
  .card-title{
    font-weight: $font-weight-semibold;
  }

  .card-text{
    font-weight: $font-weight-regular;
  }
</style>
