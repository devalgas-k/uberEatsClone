import { defineComponent, provide } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import LoginForm from '@/account/login-form/login-form.vue';
import UHeader from '@/core/u-header/u-header.vue';

import { useAlertService } from '@/shared/alert/alert.service';

import '@/shared/config/dayjs';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'App',
  components: {
    ribbon: Ribbon,
    'jhi-navbar': JhiNavbar,
    'login-form': LoginForm,
    'jhi-footer': JhiFooter,
    'u-header': UHeader,
  },
  setup() {
    provide('alertService', useAlertService());

    return {
      t$: useI18n().t,
    };
  },
});
