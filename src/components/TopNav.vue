<template>
  <div>
    <div class="TopNav section">
      <div class="container">
        <div class="row">
          <div class="col-xl-auto col">
            <router-link to="/" class="logo">
              <Logo />
            </router-link>
          </div>
          <div class="col d-none d-xl-block">
            <Nav />
          </div>
          <div class="col-auto d-none d-xl-block" v-if="!cabinet">
            <a href="#" class="menu__link" @click.prevent="login">Log in</a>
          </div>
          <div class="col-auto d-none d-xl-block" v-if="!cabinet">
            <router-link :to="{name: 'SignUp'}" class="TopNav__btn"
              >Sign up</router-link
            >
          </div>
          <top-nav-account v-if="cabinet"/>
          <lang-switcher />
          <div class="col-auto d-xl-none">
            <div
              class="toggle-menu-mobile toggle-menu-mobile--js"
              @click="toggleClass"
              :class="{ on: isActive }"
            >
              <!-- :class="{ on:  }" -->
              <!-- @click="$store.commit('showMenu')" -->
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body-before" @click="toggleClass"></div>
    <div
      class="menu-mobile menu-mobile--js d-xl-none"
      :class="{ active: isActive }"
    >
      <!-- :class="{ active: this.$store.state.isShowMenu }" -->
      <div
        class="toggle-menu-mobile toggle-menu-mobile--js"
        @click="toggleClass"
        :class="{ on: isActive }"
      >
        <span></span>
      </div>
      <div class="menu-mobile__inner">
        <div class="container">
          <Nav />
          <div class="row pt-4 align-items-center" v-if="!cabinet">
            <div class="col-auto">
              <router-link to="/" class="menu__link">Log in</router-link>
            </div>
            <div class="col-auto">
              <router-link to="/" class="TopNav__btn">Sign up</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavAccount from './TopNav/TopNavAccount.vue'
import LangSwitcher from './common/LangSwitcher.vue'
// import { SvgSprite } from 'vue-svg-sprite'
import Logo from "@/components/icons/Logo.vue";
import Nav from "@/components/common/Nav.vue";
import { defineComponent } from "@vue/composition-api";
import useModal from "@/compositions/useModal";
import { ModalName } from "@/types/modal.enum";

export default defineComponent({
  name: "TopNav",
  props: ["cabinet"],
  setup() {
    const { showByName } = useModal();
    const login = () => {
      showByName(ModalName.login);
    };
    return { login };
  },
  components: {
    // SvgSprite,
    Logo,
    Nav, LangSwitcher, TopNavAccount
  },
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggleClass: function () {
      this.isActive = !this.isActive;
      document.body.classList.toggle("fixed");
      // some code to filter users
    },
  },
});
</script>

<style lang="scss">
</style>