import {computed, defineComponent, inject, onMounted, ref, type Ref, watch} from 'vue';
import { useI18n } from 'vue-i18n';
import languages from '@/shared/config/languages';
import EntitiesMenu from '@/entities/entities-menu.vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'USlidebar',
  components: {
    'entities-menu': EntitiesMenu,
  },
  props: {
    id: String,
  },
  setup(props) {
    const currentLanguage = inject('currentLanguage', () => computed(() => navigator.language ?? 'fr'), true);
    const changeLanguage = inject<(string) => Promise<void>>('changeLanguage');
    const isActiveLanguage = (key: string) => {
      return key === currentLanguage.value;
    };

    const sidebarId = ref(props.id);

    return {
      changeLanguage,
      languages: languages(),
      isActiveLanguage,
      currentLanguage,
      t$: useI18n().t,
      sidebarId,
    };
  },
  methods: {
  },
});
