<template>
  <b-navbar :class="[isScroll ? 'bg-light' : '' ]"  class="fixed-top" data-cy="navbar" toggleable="true"  type="light">
    <b-navbar-nav>
      <b-nav-item href="#">
        <b-navbar-toggle
          right
          href="javascript:void(0);"
          data-toggle="collapse"
          target="sidebar-1"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="mr-lg-4 p-0 m-3"
        >
          <font-awesome-icon icon="bars" size="lg"/>
        </b-navbar-toggle>
        <span class="h4 navbar-title">
          <span  class="font-weight-bold mr-1" v-text="t$('global.title')"></span>
          <span  class="navbar-title-next" v-text="t$('global.titleNext')"></span>
        </span>
      </b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav>
      <b-nav-item class="d-none-mobile" href="#">
        <p-button type="button" class="mr-3 btn-connexion font-weight-bold" :label="t$(labelButtonConnexion)" :loading="loading" @click="load" rounded plain text size="large">
          <template #icon>
              <font-awesome-icon icon="user"/>
            </template>
        </p-button>
        <p-button type="button" class="mr-3 btn-register font-weight-bold" :label="t$('global.menu.account.inscription')" severity="secondary" :loading="loading" @click="load" rounded size="large">
        </p-button>
      </b-nav-item>
    </b-navbar-nav>

    <u-sidebar :id="sidebarId"></u-sidebar>
  </b-navbar>
</template>

<script lang="ts" src="./u-navbar.component.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ==========================================================================
    Navbar
    ========================================================================== */
.navbar-version {
  font-size: 0.65em;
}

@media screen and (min-width: 768px) {
  .jh-navbar-toggler {
    display: none;
  }
}

@media screen and (min-width: 768px) and (max-width: 1150px) {
  span span {
    display: none;
  }
}

.navbar-title {
  display: inline-block;
  @media (max-width: 576px) {
    font-size: 1.3rem;
  }
}

.navbar-title-next {
  font-weight: 1000 !important
}

/* ==========================================================================
    Logo styles
    ========================================================================== */
.navbar-brand.logo {
  padding: 0 7px;
}

.logo .logo-img {
  height: 45px;
  display: inline-block;
  vertical-align: middle;
  width: 45px;
}

.logo-img {
  height: 100%;
  background: url('/content/images/logo-jhipster.png') no-repeat center center;
  background-size: contain;
  width: 100%;
  filter: drop-shadow(0 0 0.05rem white);
  margin: 0 5px;
}

.bg-red {
  background-color: #02b875 !important;
}
.bg-light{
  box-shadow: rgb(226, 226, 226) 0px -2px 0px inset;
}

.d-none-mobile{
  @media (max-width: 330px) {
    display: none;
  }
}

.btn-connexion{
  box-shadow: rgb(226, 226, 226) 0px -2px 0px inset;
  background-color: white!important;
  @media (max-width: 576px) {
    height: 50%;
    width:25%;
  }

}
.btn-light{
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.04);
}

.navbar-light .navbar-toggler {
   border-color: transparent;
}
.p-button.p-button-rounded {
  border-radius: 2rem!important;
}
</style>
