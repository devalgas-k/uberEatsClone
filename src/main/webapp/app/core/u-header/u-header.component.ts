import { defineComponent, provide } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import UNavbar from '@/core/u-navbar/u-navbar.vue';

import { useAlertService } from '@/shared/alert/alert.service';

import '@/shared/config/dayjs';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'UHeader',
  components: {
    ribbon: Ribbon,
    'u-navbar': UNavbar,
  },
  setup() {
    provide('alertService', useAlertService());

    return {
      t$: useI18n().t,
    };
  },
});
