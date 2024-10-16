<template>
  <div>
    <h1>{{ translations.about_message }}</h1>
    <p>{{ translations.about_description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetchTranslations } from '../api/translationsApi';

interface Translations {
  about_message?: string;
  about_description?: string;
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
      const response = await fetchTranslations('about', this.locale);
      this.translations = response.data;
    }
  }
});
</script>
