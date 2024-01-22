<template>
  <div class="container-fluid main-container d-flex flex-column">
      <div>
        <u-navbar></u-navbar>
      </div>
  </div>
</template>

<script lang="ts" src="./u-header.component.ts"></script>
<style lang="scss">

.main-container{
  height: 100vh;
  background-image: url('/content/images/header-background.png');
  background-size: cover;
  background-position: center;
}

.mt-150{
  margin-top: 15rem !important;
}

</style>
