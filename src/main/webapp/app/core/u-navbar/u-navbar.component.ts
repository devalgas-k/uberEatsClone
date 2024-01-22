import {computed, defineComponent, inject, onMounted, ref, type Ref, watch} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import type LoginService from '@/account/login.service';
import type AccountService from '@/account/account.service';
import languages from '@/shared/config/languages';
import EntitiesMenu from '@/entities/entities-menu.vue';

import { useStore } from '@/store';
import { useWindowScroll, breakpointsTailwind, useBreakpoints } from '@vueuse/core';

import USidebar from '@/core/u-sidebar/u-sidebar.vue';


export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'UNavbar',
  components: {
    'entities-menu': EntitiesMenu,
    'u-sidebar': USidebar,
  },
  setup() {
    const loginService = inject<LoginService>('loginService');
    const accountService = inject<AccountService>('accountService');
    const currentLanguage = inject('currentLanguage', () => computed(() => navigator.language ?? 'fr'), true);
    const changeLanguage = inject<(string) => Promise<void>>('changeLanguage');
    const { x, y } = useWindowScroll();
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const isActiveLanguage = (key: string) => {
      return key === currentLanguage.value;
    };

    const router = useRouter();
    const store = useStore();

    const hasAnyAuthorityValues: Ref<any> = ref({});

    const openAPIEnabled = computed(() => store.activeProfiles.indexOf('api-docs') > -1);
    const inProduction = computed(() => store.activeProfiles.indexOf('prod') > -1);
    const authenticated = computed(() => store.authenticated);

    const openLogin = () => {
      loginService.openLogin();
    };

    const subIsActive = (input: string | string[]) => {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => {
        return router.currentRoute.value.path.indexOf(path) === 0; // current path starts with this path string
      });
    };

    const logout = async () => {
      localStorage.removeItem('jhi-authenticationToken');
      sessionStorage.removeItem('jhi-authenticationToken');
      store.logout();
      if (router.currentRoute.value.path !== '/') {
        router.push('/');
      }
    };

    let scrollY = ref(0);
    let isMobile= ref(breakpoints.smallerOrEqual('sm'));
    let isScroll = ref(y.value > 10);

    watch(y, newValue => {
      scrollY.value = newValue;
      isScroll.value = scrollY.value > 10;

    });

    let labelButtonConnexion = ref(isMobile.value ? '' :  `global.menu.connexion`);

    watch(breakpoints.current(), newValue => {
      isMobile = breakpoints.smallerOrEqual('sm');
      isMobile.value ? labelButtonConnexion.value = '' : labelButtonConnexion.value = `global.menu.connexion`;
    })
    computed(isScroll);

    const sidebarId = ref('sidebar-1');

    return {
      logout,
      subIsActive,
      accountService,
      openLogin,
      changeLanguage,
      languages: languages(),
      isActiveLanguage,
      currentLanguage,
      hasAnyAuthorityValues,
      openAPIEnabled,
      inProduction,
      authenticated,
      t$: useI18n().t,
      isScroll,
      labelButtonConnexion,
      isMobile,
      breakpoints,
      sidebarId,
    };
  },
  methods: {
    hasAnyAuthority(authorities: any): boolean {
      this.accountService.hasAnyAuthorityAndCheckAuth(authorities).then(value => {
        if (this.hasAnyAuthorityValues[authorities] !== value) {
          this.hasAnyAuthorityValues = { ...this.hasAnyAuthorityValues, [authorities]: value };
        }
      });
      return this.hasAnyAuthorityValues[authorities] ?? false;
    },
  },
});
