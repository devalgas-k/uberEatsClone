<template>
  <div id="app">
    <div id="page-container">
      <div id="content-wrap">
        <ribbon></ribbon>
        <div id="app-header">
          <u-header></u-header>
        </div>
        <div class="container-fluid">
          <div class="card jh-card">
            <router-view></router-view>
          </div>
          <b-modal id="login-page" hide-footer lazy>
            <template #modal-title>
              <span data-cy="loginTitle" id="login-title" v-text="t$('login.title')"></span>
            </template>
            <login-form></login-form>
          </b-modal>
        </div>
      </div>
      <div id="footer">
        <jhi-footer></jhi-footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./app.component.ts"></script>
<style lang="scss" scoped>
@import url('/content/css/fix-footer.css');
</style>
