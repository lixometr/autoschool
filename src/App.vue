<template>
  <div>
    <router-view/>
    <div class="pixel-perfect"></div>
  </div>
</template>

<style lang="scss">
  .pixel-perfect{
    background-image: url(assets/screen/main.jpg);
  }
  @import 'assets/scss/main'
</style>
