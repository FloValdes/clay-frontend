<template>
  <div>
    <h1>{{ translations.welcome_message }}</h1>
    <button>{{ translations.cta_button }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetchTranslations } from '../api/translationsApi';

interface Translations {
  welcome_message?: string;
  cta_button?: string;
}

export default defineComponent({
  props: {
    locale: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      translations: {} as Translations,
    };
  },
  async created() {
    this.getTranslations();
  },
  watch: {
    locale() {
      this.getTranslations();
    }
  },
  methods: {
    async getTranslations() {
      const response = await fetchTranslations('home', this.locale);
      this.translations = response.data;
    }
  }
});
</script>
